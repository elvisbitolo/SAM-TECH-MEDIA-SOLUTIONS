import Image from "next/image";
import SiteHeader from "./components/site-header";
import Reveal from "./components/reveal";
import Gallery from "./components/gallery";
import BookingForm from "./components/booking-form";
import { business, defaultBookingUrl } from "./site-config";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M7 8h10a4 4 0 013.9 4.9l-1 4.3a2.2 2.2 0 01-3.6 1.2L14 16h-4l-2.3 2.4a2.2 2.2 0 01-3.6-1.2l-1-4.3A4 4 0 017 8z" strokeLinejoin="round" />
      <path d="M8 11v3M6.5 12.5h3M16 11.5h.01M18 13.5h.01" strokeLinecap="round" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3.5 9a13 13 0 0117 0M6.5 12.5a8.5 8.5 0 0111 0M9.5 16a4 4 0 015 0" strokeLinecap="round" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ConsoleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="7" width="18" height="10" rx="4" />
      <path d="M7 10.5v3M5.5 12h3M15.5 11.5h.01M18 13.5h.01" strokeLinecap="round" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M7 8V4h10v4M7 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-2" strokeLinejoin="round" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
    </svg>
  );
}

function RepairIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M14.7 6.3a4.5 4.5 0 00-5.9 5.9L4 17v3h3l5.8-4.8a4.5 4.5 0 005.9-5.9L16 12l-2-2 2.7-3.7z" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0111 0M16 5.5a3 3 0 010 5.8M17 14a5 5 0 013.5 5" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M6 3.5h3l1.5 4-2 1.5a12 12 0 007.5 7.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014 5.7 2 2 0 016 3.5z" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M20 11.5a8 8 0 01-8 8 8.6 8.6 0 01-3.9-.9L4 20l1.4-4A8 8 0 1120 11.5z" strokeLinejoin="round" />
      <path d="M9 10.5h.01M12 10.5h.01M15 10.5h.01" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const perks = ["High-performance PCs", "Fibre-fast internet", "Console stations", "Print & scan"];

const stats = [
  { value: "40+", label: "Gaming stations" },
  { value: "1 Gbps", label: "Fibre internet" },
  { value: "7 days", label: "Open every day" },
  { value: "Fast", label: "Booking & support" },
];

const tickerItems = [
  "PC gaming",
  "Console stations",
  "Fibre internet",
  "Print & scan",
  "Device repair",
  "LAN parties",
  "Streaming",
  "Online exams",
];

const services = [
  {
    icon: <GameIcon />,
    title: "PC gaming",
    text: "High-end rigs, mechanical keyboards, low-latency monitors and the space to play your best.",
  },
  {
    icon: <WifiIcon />,
    title: "Fibre internet",
    text: "Fast, stable connectivity for streaming, downloads, remote work and competitive play.",
  },
  {
    icon: <ConsoleIcon />,
    title: "Console stations",
    text: "Pick up a controller and jump into your favourite titles with friends, any time.",
  },
  {
    icon: <PrintIcon />,
    title: "Printing & scanning",
    text: "Documents, assignments and scans handled quickly while you focus on everything else.",
  },
  {
    icon: <RepairIcon />,
    title: "Device repair",
    text: "Screen and battery replacements, diagnostics and gadget care from experienced engineers.",
  },
  {
    icon: <UsersIcon />,
    title: "Groups & LAN parties",
    text: "Book a block of stations for tournaments, study groups or a proper night in with friends.",
  },
];

