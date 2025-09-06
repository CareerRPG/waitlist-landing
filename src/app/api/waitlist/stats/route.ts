import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo purposes
// In production, you'd want to use a proper database
const waitlistEntries: Array<{
  email: string;
  name?: string;
  timestamp: string;
}> = [];

export async function GET(request: NextRequest) {
  // In production, add authentication/authorization here
  const authHeader = request.headers.get('authorization');
  
  // Simple auth check (replace with your auth logic)
  if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    data: {
      total: waitlistEntries.length,
      entries: waitlistEntries.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ),
    },
  });
}

export async function POST(request: NextRequest) {
  // This endpoint is called internally to store waitlist entries
  // You could also store these in a database instead
  
  try {
    const body = await request.json();
    const entry = {
      email: body.email,
      name: body.name,
      timestamp: new Date().toISOString(),
    };
    
    waitlistEntries.push(entry);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to store entry' },
      { status: 500 }
    );
  }
}