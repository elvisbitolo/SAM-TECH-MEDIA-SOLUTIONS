export const business = {
  name: "Samtech Cyber Café",
  phone: "254718730765",
  phoneDisplay: "+254 718 730765",
  email: "ourusamuel244@gmail.com",
  location: "Kenya",
  hours: "Open daily · 8:00 AM – 10:00 PM",
  linkedIn: "https://www.linkedin.com/in/samuel-ouru-92383a1b1/",
};

export function whatsappUrl(message) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const defaultBookingUrl = whatsappUrl(
  "Hi! I'd like to book a station at Samtech Cyber Café."
);
