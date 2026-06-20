import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { CozyNookArt, BookStackArt, EmptyShelfArt } from '@/components/Decorations';

type BannerVariant = 'cozy' | 'shelf' | 'botanical';

interface PageBannerProps {
  variant?: BannerVariant;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

const ART: Record<BannerVariant, (props: { className?: string }) => JSX.Element> = {
  cozy: CozyNookArt,
  shelf: BookStackArt,
  botanical: EmptyShelfArt,
};

export function PageBanner({ variant = 'cozy', title, subtitle, icon: Icon }: PageBannerProps) {
  const Art = ART[variant];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full h-36 sm:h-40 rounded-3xl overflow-hidden mb-7 glass-card"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-card/30 to-accent/25 pointer-events-none" />
      <Art className="absolute right-3 sm:right-8 bottom-0 h-[120%] opacity-90 pointer-events-none" />
      <div className="relative h-full flex flex-col justify-center px-6 sm:px-8">
        <div className="flex items-center gap-2 mb-1">
          {Icon && <Icon className="h-5 w-5 text-primary" />}
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
        </div>
        {subtitle && <p className="text-sm text-muted-foreground max-w-md">{subtitle}</p>}
      </div>
    </motion.div>
  );
}
