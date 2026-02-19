import { useState, useEffect } from "react";
import { LogoHorizontal } from "./components/Logo";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Privacy } from "./components/Privacy";
import { FAQ } from "./components/FAQ";
import { Changelog } from "./components/Changelog";
import { Support } from "./components/Support";
import { Moon, Sun, Download, Menu, X } from "lucide-react";

const CHROME_STORE_URL = "#";

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return [isDark, toggle] as const;
}

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [isDark, toggleDark] = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/80 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-label="TimeGPT — Back to top">
            <LogoHorizontal size={28} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
            </button>

            <a
              href={CHROME_STORE_URL}
              className="hidden sm:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Add to Chrome
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CHROME_STORE_URL}
              className="sm:hidden inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Add to Chrome
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Privacy />
        <FAQ />
        <Changelog />
        <Support />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <LogoHorizontal size={24} />
            <p className="text-sm text-slate-500 max-w-sm">
              Helping AI users keep track of time, one message at a time.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <a href="#features" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              How It Works
            </a>
            <a href="#faq" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              FAQ
            </a>
            <a href="#changelog" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Changelog
            </a>
            <a href="#support" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Support
            </a>
          </div>
          <div className="text-xs text-slate-400 pt-6">
            © {new Date().getFullYear()} TimeGPT. Not affiliated with OpenAI.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
