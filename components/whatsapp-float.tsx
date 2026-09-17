"use client";

export default function WhatsAppFloat() {
  const message = "Hello Moksha Fabrics, I would like to enquire about your fabric range.";

  return (
    <a
      href={`https://wa.me/919783123977?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Moksha Fabrics on WhatsApp"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 40,
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        minHeight: 48,
        padding: "0 16px",
        border: "1px solid #173f4b",
        background: "#173f4b",
        color: "#fff",
        boxShadow: "0 12px 30px rgba(23,63,75,.22)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: ".08em",
        textTransform: "uppercase",
      }}
    >
      <span aria-hidden="true" style={{ fontSize: 17, lineHeight: 1 }}>◔</span>
      WhatsApp
    </a>
  );
}
