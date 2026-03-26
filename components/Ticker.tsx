"use client";

const items = [
  { text: "DOMINATE", filled: true },
  { text: "OUTPERFORM" },
  { text: "OUTCLOSE", filled: true },
  { text: "OUTDELIVER" },
  { text: "GS MARKETING", filled: true },
  { text: "ELITE TEAMS" },
  { text: "FIBER SALES", filled: true },
  { text: "BUILD DYNASTIES" },
  // duplicate for seamless loop
  { text: "DOMINATE", filled: true },
  { text: "OUTPERFORM" },
  { text: "OUTCLOSE", filled: true },
  { text: "OUTDELIVER" },
  { text: "GS MARKETING", filled: true },
  { text: "ELITE TEAMS" },
  { text: "FIBER SALES", filled: true },
  { text: "BUILD DYNASTIES" },
];

export default function Ticker() {
  return (
    <div
      style={{
        background: "var(--mid)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "24px" }}>
            <span className={`ticker-item${item.filled ? " filled" : ""}`}>
              {item.text}
            </span>
            <span style={{ color: "var(--gold)", fontSize: "1.2rem", opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
