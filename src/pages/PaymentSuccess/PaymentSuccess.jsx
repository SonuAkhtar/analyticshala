import { useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./PaymentSuccess.css";

const STEPS = [
  {
    icon: "fas fa-envelope",
    label: "Check your email",
    desc: "A confirmation has been sent to your inbox.",
  },
  {
    icon: "fab fa-whatsapp",
    label: "Join the WhatsApp group",
    desc: "All study material and batch updates are shared there.",
    cta: { href: "https://wa.me/918882641988", text: "Join Now" },
  },
  {
    icon: "fas fa-calendar-check",
    label: "Attend your first session",
    desc: "Your mentor will share the class link 1 hour before.",
  },
  {
    icon: "fas fa-users",
    label: "Introduce yourself",
    desc: "Say hi in the group - your batchmates are waiting!",
  },
];

/* Lightweight CSS confetti - pure DOM/CSS, no library */
const Confetti = () => {
  const COLORS = [
    "#f97316",
    "#16a34a",
    "#4f46e5",
    "#f59e0b",
    "#10b981",
    "#ec4899",
  ];
  const PIECES = Array.from({ length: 48 });
  return (
    <div className="confetti" aria-hidden="true">
      {PIECES.map((_, i) => (
        <span
          key={i}
          className="confetti__piece"
          style={{
            "--color": COLORS[i % COLORS.length],
            "--left": `${Math.random() * 100}%`,
            "--delay": `${Math.random() * 0.8}s`,
            "--dur": `${1.2 + Math.random() * 0.8}s`,
            "--rotate": `${Math.random() * 360}deg`,
          }}
        />
      ))}
    </div>
  );
};

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const hasRedirected = useRef(false);

  const name = state?.name || "Student";
  const email = state?.email || "";
  const title = state?.title || "your program";
  const paymentId = state?.paymentId || "";

  // Copy referral link
  const copyReferral = () => {
    navigator.clipboard.writeText(window.location.origin + "/courses");
  };

  const shareWhatsApp = () => {
    const msg = encodeURIComponent(
      `Just enrolled in ${title} at AnalyticShala! 🎉 Use this link to check it out: ${window.location.origin}/courses`,
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="ps">
      <Confetti />

      <div className="ps__card">
        {/* Check icon */}
        <div className="ps__icon-wrap">
          <div className="ps__icon-ring" />
          <div className="ps__icon">
            <i className="fas fa-check" />
          </div>
        </div>

        <div className="ps__heading-group">
          <h1 className="ps__heading">You&apos;re Enrolled!</h1>
          <p className="ps__sub">
            Welcome to AnalyticShala, <strong>{name.split(" ")[0]}</strong>! 🎉
          </p>
          {email && (
            <p className="ps__email-note">
              <i className="fas fa-envelope" /> Confirmation sent to{" "}
              <strong>{email}</strong>
            </p>
          )}
          {paymentId && (
            <p className="ps__payment-id">
              Payment ID: <code>{paymentId}</code>
            </p>
          )}
        </div>

        {/* Next steps */}
        <div className="ps__steps">
          <h3 className="ps__steps-title">What happens next?</h3>
          {STEPS.map((step, i) => (
            <div key={i} className="ps__step">
              <div className="ps__step-num">{i + 1}</div>
              <div className="ps__step-icon">
                <i className={step.icon} />
              </div>
              <div className="ps__step-body">
                <strong>{step.label}</strong>
                <span>{step.desc}</span>
                {step.cta && (
                  <a
                    href={step.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps__step-cta"
                  >
                    <i className="fab fa-whatsapp" /> {step.cta.text}{" "}
                    <i className="fas fa-arrow-right" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Refer a friend */}
        <div className="ps__refer">
          <div className="ps__refer-text">
            <i className="fas fa-gift" />
            <div>
              <strong>Tell a friend - both get ₹200 off</strong>
              <span>Share your enrollment and earn rewards</span>
            </div>
          </div>
          <div className="ps__refer-actions">
            <button
              className="ps__refer-btn ps__refer-btn--copy"
              onClick={copyReferral}
            >
              <i className="fas fa-copy" /> Copy Link
            </button>
            <button
              className="ps__refer-btn ps__refer-btn--wa"
              onClick={shareWhatsApp}
            >
              <i className="fab fa-whatsapp" /> Share
            </button>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="ps__actions">
          <Link to="/courses" className="ps__btn ps__btn--primary">
            Explore More Courses <i className="fas fa-arrow-right" />
          </Link>
          <Link to="/" className="ps__btn ps__btn--ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