const steps = [
  {
    title: "Pick your slot",
    text: "Send us your preferred date and time on WhatsApp – it takes less than a minute.",
  },
  {
    title: "Show up & settle in",
    text: "Find your station, grab a seat and get comfortable. We'll handle the setup.",
  },
  {
    title: "Play, work, repeat",
    text: "Stay as long as you need, switch between gaming and work, and come back anytime.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader bookingUrl={defaultBookingUrl} />

      <main>
        <section className="hero" id="home">
          <div className="hero-bg" />
          <div className="hero-grid-overlay" />
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="badge">
                <span className="badge-dot" />
                Open daily · {business.location}
              </span>
              <h1 className="hero-title">
                Game harder.
                <br />
                Work faster.
                <br />
                <span className="gradient-text">Stay longer.</span>
              </h1>
              <p className="hero-text">
                High-performance PCs, fibre-fast internet and a space built for players,
                students and creators. Your best session starts at Samtech.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={defaultBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a station
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a className="btn btn-outline" href="#gallery">
                  Explore the café
                </a>
              </div>
              <div className="hero-perks">
                {perks.map((perk) => (
                  <span className="perk" key={perk}>
                    <CheckIcon />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-frame">
                <Image
                  className="hero-image"
                  src="/computers.png"
                  alt="Gaming computers set up at Samtech Cyber Café"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
                <div className="frame-top">
                  <span className="frame-label">01 / Gaming floor</span>
                  <span className="frame-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div className="status-chip">
                  <span className="badge-dot" />
                  Stations ready
                </div>
              </div>
              <div className="float-card float-card-one">
                <span className="float-card-value">1 Gbps</span>
                <span className="float-card-label">Fibre line</span>
              </div>
              <div className="float-card float-card-two">
                <span className="float-card-value">40+</span>
                <span className="float-card-label">High-end PCs</span>
              </div>
            </div>
          </div>
        </section>

        <div className="stats-bar">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-item" key={copy}>
                {tickerItems.map((item) => (
                  <span key={`${copy}-${item}`}>
                    {item} <span>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="section about" id="about">
          <div className="container about-grid">
            <Reveal className="about-visual">
              <div className="about-image-wrap">
                <Image
                  className="about-image"
                  src="/storefront.png"
                  alt="The front of Samtech Cyber Café"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>
              <div className="about-sticker">
                <strong>Built for the long session.</strong>
                <span>Comfort, speed and good company.</span>
              </div>
            </Reveal>

            <Reveal className="about-copy" delay={120}>
              <span className="section-label">About us</span>
              <h2 className="section-title">
                More than a café. <span className="gradient-text">Your second setup.</span>
              </h2>
              <p className="section-text">
                Samtech Cyber Café was built by engineer and entrepreneur Samuel Otuoma
                Ouru with one idea: bring the reliability of professional engineering to a
                place where people play, work and connect. Every station, connection and
                service is set up to simply work when you need it.
              </p>
              <p className="section-text" style={{ marginTop: 16 }}>
                Whether you are chasing a rank, finishing an assignment, printing a
                document or fixing a device, you will find a clean space, fast hardware
                and a team that actually cares.
              </p>

              <div className="feature-list">
                <div className="feature">
                  <span className="feature-icon"><WifiIcon /></span>
                  <div>
                    <h3>Engineer-grade reliability</h3>
                    <p>Networks and systems maintained by people who build them for a living.</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon"><GameIcon /></span>
                  <div>
                    <h3>Serious hardware</h3>
                    <p>Responsive PCs and consoles ready for gaming, streaming and deep work.</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon"><UsersIcon /></span>
                  <div>
                    <h3>A community hub</h3>
                    <p>Meet players, team up for tournaments and make the café your base.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <Reveal className="section-head">
              <span className="section-label">What we offer</span>
              <h2 className="section-title">Everything you need under one roof.</h2>
              <p className="section-text">
                Come for the gaming, stay for the internet, printing, repairs and the
                people. One visit covers the whole list.
              </p>
            </Reveal>

            <div className="services-grid">
              {services.map((service, index) => (
                <Reveal className="service-card" delay={index * 70} key={service.title}>
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section steps">
          <div className="container">
            <Reveal className="section-head">
              <span className="section-label">How it works</span>
              <h2 className="section-title">Three steps to your next session.</h2>
            </Reveal>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <Reveal className="step" delay={index * 90} key={step.title}>
                  <span className="step-number">STEP 0{index + 1}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-text">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="container">
            <Reveal className="section-head">
              <span className="section-label">The space</span>
              <h2 className="section-title">Take a look around.</h2>
              <p className="section-text">
                A clean, lively space with the stations, light and room you need to get
                comfortable. Tap any photo for a closer look.
              </p>
            </Reveal>
            <Reveal>
              <Gallery />
            </Reveal>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-inner">
            <div>
              <h2 className="cta-title">Your next session starts here.</h2>
              <p className="cta-text">Message us now and we will have a station ready for you.</p>
            </div>
            <a
              className="btn btn-primary"
              href={defaultBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <Reveal className="contact-info">
              <span className="section-label">Contact</span>
              <h2 className="section-title">Come say hello.</h2>
              <p className="section-text" style={{ marginBottom: 12 }}>
                Questions about stations, prices or group bookings? Reach out – we reply
                fast.
              </p>

              <a className="contact-card" href={`tel:${business.phone}`}>
                <span className="contact-card-icon"><PhoneIcon /></span>
                <span>
                  <span className="contact-card-label">Call us</span>
                  <span className="contact-card-value">{business.phoneDisplay}</span>
                </span>
              </a>
              <a
                className="contact-card"
                href={defaultBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-card-icon"><ChatIcon /></span>
                <span>
                  <span className="contact-card-label">WhatsApp</span>
                  <span className="contact-card-value">{business.phoneDisplay}</span>
                </span>
              </a>
              <a className="contact-card" href={`mailto:${business.email}`}>
                <span className="contact-card-icon"><MailIcon /></span>
                <span>
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">{business.email}</span>
                </span>
              </a>
              <div className="contact-card">
                <span className="contact-card-icon"><PinIcon /></span>
                <span>
                  <span className="contact-card-label">Find us</span>
                  <span className="contact-card-value">{business.location}</span>
                </span>
              </div>
              <div className="contact-card">
                <span className="contact-card-icon"><ClockIcon /></span>
                <span>
                  <span className="contact-card-label">Opening hours</span>
                  <span className="contact-card-value">{business.hours}</span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <BookingForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#home" aria-label="Samtech Cyber Cafe home">
                <Image
                  className="brand-logo"
                  src="/logo.png"
                  alt="Samtech Cyber Cafe logo"
                  width={92}
                  height={92}
                />
                <span className="brand-copy">
                  <span className="brand-name">Samtech</span>
                  <span className="brand-sub">Cyber Café</span>
                </span>
              </a>
              <p className="footer-text">
                Game. Work. Connect. A fast, friendly cyber café built for the way you
                play and work.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">Explore</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><a href="#services">PC gaming</a></li>
                <li><a href="#services">Console stations</a></li>
                <li><a href="#services">Fibre internet</a></li>
                <li><a href="#services">Printing & scanning</a></li>
                <li><a href="#services">Device repair</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Get in touch</h3>
              <ul className="footer-links">
                <li><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a></li>
                <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
                <li><span>{business.hours}</span></li>
              </ul>
              <div className="socials" style={{ marginTop: 18 }}>
                <a
                  className="social-link"
                  href={defaultBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <ChatIcon />
                </a>
                <a
                  className="social-link"
                  href={business.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5.5 8.5H3V21h2.5V8.5zM4.25 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM21 13.6c0-3.2-1.7-4.7-4-4.7a3.5 3.5 0 00-3.1 1.7V8.5H11.4V21H14v-6.3c0-1.7.8-2.7 2.2-2.7 1.3 0 1.9.9 1.9 2.7V21H21v-7.4z" />
                  </svg>
                </a>
                <a className="social-link" href={`mailto:${business.email}`} aria-label="Email">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Samtech Cyber Café. All rights reserved.</span>
            <span>Built by Samtechmedia Solutions.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
