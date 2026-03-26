"use client";

const tiers = [
  {
    title: "Rookie",
    amount: "$40,442",
    description: "Someone who has never sold door to door before. Zero sales experience required. Just the will to win.",
    color: "rgba(255,255,255,0.08)",
    accent: "rgba(255,255,255,0.6)",
    tag: "Entry Level",
  },
  {
    title: "Veteran",
    amount: "$173,749",
    description: "Seasoned warriors. Not their first rodeo. 1+ seasons of proven experience. Consistent closers.",
    color: "var(--gold)",
    accent: "#000",
    tag: "1+ Season",
    featured: true,
  },
  {
    title: "Manager",
    amount: "$365,877",
    description: "Handles operations. Drives team culture. Produces results. 2–3 seasons of elite experience.",
    color: "rgba(255,255,255,0.08)",
    accent: "rgba(255,255,255,0.6)",
    tag: "2-3 Seasons",
  },
];

export default function Earnings() {
  return (
    <section id="results" style={{ background: "var(--mid)", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold)" }}>
              LET'S TALK MONEY
            </span>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1, color: "#fff" }}>
            100% Commission.
            <br />
            <span style={{ color: "var(--gold)" }}>Unlimited Ceiling.</span>
          </h2>
          <p style={{ marginTop: "20px", fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "500px", margin: "20px auto 0", lineHeight: 1.7 }}>
            The GS Marketing pay scale is 100% commission based — so this number can get as high as you want.
          </p>
        </div>

        {/* Tier cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
          {tiers.map((tier, i) => (
            <div
              key={tier.title}
              className="reveal"
              style={{
                animationDelay: `${i * 0.1}s`,
                background: tier.featured ? "var(--gold)" : "var(--card)",
                padding: "48px 36px",
                position: "relative",
                overflow: "hidden",
                border: tier.featured ? "none" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Tag */}
              <div style={{
                display: "inline-block",
                background: tier.featured ? "rgba(0,0,0,0.15)" : "rgba(245,200,66,0.1)",
                color: tier.featured ? "#000" : "var(--gold)",
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: "0.15em",
                fontSize: "0.7rem",
                padding: "4px 12px",
                marginBottom: "24px",
              }}>
                {tier.tag}
              </div>

              <div style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                color: tier.featured ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
                marginBottom: "8px",
                textTransform: "uppercase",
              }}>
                Avg. {tier.title} Made
              </div>

              <div style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: tier.featured ? "#000" : "var(--gold)",
                lineHeight: 1,
                marginBottom: "20px",
              }}>
                {tier.amount}
              </div>

              <div style={{ width: "40px", height: "2px", background: tier.featured ? "rgba(0,0,0,0.3)" : "var(--gold)", marginBottom: "20px" }} />

              <p style={{
                fontSize: "0.9rem",
                color: tier.featured ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}>
                {tier.description}
              </p>

              <a href="#apply" style={{
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: "0.12em",
                fontSize: "0.9rem",
                color: tier.featured ? "#000" : "var(--gold)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: `1px solid ${tier.featured ? "rgba(0,0,0,0.3)" : "rgba(245,200,66,0.3)"}`,
                paddingBottom: "2px",
              }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p style={{ textAlign: "center", marginTop: "32px", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
          * Rookie: someone who has never sold door to door before. Zero sales experience required.
        </p>
      </div>
    </section>
  );
}
