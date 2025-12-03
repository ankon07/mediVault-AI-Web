# EmailJS Setup Guide for MedVault AI Wishlist

This guide will help you set up EmailJS to receive wishlist emails at `ankonahamed@gmail.com`.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create an account
3. EmailJS offers 200 free emails per month

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (or your preferred email provider)
4. Click **Connect Account** and sign in with `ankonahamed@gmail.com`
5. Give the service a name (e.g., "MedVault Wishlist")
6. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template as follows:

### Template Settings:
- **Template Name**: MedVault Wishlist
- **Subject**: New MedVault AI Early Access Request from {{from_name}}

### Template Content:
```
New Early Access Request

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent via MedVault AI website wishlist form.
Reply to: {{reply_to}}
```

4. In **To Email**, enter: `ankonahamed@gmail.com`
5. In **From Name**, enter: `MedVault AI Website`
6. In **Reply To**, enter: `{{reply_to}}`
7. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** under the "API Keys" section
3. Copy the Public Key

## Step 5: Update App.tsx

Open `App.tsx` and update the EmailJS configuration at the top of the file:

```typescript
// EmailJS Configuration - Replace with your actual keys from emailjs.com
const EMAILJS_SERVICE_ID = 'service_xxxxxxx';  // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Your Template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key';   // Your Public Key
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Open http://localhost:3000
3. Click "Get Early Access"
4. Fill out the form and submit
5. Check your inbox at `ankonahamed@gmail.com`

## Template Variables Reference

The following variables are sent from the form:

| Variable | Description |
|----------|-------------|
| `{{to_email}}` | Destination email (ankonahamed@gmail.com) |
| `{{from_name}}` | User's name (or "Anonymous User") |
| `{{from_email}}` | User's email address |
| `{{message}}` | The request message |
| `{{reply_to}}` | User's email for replying |

## Troubleshooting

### Email not sending?
- Check browser console for errors
- Verify all three IDs (Service, Template, Public Key) are correct
- Ensure your EmailJS account is active
- Check your EmailJS dashboard for error logs

### Emails going to spam?
- Mark the email as "Not Spam" once
- Add the EmailJS sending address to your contacts
- Consider setting up SPF/DKIM records (advanced)

## Alternative: Use Web3Forms (Simpler Setup)

If you prefer a simpler setup without creating an account:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter `ankonahamed@gmail.com` and get an Access Key
3. Replace the EmailJS code in `App.tsx` with a simple fetch:

```typescript
const handleWishlistSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus('submitting');
  
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'YOUR_ACCESS_KEY_HERE',
      email: email,
      name: userName || 'Anonymous User',
      message: `New early access request for MedVault AI APK`,
    }),
  });
  
  if (response.ok) {
    setFormStatus('success');
  } else {
    setFormStatus('error');
  }
};
```

---

For any issues, contact the development team or refer to the [EmailJS Documentation](https://www.emailjs.com/docs/).
