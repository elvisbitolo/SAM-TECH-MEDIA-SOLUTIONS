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
      name: "Samtech Cyber Café",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/computers.png`,
      founder: { "@id": `${siteUrl}/#founder` },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.phoneDisplay,
        contactType: "customer service",
        availableLanguage: "English",
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
  title: "Samuel Otuoma | Samtech Cyber Café",
  description:
    "Samtech Cyber Café, founded by engineer Samuel Otuoma in Kenya, offers high-performance gaming PCs, fibre internet, console stations, printing and device repairs. Book on WhatsApp.",
  keywords: [
    "Samuel Otuoma",
    "Samuel Otuoma Ouru",
    "cyber cafe Kenya",
    "gaming cafe",
    "internet cafe",
    "PS5 gaming",
    "gaming PC",
    "Samtech",
  ],
  verification: {
    google: "EO1A_95MmyPuFD2ULeSrZ2xzliMUJEdAWtRmclDUwPo",
  },
  openGraph: {
    title: "Samuel Otuoma | Samtech Cyber Café",
    description:
      "Founded by engineer Samuel Otuoma in Kenya. High-performance PCs, fibre internet and a space built for players, students and creators.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Otuoma | Samtech Cyber Café",
    description: "Book your station at Samuel Otuoma's Samtech Cyber Café in Kenya.",
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
