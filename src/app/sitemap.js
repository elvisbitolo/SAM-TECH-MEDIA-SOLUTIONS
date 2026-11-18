import { siteUrl } from "./site-url";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: "2026-11-18",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/computers.png`,
        `${siteUrl}/storefront.png`,
        `${siteUrl}/3.png`,
      ],
    },
  ];
}
