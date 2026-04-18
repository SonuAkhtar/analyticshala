const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

const GOOGLESHEET_WEB_APP_URL = import.meta.env.VITE_GOOGLESHEET_WEB_APP_URL;

// EmailJS - contact form confirmation emails
// Configure in .env.local:
//   VITE_EMAILJS_SERVICE_ID   → your EmailJS service ID
//   VITE_EMAILJS_TEMPLATE_ID  → template with {{name}}, {{email}}, {{message}} vars
//   VITE_EMAILJS_PUBLIC_KEY   → your EmailJS public key (account → API keys)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

if (!RAZORPAY_KEY_ID) {
  throw new Error("Missing RAZORPAY_KEY_ID. Check environment variables.");
}

if (!GOOGLESHEET_WEB_APP_URL) {
  throw new Error(
    "Missing VITE_GOOGLESHEET_WEB_APP_URL. Check environment variables.",
  );
}

export {
  RAZORPAY_KEY_ID,
  GOOGLESHEET_WEB_APP_URL,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
};
