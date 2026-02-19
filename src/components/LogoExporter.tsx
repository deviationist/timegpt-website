import React, { useRef } from 'react';
import { Download, FileImage, FileCode } from 'lucide-react';

interface ExporterProps {
  logoId: string;
  name: string;
}

export const LogoExporter: React.FC<ExporterProps> = ({ logoId, name }) => {
  const downloadPNG = (size: number) => {
    const svg = document.getElementById(logoId) as unknown as SVGSVGElement;
    if (!svg) return;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data = new XMLSerializer().serializeToString(svg);
    const win = window.URL || window.webkitURL || window;
    const img = new Image();
    const blob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    const url = win.createObjectURL(blob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${name}-${size}x${size}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      win.revokeObjectURL(url);
    };
    img.src = url;
  };

  const downloadSVG = () => {
    const svg = document.getElementById(logoId) as unknown as SVGSVGElement;
    if (!svg) return;
    const data = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${name}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold mb-1">Asset Export</h3>
          <p className="text-sm text-slate-500">Download ready-to-use assets for your extension.</p>
        </div>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl">
          <Download className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* PNG Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <FileImage className="w-4 h-4" /> PNG Formats
          </h4>
          <div className="flex flex-col gap-3">
            {[16, 48, 128].map((size) => (
              <button
                key={size}
                onClick={() => downloadPNG(size)}
                className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-slate-100 dark:border-slate-700 rounded-xl transition-all group"
              >
                <span className="font-medium text-slate-700 dark:text-slate-300">{size}x{size} px</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-indigo-500">Export</span>
              </button>
            ))}
          </div>
        </div>

        {/* Vector Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <FileCode className="w-4 h-4" /> Vector Source
          </h4>
          <div className="flex flex-col gap-3">
            <button
              onClick={downloadSVG}
              className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-slate-100 dark:border-slate-700 rounded-xl transition-all group h-full"
            >
              <div className="text-left">
                <div className="font-medium text-slate-700 dark:text-slate-300">SVG Format</div>
                <div className="text-xs text-slate-500">Scalable vector source</div>
              </div>
              <span className="text-xs font-mono text-slate-400 group-hover:text-indigo-500">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
