export const faqs = [
  {
    question: "Is TimeGPT free?",
    answer:
      "Yes, TimeGPT is completely free to use. There are no premium tiers, no ads, and no in-app purchases.",
  },
  {
    question: "Does TimeGPT collect any data?",
    answer:
      "No. TimeGPT makes zero external network requests and collects no data whatsoever. Everything happens locally in your browser. The only storage used is Chrome's built-in sync storage for saving your display preferences.",
  },
  {
    question: "How does TimeGPT get the timestamps?",
    answer:
      "ChatGPT's backend API already includes timestamps for every message and conversation — the UI simply never displays them. TimeGPT reads these timestamps from the API responses your browser already receives, then renders them into the interface.",
  },
  {
    question: "Does it work with GPT-4, GPT-4o, and other models?",
    answer:
      "Yes. TimeGPT works with all ChatGPT models and plans (Free, Plus, Team, Enterprise). Timestamps come from the API layer, not the model layer, so they're available regardless of which model you use.",
  },
  {
    question: "Will it slow down ChatGPT?",
    answer:
      "No. TimeGPT is extremely lightweight — just two small content scripts with no background service worker. It reads data that's already being sent to your browser, so there's no additional network overhead.",
  },
  {
    question: "Can I customize the timestamp format?",
    answer:
      'Yes. TimeGPT offers 6 format options: relative ("5m ago"), date+time in 12h or 24h, time-only in 12h or 24h, and ISO 8601. You can also independently toggle message timestamps and sidebar timestamps on or off.',
  },
  {
    question: "Does it work on Firefox or other browsers?",
    answer:
      "Currently, TimeGPT is only available for Google Chrome. Support for other Chromium-based browsers (Edge, Brave, etc.) may work but is not officially tested.",
  },
];
