import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Samtech Cyber Café | Game. Work. Connect.",
  description:
    "High-performance gaming PCs, fibre-fast internet, console stations and printing services at Samtech Cyber Café in Kenya. Book your station in seconds.",
  keywords: [
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
    title: "Samtech Cyber Café | Game. Work. Connect.",
    description:
      "High-performance PCs, fibre-fast internet and a space built for players, students and creators.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samtech Cyber Café",
    description: "Game. Work. Connect. Book your station at Samtech Cyber Café.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
