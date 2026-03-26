"use client";

const tiers = [
  { title: "Rookie", amount: "$40,442", description: "Someone who has never sold door to door before. Zero sales experience required. Just the will to win.", tag: "Entry Level" },
  { title: "Veteran", amount: "$173,749", description: "Seasoned warriors. Not their first rodeo. 1+ seasons of proven experience. Consistent closers.", tag: "1+ Season", featured: true },
  { title: "Manager", amount: "$365,877", description: "Handles operations. Drives team culture. Produces results. 2–3 seasons of elite experience.", tag: "2-3 Seasons" },
];

export default function Earnings() {
  return (
    <section id="results" style={{ background: "var(--mid)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold)" }}>LET'S TALK MONEY</span>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 1, color: "#fff" }}>
            100% Commission.<br />
            <span style={{ color: "var(--gold)" }}>Unlimited Ceiling.</span>
          </h2>
          <p style={{ marginTop: "20px", fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "500px", margin: "20px auto 0", lineHeight: 1.7 }}>
            The GS Marketing pay scale is 100% commission based — so this number can get as high as you want.
          </p>
        </div>

        <div className="earnings-grid">
          {tiers.map((tier) => (
            <div key={tier.title} className="reveal" style={{
              background: tier.featured ? "var(--gold)" : "var(--card)",
              padding: "40px 32px",
              border: tier.featured ? "none" : "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ display: "inline-block", background: tier.featured ? "rgba(0,0,0,0.15)" : "rgba(245,200,66,0.1)", color: tier.featured ? "#000" : "var(--gold)", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.15em", fontSize: "0.7rem", padding: "4px 12px", marginBottom: "20px" }}>
                {tier.tag}
              </div>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "0.9rem", letterSpacing: "0.15em", color: tier.featured ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)", marginBottom: "8px", textTransform: "uppercase" }}>
                Avg. {tier.title} Made
              </div>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: tier.featured ? "#000" : "var(--gold)", lineHeight: 1, marginBottom: "16px" }}>
                {tier.amount}
              </div>
              <div style={{ width: "40px", height: "2px", background: tier.featured ? "rgba(0,0,0,0.3)" : "var(--gold)", marginBottom: "16px" }} />
              <p style={{ fontSize: "0.9rem", color: tier.featured ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "28px" }}>
                {tier.description}
              </p>
              <a href="#apply" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.12em", fontSize: "0.9rem", color: tier.featured ? "#000" : "var(--gold)", textDecoration: "none", borderBottom: `1px solid ${tier.featured ? "rgba(0,0,0,0.3)" : "rgba(245,200,66,0.3)"}`, paddingBottom: "2px" }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "32px", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
          * Rookie: someone who has never sold door to door before. Zero sales experience required.
        </p>
      </div>
    </section>
  );
}
