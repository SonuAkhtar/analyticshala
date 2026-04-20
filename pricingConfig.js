/*
 * ─────────────────────────────────────────────────────────────
 *  PRICING CONFIG  –  edit this file to update all fees
 *  Amounts are in ₹ (INR). Razorpay receives amount × 100 (paise).
 * ─────────────────────────────────────────────────────────────
 */

/* ── Course Fees ─────────────────────────────────────────── */
export const courseFees = {
  analytics:   { regFee: 500,  price: 10999, originalPrice: 16999 },
  datascience: { regFee: 500,  price: 15999, originalPrice: 24999 },
  ai:          { regFee: 500,  price: 12999, originalPrice: 19999 },
  agentic:     { regFee: 500,  price: 14999, originalPrice: 22999 },
  rag:         { regFee: 500,  price: 9999,  originalPrice: 14999 },
  sql:         { regFee: 500,  price: 6999,  originalPrice: 10999 },
  excel:       { regFee: 500,  price: 4999,  originalPrice: 7999  },
  python:      { regFee: 500,  price: 8999,  originalPrice: 13999 },
  tableau:     { regFee: 500,  price: 7999,  originalPrice: 12999 },
  genai:       { regFee: 500,  price: 24999, originalPrice: 39999 },
  webdev:      { regFee: 10,   price: 10,    originalPrice: 199   },
};

/* ── Workshop Fees ───────────────────────────────────────── */
export const workshopFees = {
  1001: { price: 999,  originalPrice: 1999 },   // Excel for Data Analysis
  1002: { price: 1499, originalPrice: 2499 },   // SQL Masterclass
  1007: { price: 10,   originalPrice: 299  },   // Web Dev Intro (test)
};

/* ── Helpers ─────────────────────────────────────────────── */
export const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;
export const emi = (price) => `${fmt(Math.round(price / 12))}/mo`;
