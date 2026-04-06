import { useEffect, useState } from 'react';
import { BookOpen, Sparkles, TrendingUp, Heart, Wand2 } from 'lucide-react';
import { trendingBooks, genres, TrendingBook, moodVibes, moodRecommendations, weeklyRecommendations } from '@/data/seedData';
import { TrendingBookCard, BookCover } from '@/components/BookCard';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
  const [weeklyTopBooks, setWeeklyTopBooks] = useState<TrendingBook[]>([]);
  const [isLoadingTopBooks, setIsLoadingTopBooks] = useState(true);
  const [selectedBook, setSelectedBook] = useState<TrendingBook | null>(null);
  const [genreFilter, setGenreFilter] = useState('All');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeeklyTopBooks() {
      try {
        setIsLoadingTopBooks(true);

        // Build query based on selected genre
        let query = 'subject:fiction';
        if (genreFilter !== 'All') {
          const genreMap: Record<string, string> = {
            'Romance': 'subject:romance',
            'Fantasy': 'subject:fantasy',
            'Thriller': 'subject:thriller',
            'Mystery': 'subject:mystery',
            'Literary Fiction': 'subject:literary fiction',
            'Self-Help': 'subject:self-help',
            'Classics': 'subject:classic literature',
            'Science Fiction': 'subject:science fiction',
            'Japanese Literature': 'subject:japanese fiction',
            'Psychological Fiction': 'subject:psychological fiction',
            'Philosophy': 'subject:philosophy',
            'Young Adult': 'subject:young adult',
            'Non-Fiction': 'subject:nonfiction',
            'Horror': 'subject:horror',
            'Memoir': 'subject:memoir',
            'Historical Fiction': 'subject:historical fiction',
            'Dystopian': 'subject:dystopian',
            'Poetry': 'subject:poetry',
          };
          query = genreMap[genreFilter] || `subject:${genreFilter.toLowerCase()}`;
        }

        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&orderBy=newest&maxResults=10`
        );

        const data = await res.json();

        const books: TrendingBook[] = (data.items || []).slice(0, 5).map((item: any, index: number) => ({
          id: `weekly-${index}`,
          title: item.volumeInfo?.title || 'Unknown Title',
          author: item.volumeInfo?.authors?.[0] || 'Unknown Author',
          coverUrl: item.volumeInfo?.imageLinks?.thumbnail?.replace('http://', 'https://') || '',
          reason: 'Trending this week',
          platform: 'weekly',
          genre: genreFilter !== 'All' ? genreFilter : (item.volumeInfo?.categories?.[0] || 'Fiction'),
          goodreadsRating: undefined,
          review: item.volumeInfo?.description || 'Popular this week based on current discovery results.',
        }));

        setWeeklyTopBooks(books);
      } catch (error) {
        console.error('Failed to fetch weekly top books:', error);
        setWeeklyTopBooks([]);
      } finally {
        setIsLoadingTopBooks(false);
      }
    }

    fetchWeeklyTopBooks();
  }, [genreFilter]);

  const filterByGenre = (books: TrendingBook[]) =>
    genreFilter === 'All' ? books : books.filter(b => b.genre === genreFilter);

  const moodBooks = selectedMood ? (moodRecommendations[selectedMood] || []) : [];

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
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="section-title">Top Picks of the Week</h2>
          <span className="soft-badge bg-accent/40 text-accent-foreground ml-2">Readers 15–35</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <p className="text-sm text-muted-foreground">Selected by creators and readers around the world</p>
          <Select value={genreFilter} onValueChange={setGenreFilter}>
            <SelectTrigger className="w-48 bg-card border-border/50 rounded-xl ml-auto">
              <SelectValue placeholder="Filter by genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.filter(g => g !== 'Custom').map(g => (
                <SelectItem key={g} value={g}>{g}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {isLoadingTopBooks ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="glass-card aspect-[2/3] animate-pulse bg-muted/50 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {weeklyTopBooks.map((book, i) => (
              <motion.div key={book.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}>
                <TrendingBookCard
                  book={book}
                  onClick={(resolvedCoverUrl) =>
                    setSelectedBook({ ...book, coverUrl: resolvedCoverUrl })
                  }
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Genre Filter for Trending */}
      <div className="flex items-center gap-3">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="section-title">Trending by Platform</h2>
      </div>

      {/* Trending by Platform */}
      {Object.entries(trendingBooks).map(([platform, books]) => {
        const filtered = filterByGenre(books);
        if (filtered.length === 0) return null;
        return (
          <section key={platform}>
            <div className="flex items-center gap-3 mb-5">
              <h3 className="font-display text-lg font-semibold text-foreground">Trending on {platformIcons[platform]?.label}</h3>
              <span className={`soft-badge ${platformIcons[platform]?.color} text-foreground`}>
                Top {filtered.length}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {filtered.map((book, i) => (
                <motion.div key={book.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <TrendingBookCard
                    book={book}
                    onClick={(resolvedCoverUrl) =>
                      setSelectedBook({ ...book, coverUrl: resolvedCoverUrl })
                    }
                  />
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Mood / Vibe Picker */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Wand2 className="h-5 w-5 text-primary" />
          <h2 className="section-title">What mood are you in today?</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-5">Pick a vibe and we'll suggest the perfect read</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {moodVibes.map(vibe => (
            <button
              key={vibe.id}
              onClick={() => setSelectedMood(selectedMood === vibe.id ? null : vibe.id)}
              className={`glass-card p-4 text-left transition-all clickable-card ${
                selectedMood === vibe.id ? 'ring-2 ring-primary bg-primary/10' : 'hover:bg-secondary/40'
              }`}
            >
              <p className="font-display text-sm font-semibold text-foreground">{vibe.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{vibe.description}</p>
            </button>
          ))}
        </div>
        {selectedMood && moodBooks.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {moodBooks.map((book, i) => (
              <motion.div key={book.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}>
                <TrendingBookCard
                  book={book}
                  onClick={(resolvedCoverUrl) =>
                    setSelectedBook({ ...book, coverUrl: resolvedCoverUrl })
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Weekly Recommendations */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Heart className="h-5 w-5 text-primary" />
          <h2 className="section-title">Recommendations of the Week</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Hand-picked books our community is loving right now</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {weeklyRecommendations.map((book, i) => (
            <motion.div key={book.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <TrendingBookCard
                book={book}
                onClick={(resolvedCoverUrl) =>
                  setSelectedBook({ ...book, coverUrl: resolvedCoverUrl })
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedBook(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md rounded-2xl bg-card p-6 shadow-xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-3 right-3 rounded-full px-2 py-1 text-sm text-muted-foreground hover:bg-muted"
            >
              ✕
            </button>

            <div className="mx-auto mb-4 h-64 w-40 overflow-hidden rounded-xl">
              <BookCover
                title={selectedBook.title}
                author={selectedBook.author}
                coverUrl={selectedBook.coverUrl}
              />
            </div>

            <h2 className="text-xl font-display font-semibold text-foreground">
              {selectedBook.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {selectedBook.author}
            </p>

            {selectedBook.genre && (
              <span className="soft-badge bg-secondary text-secondary-foreground mt-2">{selectedBook.genre}</span>
            )}

            <p className="text-sm font-medium mt-3 text-foreground">
              Goodreads: {selectedBook.goodreadsRating ?? 'N/A'}
            </p>

            <p className="text-sm text-muted-foreground mt-4 leading-6">
              {selectedBook.review || selectedBook.reason}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
