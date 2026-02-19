import { motion } from "motion/react";
import { Shield, WifiOff, Feather, KeyRound } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const items = [
  {
    icon: Shield,
    title: "Manifest V3",
    description: "Built on the latest Chrome extension standard for security and performance.",
  },
  {
    icon: WifiOff,
    title: "Zero Data Collection",
    description: "No analytics, no tracking, no external servers. Everything stays in your browser.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description: "Only two small scripts with no background service worker. Minimal footprint.",
  },
  {
    icon: KeyRound,
    title: "Minimal Permissions",
    description: "Only requires the storage permission — used solely to save your preferences.",
  },
];

export function Privacy() {
  const reduced = useReducedMotion();

  return (
    <section id="privacy" className="py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Privacy & trust
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            TimeGPT makes no external network requests. It simply surfaces information ChatGPT already sends to your browser.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
