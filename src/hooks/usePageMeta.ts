import { useEffect } from "react";

const BASE_URL = "https://timegpt.ichiva.no";

interface PageMeta {
  title: string;
  path: string;
}

export function usePageMeta({ title, path }: PageMeta) {
  useEffect(() => {
    const url = `${BASE_URL}${path}`;

    document.title = title;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = url;

    const ldJson = document.querySelector('script[type="application/ld+json"]');
    if (ldJson) {
      try {
        const data = JSON.parse(ldJson.textContent || "{}");
        data.url = url;
        ldJson.textContent = JSON.stringify(data);
      } catch {
        // ignore malformed JSON
      }
    }
  }, [title, path]);
}
