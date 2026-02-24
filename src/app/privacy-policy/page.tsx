import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/views/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "TimeGPT collects zero data. Learn about our privacy practices for the Chrome extension and this website.",
  alternates: {
    canonical: "https://timegpt.ichiva.no/privacy-policy",
  },
  openGraph: {
    url: "https://timegpt.ichiva.no/privacy-policy",
  },
};

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyContent />;
}
