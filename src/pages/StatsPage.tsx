import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BookCheck, BookOpen, Heart, FileText, Star, Target, Flame, Pencil } from 'lucide-react';
import { useBooks } from '@/context/BookContext';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const GOAL_KEY = 'bookish_reading_goal';

export default function StatsPage() {
  const { books, readingLogs } = useBooks();
  const year = new Date().getFullYear();

  const [goal, setGoal] = useState<number>(() => {
    const saved = Number(localStorage.getItem(GOAL_KEY));
    return saved > 0 ? saved : 24;
  });
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalDraft, setGoalDraft] = useState(String(goal));

  const saveGoal = () => {
    const n = Math.max(1, Math.round(Number(goalDraft) || 0));
    setGoal(n);
    localStorage.setItem(GOAL_KEY, String(n));
    setEditingGoal(false);
  };

  const stats = useMemo(() => {
    const read = books.filter(b => b.status === 'read');
    const reading = books.filter(b => b.status === 'reading');
    const wishlist = books.filter(b => b.status === 'wishlist');
    const favorites = books.filter(b => b.isFavorite);
    const readThisYear = read.filter(b => (b.finishDate || '').startsWith(String(year)));
    const rated = read.filter(b => b.rating > 0);
    const avgRating = rated.length ? rated.reduce((s, b) => s + b.rating, 0) / rated.length : 0;
    const totalPages = readingLogs.reduce((s, l) => s + l.pagesRead, 0);
    const readingDays = new Set(readingLogs.map(l => l.date)).size;

    const genreFreq: Record<string, number> = {};
    books.forEach(b => { if (b.genre) genreFreq[b.genre] = (genreFreq[b.genre] || 0) + 1; });
    const topGenres = Object.entries(genreFreq).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const maxGenre = topGenres[0]?.[1] || 1;

    return {
      read: read.length, reading: reading.length, wishlist: wishlist.length,
      favorites: favorites.length, readThisYear: readThisYear.length,
      avgRating, totalPages, readingDays, topGenres, maxGenre,
    };
  }, [books, readingLogs, year]);

  const goalProgress = Math.min(100, Math.round((stats.readThisYear / goal) * 100));

  const cards = [
    { label: 'Books Read', value: stats.read, icon: BookCheck },
    { label: 'Currently Reading', value: stats.reading, icon: BookOpen },
    { label: 'Want to Read', value: stats.wishlist, icon: Heart },
    { label: 'Favorites', value: stats.favorites, icon: Star },
    { label: 'Pages Logged', value: stats.totalPages, icon: FileText },
    { label: 'Reading Days', value: stats.readingDays, icon: Flame },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h1 className="font-display text-3xl font-bold text-foreground">Reading Stats</h1>
        </div>
        <p className="text-sm text-muted-foreground">Your reading at a glance</p>
      </motion.div>

      <section className="glass-card p-6 mb-8">
        <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">{year} Reading Goal</h2>
          </div>
          {editingGoal ? (
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={goalDraft}
                onChange={e => setGoalDraft(e.target.value)}
                className="w-24 h-9 bg-background/50"
              />
              <Button size="sm" onClick={saveGoal}>Save</Button>
            </div>
          ) : (
            <button
              onClick={() => { setGoalDraft(String(goal)); setEditingGoal(true); }}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Pencil className="h-3.5 w-3.5" /> Edit goal
            </button>
          )}
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-display text-3xl font-bold text-foreground">{stats.readThisYear}</span>
          <span className="text-muted-foreground">of {goal} books</span>
        </div>
        <Progress value={goalProgress} className="h-2.5" />
        <p className="text-xs text-muted-foreground mt-2">
          {goalProgress >= 100
            ? 'Goal reached - wonderful!'
            : `${goal - stats.readThisYear} to go - ${goalProgress}% there`}
        </p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {cards.map(c => (
          <div key={c.label} className="glass-card p-4 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-secondary/50">
              <c.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-foreground leading-none">{c.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.label}</p>
            </div>
          </div>
        ))}
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-secondary/50">
            <Star className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-foreground leading-none">
              {stats.avgRating ? stats.avgRating.toFixed(1) : '-'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Avg Rating</p>
          </div>
        </div>
      </div>

      <section className="glass-card p-6">
        <h2 className="font-display text-lg font-semibold text-foreground mb-4">Top Genres</h2>
        {stats.topGenres.length === 0 ? (
          <p className="text-sm text-muted-foreground">Add some books with genres to see your breakdown.</p>
        ) : (
          <div className="space-y-3">
            {stats.topGenres.map(([genre, count]) => (
              <div key={genre}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{genre}</span>
                  <span className="text-muted-foreground">{count}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/70"
                    style={{ width: `${(count / stats.maxGenre) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
