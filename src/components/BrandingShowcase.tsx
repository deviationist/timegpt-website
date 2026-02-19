import React from 'react';
import { motion } from 'motion/react';
import { Logo, LogoHorizontal } from './Logo';
import { 
  Clock, 
  Layers, 
  Palette, 
  Layout, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { LogoExporter } from './LogoExporter';

export function BrandingShowcase() {
  const colors = [
    { name: 'Primary Indigo', hex: '#6366F1', tailwind: 'bg-indigo-500' },
    { name: 'Primary Teal', hex: '#2DD4BF', tailwind: 'bg-teal-400' },
    { name: 'Surface Dark', hex: '#0F172A', tailwind: 'bg-slate-900' },
    { name: 'Surface Light', hex: '#F8FAFC', tailwind: 'bg-slate-50' },
  ];

  const logoSizes = [16, 32, 48, 64, 128, 256];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 pb-24 space-y-24">
      {/* Hero Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <Logo size={120} className="mb-8" />
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Time<span className="text-indigo-600">GPT</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Precision chat management. Bringing temporal clarity to your AI conversations with 
          seamless timestamp integration.
        </p>
      </motion.section>

      {/* Brand Identity Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Core Concept */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-50 rounded-xl">
              <Layers className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold">Brand Concept</h2>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            The TimeGPT brand identity is built on two pillars: <span className="font-semibold text-slate-900">Precision</span> and <span className="font-semibold text-slate-900">Efficiency</span>. 
            The logo combines a minimalist clock face with a chat-inspired square geometry, signaling 
            seamless integration with AI platforms like ChatGPT.
          </p>
          <ul className="space-y-3">
            {[
              "Minimalist clock-hand geometry",
              "Slightly rounded 'Squircle' container",
              "Future-facing color palette",
              "Bold, clear typography"
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Color Palette */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-teal-50 rounded-xl">
              <Palette className="w-6 h-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold">Color Palette</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {colors.map((color) => (
              <div key={color.name} className="space-y-2">
                <div className={`h-16 rounded-xl ${color.tailwind} shadow-inner`}></div>
                <div>
                  <div className="font-medium text-sm text-slate-900">{color.name}</div>
                  <div className="text-xs text-slate-500 font-mono uppercase">{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Logo Applications */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Logo Variations</h2>
          <p className="text-slate-500">From browser icons to hero assets, TimeGPT stays consistent.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Logo */}
          <div className="bg-slate-50 p-12 rounded-3xl flex flex-col items-center justify-center gap-6 border border-slate-100">
            <Logo size={96} />
            <span className="text-sm font-medium text-slate-400">Primary Color</span>
          </div>

          {/* Dark Logo */}
          <div className="bg-slate-900 p-12 rounded-3xl flex flex-col items-center justify-center gap-6">
            <Logo size={96} variant="white" />
            <span className="text-sm font-medium text-slate-500">Reverse (Dark Mode)</span>
          </div>

          {/* Horizontal */}
          <div className="bg-white p-12 rounded-3xl flex flex-col items-center justify-center gap-6 border border-slate-200">
            <LogoHorizontal size={48} />
            <span className="text-sm font-medium text-slate-400">Wordmark Branding</span>
          </div>
        </div>

        {/* Icon Sizing (Extension Grid) */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
          <div className="flex flex-wrap items-end justify-center gap-8 md:gap-16">
            {logoSizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-4">
                <Logo size={size} id={size === 128 ? "export-source-logo" : undefined} />
                <span className="text-xs font-mono text-slate-500">{size}x{size} px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Section */}
        <LogoExporter logoId="export-source-logo" name="timegpt-logo" />
      </section>

      {/* Extension Mockup */}
      <section className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative border border-slate-800 shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Logo size={400} />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-sm font-medium">
              <Zap className="w-3.5 h-3.5" />
              Live Preview
            </div>
            <h2 className="text-3xl font-bold text-white">Integrates directly into your workflow</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Timestamps are injected into the sidebar and message containers automatically. 
              No configuration required—just context when you need it.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
                Add to Chrome
              </button>
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-slate-700">
                View Source
              </button>
            </div>
          </div>

          {/* Chat Mockup */}
          <div className="bg-[#212121] rounded-2xl border border-slate-700 shadow-xl p-6 space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <Logo size={24} />
            </div>
            
            {/* Sidebar Mockup */}
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-300">Quarterly Report Analysis</span>
                </div>
                <span className="text-[10px] font-medium text-teal-400 bg-teal-400/10 px-1.5 py-0.5 rounded">
                  10:45 AM
                </span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-300">Python Scripting Help</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  Yesterday
                </span>
              </div>
            </div>

            {/* Message Bubble Mockup */}
            <div className="pt-4 space-y-4">
              <div className="bg-white/5 p-4 rounded-xl relative group">
                <p className="text-xs text-slate-300">Can you summarize the project status?</p>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-indigo-600 text-[10px] px-2 py-0.5 rounded shadow-lg text-white">
                    Sent at 11:02:14
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
