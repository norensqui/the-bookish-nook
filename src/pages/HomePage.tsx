import { useEffect, useState } from 'react';
import { BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import { trendingBooks, genres, TrendingBook } from '@/data/seedData';
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

    useEffect(() => {
    async function fetchWeeklyTopBooks() {
      try {
        setIsLoadingTopBooks(true);

        const today = new Date();
        const weekNumber = Math.ceil(
          ((today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / 86400000 +
            new Date(today.getFullYear(), 0, 1).getDay() + 1) / 7
        );

        const queryOptions = [
          'subject:fiction',
          'subject:romance',
          'subject:fantasy',
          'subject:mystery',
          'subject:literary fiction',
        ];

        const query = queryOptions[weekNumber % queryOptions.length];

        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&orderBy=newest&maxResults=10`
        );

        const data = await res.json();

        const books: TrendingBook[] = (data.items || []).slice(0, 5).map((item: any, index: number) => ({
          id: `weekly-${index}`,
          title: item.volumeInfo?.title || 'Unknown Title',
          author: item.volumeInfo?.authors?.[0] || 'Unknown Author',
          coverUrl: item.volumeInfo?.imageLinks?.thumbnail || '',
          reason: 'Trending this week',
          platform: 'weekly',
          genre: item.volumeInfo?.categories?.[0] || 'Fiction',
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
  }, []);
  const filterByGenre = (books: TrendingBook[]) =>
    genreFilter === 'All' ? books : books.filter(b => b.genre === genreFilter);

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
          <h2 className="section-title">Top Picks of the Week</h2>
          <span className="soft-badge bg-accent/40 text-accent-foreground ml-2">Readers 15–35</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Selected by creators and readers around the world</p>
        {isLoadingTopBooks ? (
  <p className="text-sm text-muted-foreground">Loading this week’s books...</p>
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
        <Select value={genreFilter} onValueChange={setGenreFilter}>
          <SelectTrigger className="w-44 bg-card border-border/50 rounded-xl ml-auto">
            <SelectValue placeholder="Filter by genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.filter(g => g !== 'Custom').map(g => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
          {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl relative">
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

            <h2 className="text-xl font-semibold text-foreground">
              {selectedBook.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {selectedBook.author}
            </p>

            <p className="text-sm font-medium mt-3 text-foreground">
              Goodreads: {selectedBook.goodreadsRating ?? 'N/A'}
            </p>

            <p className="text-sm text-muted-foreground mt-4 leading-6">
              {selectedBook.review || selectedBook.reason}
            </p>
         </div>
        </div>
      )}
    </div>
  );
}
