import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Privacy } from "../components/Privacy";
import { FAQ } from "../components/FAQ";
import { Changelog } from "../components/Changelog";
import { Support } from "../components/Support";

const sectionIds = [
  "features",
  "how-it-works",
  "privacy",
  "faq",
  "changelog",
  "support",
];

export function LandingPage() {
  useEffect(() => {
    document.title = "TimeGPT — Timestamps for ChatGPT";
  }, []);

  // Scroll to hash target on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView();
    }
  }, []);

  // Update URL hash on scroll
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (window.location.hash !== `#${id}`) {
              history.replaceState(null, "", `#${id}`);
              window.dispatchEvent(new HashChangeEvent("hashchange"));
            }
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main id="main-content">
      <Hero />
      <Features />
      <HowItWorks />
      <Privacy />
      <FAQ />
      <Changelog />
      <Support />
    </main>
  );
}
