import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://timegpt.ichiva.no",
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: "https://timegpt.ichiva.no/support",
      priority: 0.5,
      changeFrequency: "monthly",
    },
    {
      url: "https://timegpt.ichiva.no/privacy-policy",
      priority: 0.3,
      changeFrequency: "monthly",
    },
  ];
}
