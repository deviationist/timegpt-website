import { motion } from "motion/react";
import { Database, Search, Eye } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const steps = [
  {
    icon: Database,
    step: "1",
    title: "ChatGPT has the data",
    description:
      "Every message and conversation in ChatGPT already includes timestamps in the API response — the UI just never shows them.",
  },
  {
    icon: Search,
    step: "2",
    title: "TimeGPT reads it",
    description:
      "The extension transparently intercepts API responses that ChatGPT already sends to your browser. No extra network requests.",
  },
  {
    icon: Eye,
    step: "3",
    title: "Timestamps appear",
    description:
      "Timestamps are rendered directly into ChatGPT's interface — inline with messages and next to sidebar conversation titles.",
  },
];

export function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            No API keys. No accounts. No data leaves your browser.
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
          {steps.map((step, i) => (
            <motion.li
              key={step.step}
              className="text-center"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              </div>
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Step {step.step}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
