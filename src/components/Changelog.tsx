import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const releases = [
  {
    version: "1.1.0",
    date: "2025-06-01",
    changes: [
      "Added sidebar timestamps — see when each conversation was created",
      "Added toggle controls for message and sidebar timestamps independently",
      "Added settings popup accessible from the extension icon",
      "Added Chrome storage sync — preferences now sync across devices",
      "Improved timestamp injection for streamed messages",
    ],
  },
  {
    version: "1.0.0",
    date: "2025-01-15",
    changes: [
      "Initial release",
      "Message timestamps displayed inline next to action toolbar",
      "6 timestamp format options",
      "Live timestamp injection as messages stream in",
    ],
  },
];

export function Changelog() {
  const reduced = useReducedMotion();

  return (
    <section id="changelog" className="py-24 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Changelog
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            What's new in TimeGPT
          </p>
        </motion.div>

        <div className="space-y-10">
          {releases.map((release, i) => (
            <motion.article
              key={release.version}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.1 }}
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-slate-950" aria-hidden="true" />
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  v{release.version}
                </h3>
                <time className="text-sm text-slate-500 dark:text-slate-400" dateTime={release.date}>
                  {release.date}
                </time>
              </div>
              <ul className="space-y-2 list-disc marker:text-indigo-500 pl-4">
                {release.changes.map((change) => (
                  <li
                    key={change}
                    className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1"
                  >
                    {change}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
