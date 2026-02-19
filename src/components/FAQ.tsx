import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-slate-900 dark:text-white pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
