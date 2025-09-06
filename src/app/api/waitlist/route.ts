import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const waitlistSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not configured. Please contact support.' 
        },
        { status: 500 }
      );
    }

    // Verify API key format
    const apiKey = process.env.RESEND_API_KEY;
    console.log('🔑 API Key configured:', apiKey.startsWith('re_') ? `re_****${apiKey.slice(-4)}` : 'Invalid format');
    
    if (!apiKey.startsWith('re_')) {
      console.error('❌ RESEND_API_KEY appears to have invalid format. Should start with "re_"');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service misconfigured. Please contact support.' 
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('📩 Processing waitlist signup for:', body.email);
    
    // Validate the request body
    const validatedData = waitlistSchema.parse(body);
    
    // Send welcome email to the user
    console.log('📧 Attempting to send welcome email...');
    const userEmailResult = await resend.emails.send({
      from: 'CareerRPG <welcome@careerrpg.app>',
      to: [validatedData.email],
      subject: '🎮 Welcome to the CareerRPG Founders Circle!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to CareerRPG</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #059669; font-size: 28px; margin-bottom: 10px;">🎮 Welcome to the Founders Circle!</h1>
              <p style="color: #64748b; font-size: 18px; margin: 0;">You're now part of something extraordinary</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); border-radius: 16px; padding: 32px; margin-bottom: 32px; border: 1px solid #d1fae5;">
              <h2 style="color: #065f46; font-size: 22px; margin-bottom: 16px;">🚀 What happens next?</h2>
              <ul style="color: #374151; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><strong>Early Access:</strong> Be among the first to experience CareerRPG when we launch</li>
                <li style="margin-bottom: 8px;"><strong>Exclusive Updates:</strong> Get behind-the-scenes insights and development progress</li>
                <li style="margin-bottom: 8px;"><strong>Founding Member Perks:</strong> Special benefits and recognition for early supporters</li>
                <li style="margin-bottom: 8px;"><strong>Shape the Future:</strong> Your feedback will directly influence our development roadmap</li>
              </ul>
            </div>
            
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <h3 style="color: #1e293b; font-size: 20px; margin-bottom: 16px;">✨ Your Journey Begins</h3>
              <p style="color: #475569; margin-bottom: 16px;">
                CareerRPG transforms professional development into an engaging, game-like experience. 
                Think of it as leveling up your career with the excitement of your favorite RPG.
              </p>
              <p style="color: #475569; margin: 0;">
                We're building something that will revolutionize how professionals grow, learn, and advance in their careers.
              </p>
            </div>
            
            <div style="text-align: center; margin-bottom: 32px;">
              <a href="https://careerrpg.app" style="background: linear-gradient(135deg, #059669 0%, #0891b2 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; display: inline-block;">
                Visit CareerRPG
              </a>
            </div>
            
            <div style="text-align: center; color: #64748b; font-size: 14px;">
              <p>Follow our journey:</p>
              <p>
                <a href="#" style="color: #059669; text-decoration: none; margin: 0 8px;">Twitter</a> |
                <a href="#" style="color: #059669; text-decoration: none; margin: 0 8px;">LinkedIn</a> |
                <a href="#" style="color: #059669; text-decoration: none; margin: 0 8px;">Discord</a>
              </p>
              <p style="margin-top: 20px; font-size: 12px;">
                You're receiving this email because you joined the CareerRPG waitlist. 
                <a href="#" style="color: #64748b;">Unsubscribe</a>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    console.log('✅ Welcome email result:', userEmailResult);
    console.log('📧 Welcome email ID:', userEmailResult.data?.id);
    
    if (userEmailResult.error) {
      console.error('❌ Welcome email error:', userEmailResult.error);
      throw new Error(`Failed to send welcome email: ${userEmailResult.error.message}`);
    }

    // Store the entry (optional - for simple tracking)
    try {
      await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/waitlist/stats`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });
    } catch (error) {
      console.warn('Failed to store waitlist entry locally:', error);
    }

    // Send notification email to admin (optional)
    console.log('📧 Attempting to send admin notification...');
    const adminEmailResult = await resend.emails.send({
      from: 'CareerRPG Waitlist <notifications@careerrpg.app>',
      to: [process.env.ADMIN_EMAIL || 'team@careerrpg.app'],
      subject: '🎯 New Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.name ? `<p><strong>Name:</strong> ${validatedData.name}</p>` : ''}
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    });

    console.log('✅ Admin notification result:', adminEmailResult);
    console.log('📧 Admin notification ID:', adminEmailResult.data?.id);
    
    if (adminEmailResult.error) {
      console.error('❌ Admin notification error:', adminEmailResult.error);
      // Don't throw error for admin email failure, just log it
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist!' 
    });

  } catch (error) {
    console.error('Waitlist submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data', 
          errors: error.issues 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to join waitlist. Please try again.' 
      },
      { status: 500 }
    );
  }
}
