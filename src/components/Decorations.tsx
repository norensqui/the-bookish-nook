// Lightweight inline-SVG decorations — no image requests, themed via CSS color vars.

export function SprigDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-28 bg-border" />
      <svg width="34" height="18" viewBox="0 0 34 18" fill="none" className="shrink-0">
        <path d="M17 17 V5" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M17 10 C12 9 10 6 10 3 C14 4 16 7 17 10Z" fill="hsl(var(--sage))" opacity="0.75" />
        <path d="M17 10 C22 9 24 6 24 3 C20 4 18 7 17 10Z" fill="hsl(var(--sage))" opacity="0.75" />
        <circle cx="17" cy="3" r="1.6" fill="hsl(var(--accent))" />
      </svg>
      <span className="h-px w-16 sm:w-28 bg-border" />
    </div>
  );
}

export function BookStackArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M99 18 l1.3 3.3 3.3 1.3 -3.3 1.3 -1.3 3.3 -1.3 -3.3 -3.3 -1.3 3.3 -1.3Z" fill="hsl(var(--accent))" />
      <circle cx="20" cy="30" r="2" fill="hsl(var(--sage))" opacity="0.8" />
      <path d="M60 52 C56 42 58 34 62 31 C62 39 62 46 63 52" fill="hsl(var(--sage))" opacity="0.85" />
      <path d="M62 52 C66 44 72 41 77 41 C73 48 67 51 63 52" fill="hsl(var(--sage))" opacity="0.85" />
      <path d="M62 53 V38" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <rect x="30" y="88" width="64" height="15" rx="3.5" fill="hsl(var(--primary))" opacity="0.9" />
      <rect x="35" y="75" width="58" height="14" rx="3.5" fill="hsl(var(--accent))" />
      <rect x="27" y="62" width="62" height="14" rx="3.5" fill="hsl(var(--sage))" />
      <rect x="38" y="50" width="46" height="13" rx="3.5" fill="hsl(var(--rose))" />
      <line x1="40" y1="92" x2="40" y2="99" stroke="hsl(var(--card))" strokeWidth="1.6" opacity="0.6" />
      <line x1="44" y1="79" x2="44" y2="85" stroke="hsl(var(--card))" strokeWidth="1.6" opacity="0.6" />
      <line x1="33" y1="66" x2="33" y2="72" stroke="hsl(var(--card))" strokeWidth="1.6" opacity="0.6" />
    </svg>
  );
}

export function EmptyShelfArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M104 26 l1.8 4.6 4.6 1.8 -4.6 1.8 -1.8 4.6 -1.8 -4.6 -4.6 -1.8 4.6 -1.8Z" fill="hsl(var(--accent))" opacity="0.7" />
      <circle cx="34" cy="30" r="2.4" fill="hsl(var(--sage))" opacity="0.6" />
      <circle cx="116" cy="60" r="1.8" fill="hsl(var(--accent))" opacity="0.5" />
      <path d="M70 64 C66 54 67 46 72 43 C72 51 72 58 73 64" fill="hsl(var(--sage))" opacity="0.75" />
      <path d="M70 64 C74 56 80 53 85 53 C82 60 76 63 71 64" fill="hsl(var(--sage))" opacity="0.75" />
      <path d="M70 66 V52" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M22 70 Q70 56 70 66 Q70 56 118 70 L118 86 Q70 74 70 84 Q70 74 22 86 Z" fill="hsl(var(--primary))" opacity="0.16" />
      <path d="M70 66 V84" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.4" />
      <path d="M22 70 Q70 56 70 66" stroke="hsl(var(--primary))" strokeWidth="1.6" fill="none" opacity="0.55" />
      <path d="M118 70 Q70 56 70 66" stroke="hsl(var(--primary))" strokeWidth="1.6" fill="none" opacity="0.55" />
      <path d="M30 74 Q50 67 66 71" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M110 74 Q90 67 74 71" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}
