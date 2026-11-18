export const business = {
  name: "Samtech Media Solutions",
  phone: "254795076512",
  phoneDisplay: "+254 795 076512",
  email: "Samuelouru1992@gmail.com",
  area: "Kariobangi North",
  location:
    "Kariobangi North, Dafur, along Mama Magret Uhuru Hospital, opposite St Joel Comprehensive School",
  hours: "Open daily · 8:00 AM – 10:00 PM",
  linkedIn: "https://www.linkedin.com/in/samuel-ouru-92383a1b1/",
  portfolioUrl: "https://samtechmedia.vercel.app",
};

export function whatsappUrl(message) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const defaultBookingUrl = whatsappUrl(
  "Hi! I'd like to book a slot at Samtech Media Solutions."
);
