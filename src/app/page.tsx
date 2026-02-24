import { LandingPage } from "@/views/LandingPage";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <LandingPage />
    </>
  );
}
