#!/usr/bin/env node

const fs = require('fs');
const crypto = require('crypto');

console.log('🚀 Setting up CareerRPG Waitlist Environment...\n');

// Generate a secure admin API key
const adminApiKey = crypto.randomBytes(32).toString('base64');

const envContent = `# Resend API Configuration
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
# Replace with your verified domain or use the default resend domain for testing
FROM_EMAIL=welcome@careerrpg.com
ADMIN_EMAIL=team@careerrpg.com

# Admin API Configuration (auto-generated)
ADMIN_API_KEY=${adminApiKey}

# App Configuration
NEXTAUTH_URL=http://localhost:3000
`;

try {
  // Check if .env.local already exists
  if (fs.existsSync('.env.local')) {
    console.log('⚠️  .env.local already exists. Creating .env.local.new instead.');
    fs.writeFileSync('.env.local.new', envContent);
    console.log('✅ Created .env.local.new with your configuration.');
    console.log('📝 Please rename it to .env.local after reviewing the settings.');
  } else {
    fs.writeFileSync('.env.local', envContent);
    console.log('✅ Created .env.local with your configuration.');
  }

  console.log('\n📋 Next Steps:');
  console.log('1. Get your Resend API key from: https://resend.com/api-keys');
  console.log('2. Replace "your_resend_api_key_here" with your actual API key');
  console.log('3. Update ADMIN_EMAIL with your email address');
  console.log('4. Restart your development server: npm run dev');
  console.log('\n🔑 Your Admin API Key (save this):');
  console.log(adminApiKey);
  console.log('\nUse this key to access the admin dashboard at: /admin/waitlist');

} catch (error) {
  console.error('❌ Error creating .env.local:', error.message);
  process.exit(1);
}
