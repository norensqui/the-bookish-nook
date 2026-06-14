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

export function CozyNookArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 16 Q55 30 105 16 T196 18" stroke="hsl(var(--sage))" strokeWidth="1.2" opacity="0.5" />
      <circle cx="34" cy="22" r="2" fill="hsl(var(--accent))" />
      <circle cx="78" cy="22" r="2" fill="hsl(var(--accent))" />
      <circle cx="130" cy="20" r="2" fill="hsl(var(--accent))" />
      <circle cx="174" cy="24" r="2" fill="hsl(var(--accent))" />
      <path d="M183 36 l1.4 3.6 3.6 1.4 -3.6 1.4 -1.4 3.6 -1.4 -3.6 -3.6 -1.4 3.6 -1.4Z" fill="hsl(var(--accent))" opacity="0.7" />
      <path d="M30 100 C26 88 27 80 31 77 C31 86 31 94 31 100" fill="hsl(var(--sage))" opacity="0.9" />
      <path d="M31 100 C35 90 41 87 46 87 C42 95 36 99 32 100" fill="hsl(var(--sage))" opacity="0.9" />
      <path d="M22 100 H42 L40 118 H24 Z" fill="hsl(var(--sand))" />
      <rect x="66" y="118" width="94" height="16" rx="4" fill="hsl(var(--primary))" opacity="0.9" />
      <rect x="72" y="103" width="84" height="15" rx="4" fill="hsl(var(--sage))" />
      <rect x="63" y="88" width="88" height="15" rx="4" fill="hsl(var(--rose))" />
      <rect x="78" y="74" width="64" height="14" rx="4" fill="hsl(var(--accent))" />
      <line x1="76" y1="122" x2="76" y2="130" stroke="hsl(var(--card))" strokeWidth="1.6" opacity="0.6" />
      <line x1="82" y1="107" x2="82" y2="114" stroke="hsl(var(--card))" strokeWidth="1.6" opacity="0.6" />
      <line x1="73" y1="92" x2="73" y2="99" stroke="hsl(var(--card))" strokeWidth="1.6" opacity="0.6" />
      <path d="M148 58 C165 62 160 75 134 73 C147 70 150 63 141 60 Z" fill="hsl(var(--rose))" />
      <ellipse cx="116" cy="59" rx="31" ry="15" fill="hsl(var(--rose))" />
      <path d="M83 49 L86 38 L93 48 Z" fill="hsl(var(--rose))" />
      <path d="M93 48 L100 38 L102 50 Z" fill="hsl(var(--rose))" />
      <path d="M86 46 L88 41 L91 47 Z" fill="hsl(var(--accent))" />
      <path d="M95 47 L99 42 L100 49 Z" fill="hsl(var(--accent))" />
      <circle cx="92" cy="57" r="12.5" fill="hsl(var(--rose))" />
      <path d="M112 50 q3 4 0 8" stroke="hsl(var(--primary))" strokeWidth="1.4" opacity="0.3" fill="none" />
      <path d="M122 49 q3 4 0 9" stroke="hsl(var(--primary))" strokeWidth="1.4" opacity="0.3" fill="none" />
      <path d="M132 50 q3 4 0 8" stroke="hsl(var(--primary))" strokeWidth="1.4" opacity="0.3" fill="none" />
      <path d="M85 56 Q89 60 94 56" stroke="hsl(var(--primary))" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M89 60 h5 l-2.5 3 Z" fill="hsl(var(--primary))" opacity="0.6" />
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

