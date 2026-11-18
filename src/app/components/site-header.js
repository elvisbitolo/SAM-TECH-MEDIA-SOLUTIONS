"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader({ bookingUrl }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Samtech Cyber Cafe home">
          <Image
            className="brand-logo"
            src="/logo.png"
            alt="Samtech Cyber Cafe logo"
            width={92}
            height={92}
            priority
          />
          <span className="brand-copy">
            <span className="brand-name">Samtech</span>
            <span className="brand-sub">Media Solutions</span>
          </span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-primary btn-sm"
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a slot
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a
            className="nav-link"
            href={link.href}
            key={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="btn btn-primary btn-block"
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a slot
        </a>
      </nav>
    </header>
  );
}
