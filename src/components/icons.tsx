import { CSSProperties } from 'react';

type IconProps = { className?: string; style?: CSSProperties };

export const Icons = {
  Lightning: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4 14h8l-1 8 9-12h-8l1-8z" />
    </svg>
  ),
  Rocket: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <circle cx="18.5" cy="5.5" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="3" r="1" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  Target: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  ),
  ChartUp: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 10 12 4 6 14" />
      <polyline points="22 20 2 20" />
      <polyline points="22 12 18 16 14 12 6 20" />
    </svg>
  ),
  Phone: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    </svg>
  ),
  Video: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
      <line x1="7" y1="10" x2="11" y2="12" />
      <line x1="7" y1="14" x2="10" y2="12.5" />
    </svg>
  ),
  Palette: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="18" cy="10" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="6.5" cy="14" r="1.5" fill="currentColor" opacity="0.7" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z" />
    </svg>
  ),
  Laptop: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
      <polyline points="8 7 11 10 8 13" />
      <polyline points="16 7 13 10 16 13" />
    </svg>
  ),
  BarChart: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="4" height="6" rx="1" />
      <rect x="10" y="8" width="4" height="12" rx="1" />
      <rect x="16" y="2" width="4" height="18" rx="1" />
    </svg>
  ),
  Handshake: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 9.5V6.5c0-1.38-1.12-2.5-2.5-2.5h-3C9.12 4 8 5.12 8 6.5v3.25" />
      <path d="M21 15.5l-2-4c-.5-1-1.5-1.5-2.5-1.5H15" />
      <path d="M8 15.5l2-4c.5-1 1.5-1.5 2.5-1.5H13" />
      <path d="M3 15.5l2-4" />
      <path d="M7 14l4-3 4 3" />
      <path d="M7 17.5l4-2 4 2" />
    </svg>
  ),
  Diamond: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <rect x="7" y="7" width="10" height="10" transform="rotate(45, 12, 12)" />
    </svg>
  ),
  Star4: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9.5 9.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
    </svg>
  ),
  Star6: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12,2 14,10 22,10 16,15 18.5,22 12,17.5 5.5,22 8,15 2,10 10,10" />
    </svg>
  ),
  Star8: ({ className, style }: IconProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12,2 13.5,8.5 20,10 13.5,11.5 12,18 10.5,11.5 4,10 10.5,8.5" />
    </svg>
  ),
};