// ---- Hand-drawn bookish wallpaper (original, sketchy line-art behind every page) ----
export function PageBackdrop() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="folio-ink" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        <pattern id="folio-wallpaper" width="360" height="330" patternUnits="userSpaceOnUse" patternTransform="rotate(-2)">
          <g
            filter="url(#folio-ink)"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g transform="translate(14,30)">
              <path d="M1 9 Q21 3 23 8 Q25 3 45 9 L45 31 Q25 25 23 30 Q25 25 1 31 Z" />
              <path d="M23 8 V30" />
              <path d="M6 15 q4 -1.5 8 0" /><path d="M6 19 q4 -1.5 8 0" /><path d="M6 23 q3 -1.5 7 0" />
              <path d="M30 15 q4 -1.5 8 0" /><path d="M30 19 q4 -1.5 8 0" /><path d="M30 23 q3 -1.5 7 0" />
            </g>

            <g transform="translate(214,20)">
              <rect x="0" y="26" width="48" height="12" rx="2.5" fill="hsl(var(--rose))" fillOpacity="0.45" />
              <rect x="5" y="14" width="42" height="12" rx="2.5" fill="hsl(var(--sage))" fillOpacity="0.45" />
              <rect x="2" y="2" width="44" height="12" rx="2.5" fill="hsl(var(--card))" fillOpacity="0.8" />
              <path d="M8 32 h10 M10 20 h9 M9 8 h11" strokeWidth="1" />
            </g>

            <g transform="translate(150,18)">
              <path d="M16 50 Q14 32 16 18" />
              <path d="M16 18 L6 4 M16 18 L11 2 M16 18 L16 0 M16 18 L21 2 M16 18 L26 4 M16 18 L2 9 M16 18 L30 9" strokeWidth="0.9" />
              <circle cx="6" cy="4" r="1.4" fill="hsl(var(--rose))" stroke="none" /><circle cx="11" cy="2" r="1.4" fill="hsl(var(--rose))" stroke="none" />
              <circle cx="16" cy="0" r="1.4" fill="hsl(var(--rose))" stroke="none" /><circle cx="21" cy="2" r="1.4" fill="hsl(var(--rose))" stroke="none" />
              <circle cx="26" cy="4" r="1.4" fill="hsl(var(--rose))" stroke="none" /><circle cx="2" cy="9" r="1.4" fill="hsl(var(--rose))" stroke="none" /><circle cx="30" cy="9" r="1.4" fill="hsl(var(--rose))" stroke="none" />
            </g>

            <g transform="translate(300,40)">
              <path d="M9 54 Q7 30 9 4" />
              <path d="M9 14 q-11 -2 -13 -12 q9 1 13 8" fill="hsl(var(--sage))" fillOpacity="0.4" />
              <path d="M9 26 q11 -2 13 -12 q-9 1 -13 8" fill="hsl(var(--sage))" fillOpacity="0.4" />
              <path d="M9 38 q-11 -2 -13 -12 q9 1 13 8" fill="hsl(var(--sage))" fillOpacity="0.4" />
            </g>

            <g transform="translate(96,150)" strokeWidth="0.9">
              <path d="M14 46 Q12 26 14 8 M14 20 l-8 -6 M14 26 l9 -5 M14 32 l-9 -4" />
              <circle cx="14" cy="8" r="1.5" fill="hsl(var(--rose))" stroke="none" /><circle cx="6" cy="14" r="1.5" fill="hsl(var(--rose))" stroke="none" />
              <circle cx="23" cy="21" r="1.5" fill="hsl(var(--rose))" stroke="none" /><circle cx="5" cy="28" r="1.5" fill="hsl(var(--rose))" stroke="none" />
            </g>

            <g transform="translate(196,150)">
              <path d="M16 54 L6 16 M16 54 L16 12 M16 54 L26 16 M16 54 L0 24 M16 54 L32 24" strokeWidth="1" />
              <path d="M9 50 q7 5 14 0" strokeWidth="1.4" />
              <circle cx="6" cy="15" r="2.4" fill="hsl(var(--rose))" stroke="none" /><circle cx="16" cy="11" r="2.4" fill="hsl(var(--accent))" stroke="none" />
              <circle cx="26" cy="15" r="2.4" fill="hsl(var(--rose))" stroke="none" /><circle cx="0" cy="23" r="2.2" fill="hsl(var(--sage))" stroke="none" /><circle cx="32" cy="23" r="2.2" fill="hsl(var(--sage))" stroke="none" />
            </g>

            <g transform="translate(286,210) scale(0.85)">
              <path d="M1 9 Q21 3 23 8 Q25 3 45 9 L45 31 Q25 25 23 30 Q25 25 1 31 Z" />
              <path d="M23 8 V30" />
              <path d="M6 16 q4 -1.5 8 0 M6 21 q3 -1.5 7 0 M30 16 q4 -1.5 8 0 M30 21 q3 -1.5 7 0" strokeWidth="0.9" />
            </g>

            <g transform="translate(28,232)">
              <rect x="0" y="22" width="40" height="11" rx="2.5" fill="hsl(var(--sage))" fillOpacity="0.45" />
              <rect x="4" y="11" width="34" height="11" rx="2.5" fill="hsl(var(--rose))" fillOpacity="0.45" />
              <rect x="1" y="0" width="36" height="11" rx="2.5" fill="hsl(var(--card))" fillOpacity="0.8" />
            </g>

            <g transform="translate(124,250)">
              <circle cx="8" cy="2" r="2.6" fill="hsl(var(--rose))" fillOpacity="0.5" />
              <circle cx="14" cy="8" r="2.6" fill="hsl(var(--rose))" fillOpacity="0.5" />
              <circle cx="8" cy="14" r="2.6" fill="hsl(var(--rose))" fillOpacity="0.5" />
              <circle cx="2" cy="8" r="2.6" fill="hsl(var(--rose))" fillOpacity="0.5" />
              <circle cx="8" cy="8" r="2" fill="hsl(var(--accent))" stroke="none" />
            </g>

            <path d="M340 130 q-3 -7 0 -14 M340 130 q3 -7 0 -14" strokeWidth="0.9" />
            <path d="M70 70 q-3 -6 0 -12 M70 70 q3 -6 0 -12" strokeWidth="0.9" />
            <circle cx="180" cy="120" r="1.3" fill="hsl(var(--accent))" stroke="none" />
            <circle cx="330" cy="300" r="1.3" fill="hsl(var(--sage))" stroke="none" />
            <circle cx="60" cy="320" r="1.3" fill="hsl(var(--rose))" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#folio-wallpaper)" opacity="0.5" />
    </svg>
  );
}
