"use client";
export default function Footer() {
  const links = ["About", "Results", "Services", "Earnings", "Apply", "Contact"];

  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px", flexWrap: "wrap", gap: "32px" }}>
          {/* Logo + tagline */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{
                width: 38, height: 38,
                background: "var(--gold)",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "14px", fontWeight: 900, color: "#000", fontFamily: "'Bebas Neue', cursive" }}>GS</span>
              </div>
              <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.4rem", letterSpacing: "0.1em" }}>
                GS <span style={{ color: "var(--gold)" }}>Marketing</span>
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.3)", maxWidth: "280px", lineHeight: 1.7 }}>
              Building elite sales teams that dominate the fiber optic industry.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">{l}</a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { label: "IG", href: "#" },
              { label: "YT", href: "#" },
              { label: "TK", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  width: 36, height: 36,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Gold line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(245,200,66,0.3), transparent)", marginBottom: "32px" }} />

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} GS Marketing. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
