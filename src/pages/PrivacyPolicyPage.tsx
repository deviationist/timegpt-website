import { useEffect } from "react";

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — TimeGPT";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-12">
          Last updated: February 20, 2026
        </p>

        <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Introduction
            </h2>
            <p>
              TimeGPT is a Chrome extension that adds timestamps to ChatGPT
              messages and conversations. This privacy policy explains how we
              handle data across the extension and this website.
            </p>
            <p className="mt-3">
              The short version: we don't collect your data. Read on for the
              details.
            </p>
          </section>

          {/* Chrome Extension */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Chrome Extension
            </h2>
            <p>
              The TimeGPT extension operates entirely within your browser. Here's
              what that means in practice:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong>Zero data collection</strong> — the extension does not
                collect, store, or transmit any personal data, browsing history,
                or ChatGPT conversation content.
              </li>
              <li>
                <strong>No external network requests</strong> — the extension
                never contacts any external server. It only reads timestamp data
                that ChatGPT already sends to your browser.
              </li>
              <li>
                <strong>Minimal permissions</strong> — the only Chrome permission
                required is <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">storage</code>,
                used solely to save your display preferences (timestamp format
                and visibility toggles).
              </li>
              <li>
                <strong>Synced preferences</strong> — your settings are synced
                across devices using Chrome's built-in storage sync. This is
                handled entirely by Chrome and does not involve any third-party
                servers.
              </li>
            </ul>
          </section>

          {/* Website */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Website
            </h2>
            <p>This website (the page you're on now):</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong>Analytics</strong> — we use{" "}
                <a
                  href="https://plausible.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Plausible Analytics
                </a>
                , a privacy-focused, cookie-free analytics tool. Plausible does
                not use cookies, does not collect personal data, and is fully
                GDPR compliant. Our instance is self-hosted.
              </li>
              <li>
                <strong>No cookies</strong> — this website does not set any
                cookies.
              </li>
              <li>
                <strong>No personal data</strong> — we do not collect names,
                email addresses, or any other personal information through this
                website.
              </li>
              <li>
                <strong>No third-party trackers</strong> — there are no
                advertising trackers, social media pixels, or other third-party
                tracking scripts on this website.
              </li>
            </ul>
          </section>

          {/* GDPR */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Your Rights (GDPR)
            </h2>
            <p>
              Since we do not collect or process any personal data, there is no
              personal data to access, rectify, or delete. Your right to data
              portability and the right to be forgotten are inherently satisfied
              because no data exists on our end.
            </p>
            <p className="mt-3">
              If you believe your rights have been infringed, you have the right
              to lodge a complaint with your local data protection authority.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Contact
            </h2>
            <p>
              If you have any questions about this privacy policy, you can reach
              us at{" "}
              <a
                href="mailto:timegpt@ichiva.no"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                timegpt@ichiva.no
              </a>
              .
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Changes to This Policy
            </h2>
            <p>
              If we make changes to this privacy policy, we will update it on
              this page with a revised "Last updated" date. Since we don't
              collect email addresses, we encourage you to review this page
              periodically.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
