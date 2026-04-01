import { BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import { topPicks, trendingBooks } from '@/data/seedData';
import { BookCard, TrendingBookCard } from '@/components/BookCard';
import { motion } from 'framer-motion';

const platformIcons: Record<string, { label: string; color: string }> = {
  tiktok: { label: 'TikTok', color: 'bg-rose' },
  reddit: { label: 'Reddit', color: 'bg-sand' },
  pinterest: { label: 'Pinterest', color: 'bg-accent' },
  twitter: { label: 'Twitter / X', color: 'bg-lavender' },
  instagram: { label: 'Instagram', color: 'bg-sage' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-accent/20 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-xs font-body font-medium text-muted-foreground uppercase tracking-widest">Welcome back</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Your cozy corner<br />for book discovery
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-3 max-w-md">
            Track your reading journey, discover trending books, and curate your personal library — all in one beautifully designed space.
          </p>
        </div>
      </motion.section>

      {/* Top 5 Picks */}
      <section>
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="section-title">Top 5 Picks of the Week</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Selected by creators around the world</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {topPicks.map((book, i) => (
            <motion.div key={book.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}>
              <TrendingBookCard book={book} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending by Platform */}
      {Object.entries(trendingBooks).map(([platform, books]) => (
        <section key={platform}>
          <div className="flex items-center gap-3 mb-5">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="section-title">Trending on {platformIcons[platform]?.label}</h2>
            <span className={`soft-badge ${platformIcons[platform]?.color} text-foreground`}>
              Top 5
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {books.map((book, i) => (
              <motion.div key={book.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <TrendingBookCard book={book} />
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
