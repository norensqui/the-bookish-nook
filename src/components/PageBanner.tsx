import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  objectPosition?: string;
}

export function PageBanner({
  image,
  title,
  subtitle,
  icon: Icon,
  objectPosition = 'center 40%',
}: PageBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-7 shadow-sm border border-border/40"
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/65 via-foreground/25 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-1">
          {Icon && <Icon className="h-5 w-5 text-white/90" />}
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">{title}</h1>
        </div>
        {subtitle && <p className="text-sm text-white/80 max-w-xl">{subtitle}</p>}
      </div>
    </motion.div>
  );
}
