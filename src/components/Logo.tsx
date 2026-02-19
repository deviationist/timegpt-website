import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'primary' | 'white' | 'dark';
  id?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 64,
  className = "",
  variant = 'primary',
  id = "timegpt-logo"
}) => {
  const getColors = () => {
    switch (variant) {
      case 'white': return { main: '#FFFFFF', accent: '#E2E8F0' };
      case 'dark': return { main: '#0F172A', accent: '#334155' };
      default: return { main: '#6366F1', accent: '#2DD4BF' };
    }
  };

  const colors = getColors();
  const gradientId = `paint0_linear_${variant}`;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        id={id}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="TimeGPT logo"
      >
        {/* Background Shape: Rounded Square */}
        <rect width="100" height="100" rx="24" fill={variant === 'primary' ? `url(#${gradientId})` : colors.main} />

        {/* Clock Face Circle */}
        <circle cx="50" cy="50" r="32" stroke={variant === 'primary' ? 'white' : colors.accent} strokeWidth="6" strokeOpacity="0.2" />

        {/* Clock Hands */}
        <path
          d="M50 28V50L65 65"
          stroke={variant === 'primary' ? 'white' : (variant === 'white' ? colors.main : 'white')}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Sparkle / GPT Element */}
        <path
          d="M78 30C78 26 82 22 86 22C82 22 78 18 78 14C78 18 74 22 70 22C74 22 78 26 78 30Z"
          fill={variant === 'primary' ? '#2DD4BF' : (variant === 'white' ? colors.main : '#2DD4BF')}
        />

        {/* Outer Glow/Detail */}
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const LogoHorizontal: React.FC<LogoProps> = ({ size = 32, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={size} />
      <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white" aria-hidden="true">
        Time<span className="text-indigo-600 dark:text-indigo-400">GPT</span>
      </span>
    </div>
  );
};
