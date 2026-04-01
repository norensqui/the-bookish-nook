import { useState, useMemo } from 'react';
import { movieAdaptations, genres } from '@/data/seedData';
import { useBooks } from '@/context/BookContext';
import { motion } from 'framer-motion';
import { Film, Filter, Star, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const moods = ['All', 'melancholic', 'heartwarming', 'nostalgic', 'glamorous', 'emotional', 'empowering', 'romantic', 'epic'];
const years = ['All', '2025', '2024', '2023', '2020', '2019', '2013', '2005'];

export default function MoviesPage() {
  const { books } = useBooks();
  const [genreFilter, setGenreFilter] = useState('All');
  const [moodFilter, setMoodFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  // Recommendation intelligence
  const userGenres = useMemo(() => {
    const freq: Record<string, number> = {};
    books.forEach(b => { if (b.genre) freq[b.genre] = (freq[b.genre] || 0) + 1 + (b.rating || 0); });
    return freq;
  }, [books]);

  const enriched = useMemo(() => {
    return movieAdaptations.map(m => ({
      ...m,
      recommended: (userGenres[m.genre] || 0) > 2 || books.some(b => b.title === m.bookTitle),
    }));
  }, [userGenres, books]);

  const filtered = useMemo(() => {
    let results = enriched;
    if (genreFilter !== 'All') results = results.filter(m => m.genre === genreFilter);
    if (moodFilter !== 'All') results = results.filter(m => m.mood === moodFilter);
    if (yearFilter !== 'All') results = results.filter(m => m.releaseYear === +yearFilter);
    if (sortBy === 'popularity') results = [...results].sort((a, b) => b.popularity - a.popularity);
    else if (sortBy === 'year') results = [...results].sort((a, b) => b.releaseYear - a.releaseYear);
    else if (sortBy === 'recommended') results = [...results].sort((a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0));
    return results;
  }, [enriched, genreFilter, moodFilter, yearFilter, sortBy]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-2">
          <Film className="h-5 w-5 text-primary" />
          <h1 className="font-display text-3xl font-bold text-foreground">Movies Adapted From Books</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Discover beloved books brought to screen</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Select value={genreFilter} onValueChange={setGenreFilter}>
          <SelectTrigger className="w-40 bg-card border-border/50 rounded-xl"><SelectValue placeholder="Genre" /></SelectTrigger>
          <SelectContent>{genres.filter(g => g !== 'Custom').map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
        </Select>
        <Select value={moodFilter} onValueChange={setMoodFilter}>
          <SelectTrigger className="w-40 bg-card border-border/50 rounded-xl"><SelectValue placeholder="Mood" /></SelectTrigger>
          <SelectContent>{moods.map(m => <SelectItem key={m} value={m}>{m === 'All' ? 'All Moods' : m.charAt(0).toUpperCase() + m.slice(1)}</SelectItem>)}</SelectContent>
        </Select>
        <Select value={yearFilter} onValueChange={setYearFilter}>
          <SelectTrigger className="w-40 bg-card border-border/50 rounded-xl"><SelectValue placeholder="Year" /></SelectTrigger>
          <SelectContent>{years.map(y => <SelectItem key={y} value={y}>{y === 'All' ? 'All Years' : y}</SelectItem>)}</SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-44 bg-card border-border/50 rounded-xl"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Most Popular</SelectItem>
            <SelectItem value="year">Newest First</SelectItem>
            <SelectItem value="recommended">Recommended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((movie, i) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass-card overflow-hidden group book-card-hover"
          >
            {movie.recommended && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/50 text-accent-foreground text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                Recommended for you
              </div>
            )}
            <div className="flex gap-2 p-3">
              <div className="w-20 shrink-0">
                <img src={movie.bookCoverUrl} alt={movie.bookTitle} className="w-full aspect-[2/3] object-cover rounded-lg" />
                <p className="text-[10px] text-muted-foreground text-center mt-1">Book</p>
              </div>
              <div className="w-20 shrink-0">
                <img src={movie.moviePosterUrl} alt={movie.movieTitle} className="w-full aspect-[2/3] object-cover rounded-lg" />
                <p className="text-[10px] text-muted-foreground text-center mt-1">Movie</p>
              </div>
            </div>
            <div className="px-3 pb-3">
              <h3 className="font-display text-sm font-semibold text-foreground line-clamp-1">{movie.bookTitle}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{movie.movieTitle}</p>
              <p className="text-xs text-muted-foreground">{movie.author} · {movie.releaseYear}</p>
              <div className="flex gap-1.5 mt-2">
                <span className="soft-badge bg-secondary text-secondary-foreground">{movie.genre}</span>
                <span className="soft-badge bg-accent/40 text-accent-foreground">{movie.mood}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{movie.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass-card p-12 text-center">
          <Film className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
          <h3 className="font-display text-lg text-foreground">No adaptations found</h3>
          <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
