import { useState } from "react";
import { BrandingShowcase } from "./components/BrandingShowcase";
import { LogoHorizontal } from "./components/Logo";
import {
  Moon,
  Sun,
  Github,
  Download,
} from "lucide-react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LogoHorizontal size={32} />

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <button className="bg-slate-900 dark:bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-indigo-500 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Install Extension
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full"></div>
          <div className="absolute top-48 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 dark:bg-teal-500/5 blur-[100px] rounded-full"></div>
        </div>

        <BrandingShowcase />
      </main>

      {/* Footer */}
      <footer
        className={`py-12 border-t transition-colors duration-300 ${isDarkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <LogoHorizontal size={24} />
            <p className="text-sm text-slate-500 max-w-sm">
              Helping AI users keep track of time, one message
              at a time. Built for the ChatGPT community.
            </p>
          </div>
          <div className="flex justify-center gap-8 text-sm text-slate-400">
            <a
              href="#"
              className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="text-xs text-slate-400 pt-6">
            © 2026 TimeGPT. Not affiliated with OpenAI.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;