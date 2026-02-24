import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timegpt.ichiva.no"),
  title: {
    default: "TimeGPT — Timestamps for ChatGPT",
    template: "%s — TimeGPT",
  },
  description:
    "TimeGPT adds timestamps to ChatGPT messages and conversations — because time matters. A free Chrome extension.",
  robots: "index, follow",
  openGraph: {
    siteName: "TimeGPT",
    title: "TimeGPT — Timestamps for ChatGPT",
    description:
      "Adds timestamps to ChatGPT messages and conversations — because time matters.",
    type: "website",
    url: "https://timegpt.ichiva.no",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TimeGPT — Timestamps for ChatGPT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeGPT — Timestamps for ChatGPT",
    description:
      "Adds timestamps to ChatGPT messages and conversations — because time matters.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TimeGPT — Timestamps for ChatGPT",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://timegpt.ichiva.no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#020617" media="(prefers-color-scheme: dark)" />
        {/* Prevent dark mode flash — must be blocking and inline */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})();`,
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TimeGPT",
            url: "https://timegpt.ichiva.no",
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "TimeGPT",
            description:
              "Adds timestamps to ChatGPT messages and conversations — because time matters.",
            url: "https://chromewebstore.google.com/detail/timegpt/klhlpngclnmhdnaofopfmdphbajeclfo",
            image: "https://timegpt.ichiva.no/og-image.png",
            applicationCategory: "BrowserApplication",
            operatingSystem: "Chrome",
            author: {
              "@type": "Person",
              name: "deviationist",
              url: "https://github.com/deviationist",
            },
            offers: {
              "@type": "Offer",
              price: 0,
              priceCurrency: "USD",
            },
          }}
        />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <Script
          defer
          data-domain="timegpt.ichiva.no"
          src="https://plausible.ichiva.no/js/script.hash.outbound-links.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
