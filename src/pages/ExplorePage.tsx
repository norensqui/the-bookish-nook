import { useState } from 'react';
import { exploreArticles } from '@/data/seedData';
import { motion } from 'framer-motion';
import { Compass, ExternalLink, Filter } from 'lucide-react';

const categories = ['All', 'Author Interviews', 'Literary Essays', 'Book Reviews', 'Book Recommendations', 'Literary News'];

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

      {/* Categories */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-body transition-all ${
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
            className="glass-card overflow-hidden group book-card-hover block"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
