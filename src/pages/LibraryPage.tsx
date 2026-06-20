import { useState } from 'react';
import { useBooks } from '@/context/BookContext';
import { useSettings } from '@/context/SettingsContext';
import { EmptyShelfArt } from '@/components/Decorations';
import { PageBanner } from '@/components/PageBanner';
import { BookCard } from '@/components/BookCard';
import { Book, getMoodQuote, genres } from '@/data/seedData';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, BookCheck, Heart, Search, Plus, Trash2, Edit, ArrowRight,
  BarChart3, Flame, Calendar, Clock, FileText, Star, X, Quote, Loader2, Check
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

const tabs = [
  { id: 'read' as const, label: 'Read', icon: BookCheck },
  { id: 'reading' as const, label: 'Currently Reading', icon: BookOpen },
  { id: 'wishlist' as const, label: 'Wishlist', icon: Heart },
  { id: 'tracker' as const, label: 'Reading Tracker', icon: BarChart3 },
];

const defaultNewBook: Omit<Book, 'id'> = {
  title: '', author: '', authorBio: '', description: '', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
  rating: 0, notes: '', startDate: '', finishDate: '', status: 'wishlist', totalPages: 0, currentPage: 0, isFavorite: false,
  genre: '', mood: '',
};

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button key={star} type="button" onClick={() => onChange(star === value ? 0 : star)} className="p-0.5">
          <Star className={`h-5 w-5 transition-colors ${star <= value ? 'fill-primary/70 text-primary/70' : 'text-border hover:text-primary/40'}`} />
        </button>
      ))}
    </div>
  );
}

