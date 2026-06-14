// Lightweight inline-SVG decorations — no image requests, theme-colored via currentColor.

// A delicate leafy sprig divider to place between sections.
export function SprigDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-24 bg-border" />
      <svg width="30" height="18" viewBox="0 0 30 18" fill="none" className="text-primary/50 shrink-0">
        <path d="M15 17 V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M15 10 C11 9 9 6 9 3 C12.5 4 14 7 15 10Z" fill="currentColor" opacity="0.45" />
        <path d="M15 10 C19 9 21 6 21 3 C17.5 4 16 7 15 10Z" fill="currentColor" opacity="0.45" />
        <circle cx="15" cy="3.5" r="1.5" fill="currentColor" />
      </svg>
      <span className="h-px w-16 sm:w-24 bg-border" />
    </div>
  );
}

// A charming open-book illustration with a sprout and sparkles for empty states.
export function EmptyShelfArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M104 26 l1.8 4.6 4.6 1.8 -4.6 1.8 -1.8 4.6 -1.8 -4.6 -4.6 -1.8 4.6 -1.8Z" fill="currentColor" opacity="0.5" />
      <circle cx="34" cy="30" r="2.4" fill="currentColor" opacity="0.4" />
      <circle cx="116" cy="60" r="1.8" fill="currentColor" opacity="0.35" />
      <path d="M70 64 C66 54 67 46 72 43 C72 51 72 58 73 64" fill="currentColor" opacity="0.4" />
      <path d="M70 64 C74 56 80 53 85 53 C82 60 76 63 71 64" fill="currentColor" opacity="0.4" />
      <path d="M70 66 V52" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <path d="M22 70 Q70 56 70 66 Q70 56 118 70 L118 86 Q70 74 70 84 Q70 74 22 86 Z" fill="currentColor" opacity="0.16" />
      <path d="M70 66 V84" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path d="M22 70 Q70 56 70 66" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.55" />
      <path d="M118 70 Q70 56 70 66" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.55" />
      <path d="M30 74 Q50 67 66 71" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M110 74 Q90 67 74 71" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}
