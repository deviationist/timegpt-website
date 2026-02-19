import { motion } from "motion/react";
import { Download, Clock, MessageSquare } from "lucide-react";

const CHROME_STORE_URL = "#";

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-48 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 dark:bg-teal-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
            <Clock className="w-4 h-4" />
            Free Chrome Extension
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Timestamps for{" "}
          <span className="text-indigo-600 dark:text-indigo-400">ChatGPT</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Adds timestamps to ChatGPT messages and conversations — because time matters.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={CHROME_STORE_URL}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-colors shadow-lg shadow-indigo-500/25"
          >
            <Download className="w-5 h-5" />
            Add to Chrome — It's Free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-6 py-3.5 text-base font-medium transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            See Features
          </a>
        </motion.div>

        {/* Screenshot placeholder */}
        <motion.div
          className="mt-16 relative mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="aspect-video rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <div className="text-center text-slate-400 dark:text-slate-500">
              <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm font-medium">Screenshot placeholder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
