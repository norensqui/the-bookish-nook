import { useState } from 'react';
import { creatorPicks, exploreArticles } from '@/data/seedData';
import { BookCover } from '@/components/BookCard';
import { motion } from 'framer-motion';
import { Compass, ExternalLink, Sparkles, Newspaper, Youtube, Instagram } from 'lucide-react';

const categories = ['All', 'Author Interviews', 'Literary Essays', 'Book Reviews', 'Book Recommendations', 'Literary News'];

const platformColors: Record<string, string> = {
  YouTube: 'bg-destructive/10 text-destructive',
  TikTok: 'bg-foreground/10 text-foreground',
  Instagram: 'bg-accent/30 text-accent-foreground',
  Blog: 'bg-sage/30 text-sage-foreground',
};

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? exploreArticles
    : exploreArticles.filter(a => a.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-2">
          <Compass className="h-5 w-5 text-primary" />
          <h1 className="font-display text-3xl font-bold text-foreground">Explore</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Discover book-related articles, interviews, and recommendations</p>
      </motion.div>

      {/* Bookworm Creator Picks */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="section-title">Bookworm Creator Picks</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Curated recommendations from your favorite book creators</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {creatorPicks.map((cp, ci) => (
            <motion.div
              key={cp.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.08 }}
              className="glass-card p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={cp.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-4 group/creator clickable-card"
              >
                <img
                  src={cp.creatorAvatar}
                  alt={cp.creator}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-border/50 group-hover/creator:border-primary transition-colors"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cp.creator)}&background=d4c5a9&color=3d3529&size=80`;
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-display text-sm font-semibold text-foreground group-hover/creator:text-primary transition-colors">{cp.creator}</p>
                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover/creator:opacity-100 transition-opacity" />
                  </div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium mt-0.5 ${platformColors[cp.platform] || 'bg-secondary text-secondary-foreground'}`}>
                    {cp.platform}
                  </span>
                </div>
              </a>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {cp.books.map((book, bi) => (
                  <div key={bi} className="min-w-[110px] flex-shrink-0 group/book">
                    <div className="w-full aspect-[2/3] overflow-hidden rounded-lg relative">
                      <BookCover title={book.title} author={book.author} coverUrl={book.coverUrl} />
                    </div>
                    <h4 className="font-display text-xs font-semibold text-foreground mt-2 line-clamp-1">{book.title}</h4>
                    <p className="text-[10px] text-muted-foreground">{book.author}</p>
                    <p className="text-[10px] text-muted-foreground italic mt-1 line-clamp-2">"{book.reason}"</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Articles */}
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="h-5 w-5 text-primary" />
        <h2 className="section-title">Top Articles This Week</h2>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-body transition-all clickable-card ${
              activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary/60 text-muted-foreground hover:bg-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article, i) => (
          <motion.a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card overflow-hidden group book-card-hover block clickable-card hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={article.imageUrl}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop';
                }}
              />
            </div>
            <div className="p-4">
              <span className="soft-badge bg-secondary text-secondary-foreground mb-2">{article.category}</span>
              <h3 className="font-display text-base font-semibold text-foreground mt-2 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground font-medium">{article.source}</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
