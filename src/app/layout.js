import { Analytics } from "@vercel/analytics/next";
import { business } from "./site-config";
import { siteUrl } from "./site-url";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: business.name,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/computers.png`,
      description:
        "Gaming, fibre internet, printing, device repair and youth training in ICT, networking, programming and solar essentials.",
      founder: { "@id": `${siteUrl}/#founder` },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.phoneDisplay,
        contactType: "customer service",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Along Mama Magret Uhuru Hospital, opposite St Joel Comprehensive School",
        addressLocality: "Kariobangi North, Dafur",
        addressRegion: "Nairobi",
        addressCountry: "KE",
      },
      sameAs: [business.portfolioUrl, business.linkedIn],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: "Samuel Otuoma Ouru",
      jobTitle: "Engineer & Entrepreneur",
      worksFor: { "@id": `${siteUrl}/#organization` },
      url: business.portfolioUrl,
      sameAs: [business.linkedIn],
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Samuel Otuoma | Samtech Media Solutions",
  description:
    "Samtech Media Solutions in Kariobangi North, Nairobi offers gaming, fibre internet, printing, device repair and youth training in ICT, networking, programming and solar essentials. Book on WhatsApp.",
  keywords: [
    "Samuel Otuoma",
    "Samuel Otuoma Ouru",
    "Samtech Media Solutions",
    "youth ICT training Kenya",
    "networking training Kenya",
    "programming training Kenya",
    "solar essentials training Kenya",
    "Kariobangi North",
    "PS5 gaming",
    "gaming PC",
    "Samtech",
  ],
  verification: {
    google: "EO1A_95MmyPuFD2ULeSrZ2xzliMUJEdAWtRmclDUwPo",
  },
  openGraph: {
    title: "Samuel Otuoma | Samtech Media Solutions",
    description:
      "Founded by engineer Samuel Otuoma in Kariobangi North. Gaming, fibre internet and hands-on youth training in ICT, networking, programming and solar essentials.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Otuoma | Samtech Media Solutions",
    description:
      "Book a slot at Samuel Otuoma's Samtech Media Solutions in Kariobangi North.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
