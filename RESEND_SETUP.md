# Resend Waitlist Setup Guide

This guide will help you set up the Resend email integration for the CareerRPG waitlist functionality.

## 🚀 Quick Setup

### 1. Get Your Resend API Key

1. Go to [Resend.com](https://resend.com) and create an account
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Create a new API key with the following permissions:
   - `emails:send`
4. Copy your API key (starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Copy the example file
cp env.example .env.local
```

Update `.env.local` with your actual values:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration (optional - update with your domain)
FROM_EMAIL=welcome@careerrpg.com
ADMIN_EMAIL=team@careerrpg.com
```

### 3. Domain Setup (Optional but Recommended)

For production, you should use your own domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (e.g., `careerrpg.com`)
3. Follow the DNS verification steps
4. Update the `FROM_EMAIL` in your `.env.local` file

**Note:** For testing, you can use Resend's default domain, but emails will be marked as "via resend.dev"

## 📧 Email Features

### User Welcome Email
When someone joins the waitlist, they receive:
- ✅ Professional welcome email with CareerRPG branding
- 🎮 Information about what to expect
- 🚀 Details about early access and founding member perks
- 📱 Social media links and unsubscribe option

### Admin Notification
You'll receive notifications for:
- 📩 New waitlist signups
- 👤 User details (name, email, timestamp)
- 📊 Easy tracking of your growing waitlist

## 🔧 Customization

### Email Templates
The email templates are embedded in `/src/app/api/waitlist/route.ts`. You can customize:

- **Branding**: Update colors, logos, and styling
- **Content**: Modify the welcome message and benefits
- **Links**: Add your social media and website links
- **Unsubscribe**: Implement proper unsubscribe handling

### Error Handling
The implementation includes:
- ✅ Form validation with Zod
- 🛡️ API error handling
- 📱 User-friendly error messages
- 🔄 Loading states and success feedback

## 🧪 Testing

### Development Testing
1. Start your development server: `npm run dev`
2. Navigate to your waitlist form
3. Submit a test email
4. Check the console for any errors
5. Verify the email was sent (check your email)

### Production Checklist
- [ ] API key is set in production environment
- [ ] Domain is verified in Resend
- [ ] FROM_EMAIL uses your verified domain
- [ ] Admin email is correctly set
- [ ] Test the full flow in production

## 🚨 Troubleshooting

### Common Issues

**"Missing API Key" Error**
- Ensure `RESEND_API_KEY` is set in `.env.local`
- Restart your development server after adding env vars

**"Domain Not Verified" Error**
- Use Resend's default domain for testing
- Or complete domain verification in Resend dashboard

**Emails Not Sending**
- Check Resend dashboard for delivery status
- Verify API key permissions include `emails:send`
- Check console for detailed error messages

**Form Submission Errors**
- Check browser network tab for API response
- Verify the API route is accessible at `/api/waitlist`
- Check server console for detailed error logs

## 📊 Monitoring

### Resend Dashboard
Monitor your email performance:
- Delivery rates
- Open rates
- Click rates
- Bounce rates

### Analytics Integration
Consider adding:
- Email click tracking
- Conversion analytics
- A/B testing for email content

## 🔐 Security Best Practices

- ✅ Never commit `.env.local` to version control
- ✅ Use environment variables for all sensitive data
- ✅ Validate all input data with Zod schemas
- ✅ Implement rate limiting for production
- ✅ Add CORS headers if needed for cross-origin requests

## 🎯 Next Steps

1. **Database Integration**: Consider storing waitlist entries in a database
2. **Email Sequences**: Set up automated email sequences for subscribers
3. **Segmentation**: Tag users based on their interests or role
4. **Analytics**: Track email performance and user engagement
5. **Unsubscribe**: Implement proper unsubscribe handling

## 💡 Pro Tips

- Use Resend's template system for more complex emails
- Implement email previews before sending
- Add email scheduling for optimal send times
- Consider using Resend's webhook system for delivery tracking
- Test emails across different email clients

---

Need help? Check the [Resend Documentation](https://resend.com/docs) or create an issue in this repository.
