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
  { text: "DOMINATE", filled: true },
  { text: "OUTPERFORM" },
  { text: "OUTCLOSE", filled: true },
  { text: "OUTDELIVER" },
  { text: "GS MARKETING", filled: true },
  { text: "ELITE TEAMS" },
  { text: "FIBER SALES", filled: true },
  { text: "BUILD DYNASTIES" },
];

const Divider = () => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    margin: "0 4px",
    color: "rgba(245,200,66,0.35)",
    fontSize: "0.5rem",
    letterSpacing: "0",
  }}>◆</span>
);

export default function Ticker() {
  return (
    <div style={{
      background: "var(--mid)",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      borderBottom: "1px solid rgba(255,255,255,0.04)",
      padding: "22px 0",
      overflow: "hidden",
    }}>
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span className={`ticker-item${item.filled ? " filled" : ""}`}>
              {item.text}
            </span>
            <Divider />
          </span>
        ))}
      </div>
    </div>
  );
}
