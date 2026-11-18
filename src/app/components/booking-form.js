"use client";

import { useState } from "react";
import { business, whatsappUrl } from "../site-config";

const services = [
  "Gaming station",
  "Console gaming",
  "Internet / workstation",
  "Printing & scanning",
  "Device repair",
  "Youth ICT training",
  "Group booking / LAN party",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const message = [
      "Hi Samtech Media Solutions! I'd like to book a slot.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Date: ${data.get("date")}`,
      `Time: ${data.get("time")}`,
      `Service: ${data.get("service")}`,
      `Notes: ${data.get("notes") || "None"}`,
    ].join("\n");

    setSubmitted(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Jane Doe" required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" placeholder="07xx xxx xxx" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="date">Preferred date</label>
          <input id="date" name="date" type="date" required />
        </div>
        <div className="form-field">
          <label htmlFor="time">Preferred time</label>
          <input id="time" name="time" type="time" required />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" defaultValue="Gaming station" required>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="notes">Anything else? (optional)</label>
        <textarea id="notes" name="notes" placeholder="Number of players, group size, etc." />
      </div>

      <button className="btn btn-primary btn-block" type="submit">
        Send booking request
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="form-note">
        {submitted
          ? "WhatsApp is opening – send the pre-filled message to confirm."
          : `We reply fast on WhatsApp · ${business.phoneDisplay}`}
      </p>
    </form>
  );
}