export default function LibraryPage() {
  const { books, readingLogs, addBook, updateBook, deleteBook, moveBook, toggleFavorite, addReadingLog } = useBooks();
  const { settings } = useSettings();
  const [activeTab, setActiveTab] = useState<'read' | 'reading' | 'wishlist' | 'tracker'>(settings.defaultView);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newBook, setNewBook] = useState(defaultNewBook);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [logDialogOpen, setLogDialogOpen] = useState(false);
  const [newLog, setNewLog] = useState({ bookId: '', date: new Date().toISOString().split('T')[0], pagesRead: 0, hoursRead: 0, notes: '' });

  // Google Books search (inside the Add Book dialog)
  const [bookSearch, setBookSearch] = useState('');
  const [searchResults, setSearchResults] = useState<Array<Omit<Book, 'id'>>>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleBookSearch = async () => {
    const q = bookSearch.trim();
    if (!q) return;
    setIsSearching(true);
    setHasSearched(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=12`
      );
      const data = await res.json();
      const results: Array<Omit<Book, 'id'>> = (data.items || []).map((item: any) => {
        const v = item.volumeInfo || {};
        return {
          title: v.title || 'Unknown Title',
          author: v.authors?.[0] || 'Unknown Author',
          authorBio: '',
          description: v.description || '',
          coverUrl: (v.imageLinks?.thumbnail || v.imageLinks?.smallThumbnail || '').replace('http://', 'https://')
            || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
          rating: 0,
          notes: '',
          startDate: '',
          finishDate: '',
          status: 'wishlist' as Book['status'],
          totalPages: v.pageCount || 0,
          currentPage: 0,
          isFavorite: false,
          genre: v.categories?.[0] || '',
          mood: '',
        };
      });
      setSearchResults(results);
    } catch {
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const addFromSearch = (result: Omit<Book, 'id'>) => {
    addBook({ ...result, status: activeTab === 'tracker' ? 'reading' : activeTab });
    // Reset search state and close the dialog
    setBookSearch('');
    setSearchResults([]);
    setHasSearched(false);
    setAddDialogOpen(false);
  };

  const filteredBooks = books
    .filter(b => activeTab === 'tracker' ? b.status === 'reading' : b.status === activeTab)
    .filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))
    .filter(b => ratingFilter === 'all' ? true : ratingFilter === 'highest' ? b.rating >= 4 : true)
    .sort((a, b) => sortBy === 'title' ? a.title.localeCompare(b.title) : sortBy === 'author' ? a.author.localeCompare(b.author) : b.rating - a.rating);

  const readingBooks = books.filter(b => b.status === 'reading');

  // Grid columns driven by the Settings page.
  const gridColsClass = settings.gridColumns === 'auto'
    ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
    : settings.gridColumns === '3' ? 'grid-cols-2 sm:grid-cols-3'
    : settings.gridColumns === '4' ? 'grid-cols-2 sm:grid-cols-4'
    : settings.gridColumns === '5' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5'
    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6';

  const handleAddBook = () => {
    addBook({ ...newBook, status: activeTab === 'tracker' ? 'reading' : activeTab });
    setNewBook(defaultNewBook);
    setAddDialogOpen(false);
  };

  const handleEditSave = () => {
    if (editingBook) {
      // Generate mood quote when rating
      let moodQuote = editingBook.moodQuote;
      if (editingBook.rating > 0 && !moodQuote) {
        moodQuote = getMoodQuote(editingBook.rating, editingBook.genre, editingBook.mood);
      }
      updateBook(editingBook.id, { ...editingBook, moodQuote });
      setEditingBook(null);
    }
  };

  const handleAddLog = () => {
    addReadingLog(newLog);
    const book = books.find(b => b.id === newLog.bookId);
    if (book) updateBook(book.id, { currentPage: Math.min(book.currentPage + newLog.pagesRead, book.totalPages) });
    setNewLog({ bookId: '', date: new Date().toISOString().split('T')[0], pagesRead: 0, hoursRead: 0, notes: '' });
    setLogDialogOpen(false);
  };

  // Weekly report calculations
  const totalPages = readingLogs.reduce((s, l) => s + l.pagesRead, 0);
  const totalHours = readingLogs.reduce((s, l) => s + l.hoursRead, 0);
  const uniqueDays = new Set(readingLogs.map(l => l.date)).size;
  const bookFreq: Record<string, number> = {};
  readingLogs.forEach(l => { bookFreq[l.bookId] = (bookFreq[l.bookId] || 0) + l.pagesRead; });
  const mostReadBookId = Object.entries(bookFreq).sort((a, b) => b[1] - a[1])[0]?.[0];
  const mostReadBook = books.find(b => b.id === mostReadBookId);
  const streak = uniqueDays;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <PageBanner variant="shelf" title="My Library" subtitle="Your personal reading collection" />

      {/* Stats summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Read', value: books.filter(b => b.status === 'read').length, icon: BookCheck },
          { label: 'Reading', value: books.filter(b => b.status === 'reading').length, icon: BookOpen },
          { label: 'Wishlist', value: books.filter(b => b.status === 'wishlist').length, icon: Heart },
          { label: 'Favorites', value: books.filter(b => b.isFavorite).length, icon: Star },
        ].map(stat => (
          <div key={stat.label} className="glass-card p-4 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-secondary/50">
              <stat.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-foreground leading-none">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-body transition-all ${
              activeTab === tab.id ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-secondary/60 text-muted-foreground hover:bg-secondary'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab !== 'tracker' ? (
        <>
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search books..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 bg-card border-border/50 rounded-xl" />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-card border-border/50 rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Sort by Title</SelectItem>
                <SelectItem value="author">Sort by Author</SelectItem>
                <SelectItem value="rating">Sort by Rating</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-40 bg-card border-border/50 rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="highest">4+ Stars</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-xl gap-2 bg-primary text-primary-foreground hover:bg-primary/90"><Plus className="h-4 w-4" />Add Book</Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-border/50 max-h-[85vh] overflow-y-auto">
                <DialogHeader><DialogTitle className="font-display">Add New Book</DialogTitle></DialogHeader>

                {/* Search Google Books */}
                <div className="mt-4 space-y-3">
                  <Label>Search for a book</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Title, author, or keyword..."
                        value={bookSearch}
                        onChange={e => setBookSearch(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleBookSearch(); } }}
                        className="pl-9 bg-background/50 rounded-xl"
                      />
                    </div>
                    <Button type="button" onClick={handleBookSearch} disabled={isSearching} className="rounded-xl bg-primary text-primary-foreground">
                      {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Search'}
                    </Button>
                  </div>

                  {isSearching && (
                    <div className="flex items-center justify-center py-6 text-muted-foreground">
                      <Loader2 className="h-5 w-5 animate-spin mr-2" /> Searching…
                    </div>
                  )}

                  {!isSearching && hasSearched && searchResults.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">No matches found. Try a different search, or add the details manually below.</p>
                  )}

                  {searchResults.length > 0 && (
                    <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                      {searchResults.map((r, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-xl bg-background/40 hover:bg-secondary/40 transition-colors">
                          <img src={r.coverUrl} alt={r.title} className="w-10 h-14 object-cover rounded-md shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground line-clamp-1">{r.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">{r.author}{r.totalPages ? ` · ${r.totalPages} pages` : ''}</p>
                          </div>
                          <div className="flex gap-1.5 shrink-0">
                            <Button type="button" size="sm" variant="outline" className="rounded-lg h-8" onClick={() => { setNewBook({ ...r }); setSearchResults([]); setHasSearched(false); }}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button type="button" size="sm" className="rounded-lg h-8 bg-primary text-primary-foreground" onClick={() => addFromSearch(r)}>
                              <Check className="h-3 w-3 mr-1" /> Add
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/50" /></div>
                  <div className="relative flex justify-center"><span className="bg-card px-2 text-xs text-muted-foreground">or add manually</span></div>
                </div>

                <div className="space-y-4 mt-4">
                  <div><Label>Title</Label><Input value={newBook.title} onChange={e => setNewBook({...newBook, title: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div><Label>Author</Label><Input value={newBook.author} onChange={e => setNewBook({...newBook, author: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div><Label>Genre</Label>
                    <Select value={newBook.genre || ''} onValueChange={v => setNewBook({...newBook, genre: v})}>
                      <SelectTrigger className="bg-background/50 rounded-xl"><SelectValue placeholder="Select genre" /></SelectTrigger>
                      <SelectContent>{genres.filter(g => g !== 'All').map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div><Label>Author Bio</Label><Textarea value={newBook.authorBio} onChange={e => setNewBook({...newBook, authorBio: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div><Label>Description</Label><Textarea value={newBook.description} onChange={e => setNewBook({...newBook, description: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div><Label>Cover URL</Label><Input value={newBook.coverUrl} onChange={e => setNewBook({...newBook, coverUrl: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Total Pages</Label><Input type="number" value={newBook.totalPages} onChange={e => setNewBook({...newBook, totalPages: +e.target.value})} className="bg-background/50 rounded-xl" /></div>
                    <div>
                      <Label>Rating (private)</Label>
                      <StarRating value={newBook.rating} onChange={v => setNewBook({...newBook, rating: v})} />
                    </div>
                  </div>
                  <div><Label>Notes</Label><Textarea value={newBook.notes} onChange={e => setNewBook({...newBook, notes: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Start Date</Label><Input type="date" value={newBook.startDate} onChange={e => setNewBook({...newBook, startDate: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                    <div><Label>Finish Date</Label><Input type="date" value={newBook.finishDate} onChange={e => setNewBook({...newBook, finishDate: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  </div>
                  <Button onClick={handleAddBook} className="w-full rounded-xl bg-primary text-primary-foreground">Add to {activeTab === 'read' ? 'Read' : activeTab === 'reading' ? 'Currently Reading' : 'Wishlist'}</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Book Grid */}
          {filteredBooks.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <EmptyShelfArt className="h-24 w-32 mx-auto mb-3 text-primary" />
              <h3 className="font-display text-lg text-foreground">Your shelf is waiting</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto">Add a book or search the catalog — your next favorite read starts here.</p>
            </div>
          ) : (
            <div className={`grid ${gridColsClass} gap-4`}>
              <AnimatePresence>
                {filteredBooks.map((book, i) => (
                  <motion.div key={book.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.03 }}>
                    <div className="relative group">
                      <BookCard
                        title={book.title}
                        author={book.author}
                        coverUrl={book.coverUrl}
                        rating={book.rating}
                        isFavorite={book.isFavorite}
                        onFavoriteToggle={() => toggleFavorite(book.id)}
                        onClick={() => setEditingBook(book)}
                        progress={book.totalPages > 0 ? (book.currentPage / book.totalPages) * 100 : undefined}
                        moodQuote={settings.showMoodQuotes ? book.moodQuote : undefined}
                        showRating={settings.showRatings}
                      />
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                        <button onClick={() => deleteBook(book.id)} className="p-1.5 rounded-full bg-destructive/80 text-destructive-foreground backdrop-blur-sm">
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </>
      ) : (
        /* Reading Tracker */
        <div className="space-y-8">
          {/* Currently Reading Progress */}
          <section>
            <h2 className="section-title mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> Reading Progress</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {readingBooks.map(book => (
                <div key={book.id} className="glass-card p-4 flex gap-4">
                  <img src={book.coverUrl} alt={book.title} className="w-16 h-24 object-cover rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-semibold truncate">{book.title}</h3>
                    <p className="text-xs text-muted-foreground">{book.author}</p>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>{book.currentPage} / {book.totalPages} pages</span>
                        <span>{book.totalPages > 0 ? Math.round((book.currentPage / book.totalPages) * 100) : 0}%</span>
                      </div>
                      <Progress value={book.totalPages > 0 ? (book.currentPage / book.totalPages) * 100 : 0} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Log Reading */}
          <Dialog open={logDialogOpen} onOpenChange={setLogDialogOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl gap-2 bg-primary text-primary-foreground"><Plus className="h-4 w-4" />Log Reading Session</Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-border/50">
              <DialogHeader><DialogTitle className="font-display">Log Reading</DialogTitle></DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Book</Label>
                  <Select value={newLog.bookId} onValueChange={v => setNewLog({...newLog, bookId: v})}>
                    <SelectTrigger className="bg-background/50 rounded-xl"><SelectValue placeholder="Select book" /></SelectTrigger>
                    <SelectContent>
                      {readingBooks.map(b => <SelectItem key={b.id} value={b.id}>{b.title}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Date</Label><Input type="date" value={newLog.date} onChange={e => setNewLog({...newLog, date: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Pages Read</Label><Input type="number" value={newLog.pagesRead} onChange={e => setNewLog({...newLog, pagesRead: +e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div><Label>Hours Read</Label><Input type="number" step={0.5} value={newLog.hoursRead} onChange={e => setNewLog({...newLog, hoursRead: +e.target.value})} className="bg-background/50 rounded-xl" /></div>
                </div>
                <div><Label>Notes</Label><Textarea value={newLog.notes} onChange={e => setNewLog({...newLog, notes: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                <Button onClick={handleAddLog} className="w-full rounded-xl bg-primary text-primary-foreground">Save Log</Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Weekly Report */}
          <section>
            <h2 className="section-title mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-primary" />Weekly Report</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 text-center">
                <FileText className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl font-bold text-foreground">{totalPages}</p>
                <p className="text-xs text-muted-foreground">Pages Read</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl font-bold text-foreground">{totalHours.toFixed(1)}</p>
                <p className="text-xs text-muted-foreground">Hours Read</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl font-bold text-foreground">{uniqueDays}</p>
                <p className="text-xs text-muted-foreground">Reading Days</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Flame className="h-5 w-5 text-accent-foreground mx-auto mb-2" />
                <p className="font-display text-2xl font-bold text-foreground">{streak}</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="glass-card p-4">
                <p className="text-xs text-muted-foreground mb-1">Avg. Pages / Day</p>
                <p className="font-display text-xl font-bold text-foreground">{uniqueDays > 0 ? Math.round(totalPages / uniqueDays) : 0}</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-muted-foreground mb-1">Avg. Hours / Day</p>
                <p className="font-display text-xl font-bold text-foreground">{uniqueDays > 0 ? (totalHours / uniqueDays).toFixed(1) : 0}</p>
              </div>
            </div>

            {mostReadBook && (
              <div className="glass-card p-4 mt-4 flex items-center gap-4">
                <img src={mostReadBook.coverUrl} alt={mostReadBook.title} className="w-12 h-18 object-cover rounded-lg" />
                <div>
                  <p className="text-xs text-muted-foreground">Most Read This Week</p>
                  <p className="font-display font-semibold text-foreground">{mostReadBook.title}</p>
                  <p className="text-xs text-muted-foreground">{mostReadBook.author}</p>
                </div>
              </div>
            )}
          </section>

          {/* Recent Logs */}
          <section>
            <h2 className="section-title mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {readingLogs.slice(-5).reverse().map(log => {
                const book = books.find(b => b.id === log.bookId);
                return (
                  <div key={log.id} className="glass-card p-4 flex items-center gap-4">
                    {book && <img src={book.coverUrl} alt={book.title} className="w-10 h-14 object-cover rounded-lg" />}
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-medium truncate">{book?.title}</p>
                      <p className="text-xs text-muted-foreground">{log.date} · {log.pagesRead} pages · {log.hoursRead}h</p>
                      {log.notes && <p className="text-xs text-muted-foreground italic mt-1">"{log.notes}"</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editingBook} onOpenChange={open => { if (!open) setEditingBook(null); }}>
        <DialogContent className="glass-card border-border/50 max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle className="font-display">Edit Book</DialogTitle></DialogHeader>
          {editingBook && (
            <div className="space-y-4 mt-4">
              <div className="flex gap-4">
                <img src={editingBook.coverUrl} alt={editingBook.title} className="w-20 h-28 object-cover rounded-lg" />
                <div className="flex-1">
                  <div><Label>Title</Label><Input value={editingBook.title} onChange={e => setEditingBook({...editingBook, title: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                  <div className="mt-2"><Label>Author</Label><Input value={editingBook.author} onChange={e => setEditingBook({...editingBook, author: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                </div>
              </div>
              <div><Label>Genre</Label>
                <Select value={editingBook.genre || ''} onValueChange={v => setEditingBook({...editingBook, genre: v})}>
                  <SelectTrigger className="bg-background/50 rounded-xl"><SelectValue placeholder="Select genre" /></SelectTrigger>
                  <SelectContent>{genres.filter(g => g !== 'All').map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Author Bio</Label><Textarea value={editingBook.authorBio} onChange={e => setEditingBook({...editingBook, authorBio: e.target.value})} className="bg-background/50 rounded-xl" /></div>
              <div><Label>Description</Label><Textarea value={editingBook.description} onChange={e => setEditingBook({...editingBook, description: e.target.value})} className="bg-background/50 rounded-xl" /></div>
              <div><Label>Cover URL</Label><Input value={editingBook.coverUrl} onChange={e => setEditingBook({...editingBook, coverUrl: e.target.value})} className="bg-background/50 rounded-xl" /></div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Rating (private)</Label>
                  <StarRating value={editingBook.rating} onChange={v => {
                    const moodQuote = v > 0 ? getMoodQuote(v, editingBook.genre, editingBook.mood) : '';
                    setEditingBook({...editingBook, rating: v, moodQuote});
                  }} />
                </div>
                <div><Label>Current Page</Label><Input type="number" value={editingBook.currentPage} onChange={e => setEditingBook({...editingBook, currentPage: +e.target.value})} className="bg-background/50 rounded-xl" /></div>
                <div><Label>Total Pages</Label><Input type="number" value={editingBook.totalPages} onChange={e => setEditingBook({...editingBook, totalPages: +e.target.value})} className="bg-background/50 rounded-xl" /></div>
              </div>

              {/* Mood Quote Display */}
              {editingBook.moodQuote && (
                <div className="glass-card p-3 bg-accent/20 border-accent/30">
                  <div className="flex items-start gap-2">
                    <Quote className="h-4 w-4 text-accent-foreground mt-0.5 shrink-0" />
                    <p className="text-sm text-accent-foreground italic font-body">{editingBook.moodQuote}</p>
                  </div>
                </div>
              )}

              <div><Label>Notes</Label><Textarea value={editingBook.notes} onChange={e => setEditingBook({...editingBook, notes: e.target.value})} className="bg-background/50 rounded-xl" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Start Date</Label><Input type="date" value={editingBook.startDate} onChange={e => setEditingBook({...editingBook, startDate: e.target.value})} className="bg-background/50 rounded-xl" /></div>
                <div><Label>Finish Date</Label><Input type="date" value={editingBook.finishDate} onChange={e => setEditingBook({...editingBook, finishDate: e.target.value})} className="bg-background/50 rounded-xl" /></div>
              </div>
              <div>
                <Label>Move to</Label>
                <div className="flex gap-2 mt-1">
                  {(['read', 'reading', 'wishlist'] as const).map(s => (
                    <Button key={s} variant={editingBook.status === s ? 'default' : 'outline'} size="sm" className="rounded-xl" onClick={() => setEditingBook({...editingBook, status: s})}>
                      {s === 'read' ? 'Read' : s === 'reading' ? 'Reading' : 'Wishlist'}
                    </Button>
                  ))}
                </div>
              </div>
              <Button onClick={handleEditSave} className="w-full rounded-xl bg-primary text-primary-foreground">Save Changes</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
