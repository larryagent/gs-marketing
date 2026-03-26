"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Services", href: "/services" },
  { label: "Apply", href: "/#apply" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        padding: "0 48px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: 38, height: 38,
          background: "var(--gold)",
          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: "14px", fontWeight: 900, color: "#000", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05em" }}>GS</span>
        </div>
        <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.4rem", letterSpacing: "0.1em", color: "#fff" }}>
          GS <span style={{ color: "var(--gold)" }}>Marketing</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden md:flex">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
        ))}
      </div>

      {/* CTA */}
      <a href="#apply" className="btn-gold hidden md:inline-block" style={{ fontSize: "0.85rem", padding: "10px 24px" }}>
        Join the Team
      </a>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "1.5rem" }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, top: "72px",
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "32px", zIndex: 99,
        }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "2.5rem", letterSpacing: "0.1em", color: "#fff", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <a href="#apply" className="btn-gold" onClick={() => setMenuOpen(false)}>Join the Team</a>
        </div>
      )}
    </nav>
  );
}
