import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TimeGPT",
    short_name: "TimeGPT",
    description: "Timestamps for ChatGPT",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#6366f1",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
