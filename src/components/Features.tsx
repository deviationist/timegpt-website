import { motion } from "motion/react";
import {
  MessageSquare,
  PanelLeft,
  Zap,
  Clock,
  ToggleRight,
  RefreshCw,
} from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const features = [
  {
    icon: MessageSquare,
    title: "Message Timestamps",
    description:
      "See when each message was sent, displayed inline next to the action toolbar.",
  },
  {
    icon: PanelLeft,
    title: "Sidebar Timestamps",
    description:
      "See when each conversation was created, right next to conversation titles.",
  },
  {
    icon: Zap,
    title: "Live Timestamps",
    description:
      "Timestamps appear in real-time as new messages stream in, not just on page load.",
  },
  {
    icon: Clock,
    title: "6 Format Options",
    description:
      'Choose from relative ("5m ago"), 12h/24h, date+time, time-only, or ISO 8601.',
  },
  {
    icon: ToggleRight,
    title: "Toggle Controls",
    description:
      "Independently show or hide message timestamps and sidebar timestamps.",
  },
  {
    icon: RefreshCw,
    title: "Synced Settings",
    description:
      "Your preferences sync across devices via Chrome's built-in storage sync.",
  },
];

export function Features() {
  const reduced = useReducedMotion();

  return (
    <section id="features" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            TimeGPT surfaces the timestamp data ChatGPT already has — cleanly integrated into the interface you know.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-600/50 transition-colors"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
