import { motion } from "motion/react";
import { Github, Mail } from "lucide-react";

export function Support() {
  return (
    <section id="support" className="py-24 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Need help?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Found a bug or have a feature request? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="https://github.com/deviationist/timegpt/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            Open an Issue on GitHub
          </a>
          <a
            href="mailto:timegpt@ichiva.no"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-6 py-3 text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            timegpt@ichiva.no
          </a>
        </motion.div>
      </div>
    </section>
  );
}
