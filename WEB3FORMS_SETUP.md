# Web3Forms Setup Guide

## Quick Setup (2 minutes)

### Step 1: Get Your Access Key
1. Visit [https://web3forms.com](https://web3forms.com)
2. Click "Get Started Free"
3. Enter your email address
4. Verify your email
5. Copy your **Access Key**

### Step 2: Add Access Key to Your Project
1. Open the `.env` file in your project root
2. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-actual-access-key-here
   ```
3. Save the file

### Step 3: Restart Dev Server
```bash
npm run dev
```

## Testing the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email - you'll receive the submission details

## Features
✅ **No backend required** - Pure frontend solution  
✅ **Free forever** - Up to 250 submissions/month  
✅ **Email notifications** - Instant delivery  
✅ **Spam protection** - Built-in reCAPTCHA  
✅ **Custom fields** - Fully customizable  

## Troubleshooting

### Form not submitting?
- Make sure you've added the access key to `.env`
- Restart your dev server after adding the key
- Check browser console for errors

### Not receiving emails?
- Check your spam folder
- Verify your email on Web3Forms dashboard
- Make sure the access key is correct

## Additional Configuration (Optional)

You can customize the email by modifying the ContactForm.jsx file:
- `subject`: Change the email subject line
- `from_name`: Change sender name
- Add custom fields as needed

For more options, visit: [https://docs.web3forms.com](https://docs.web3forms.com)
