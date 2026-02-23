import { Github, Mail, ExternalLink } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

export function SupportPage() {
  usePageMeta({ title: "Support — TimeGPT", path: "/support" });

  return (
    <main id="main-content" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Support
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Found a bug or have a feature request? We'd love to hear from you.
        </p>

        <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* GitHub Issues */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Report an Issue
            </h2>
            <p>
              The best way to report bugs or request features is through our
              GitHub repository. This helps us track and prioritize issues
              effectively.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/deviationist/timegpt/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                Open an Issue on GitHub
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </section>

          {/* Email */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Email Us
            </h2>
            <p>
              For general questions or anything you'd prefer not to post
              publicly, feel free to reach out by email.
            </p>
            <div className="mt-4">
              <a
                href="mailto:timegpt@ichiva.no"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium transition-colors rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                timegpt@ichiva.no
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
