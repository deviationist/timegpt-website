import type { Metadata } from "next";
import { SupportContent } from "@/views/SupportPage";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with TimeGPT — report bugs, request features, or contact us by email. We're happy to help with any issues.",
  alternates: {
    canonical: "https://timegpt.ichiva.no/support",
  },
  openGraph: {
    url: "https://timegpt.ichiva.no/support",
  },
};

export default function SupportRoute() {
  return <SupportContent />;
}
