import { useEffect, useState, useCallback, useRef } from 'react';
import { Star, Heart, Quote, BookOpen } from 'lucide-react';
import { TrendingBook } from '@/data/seedData';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

// Simple in-memory cache for Google Books API results
const coverCache = new Map<string, string>();

interface BookCardProps {
  title: string;
  author: string;
  coverUrl: string;
  reason?: string;
  rating?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onClick?: (resolvedCoverUrl: string) => void;
  variant?: 'default' | 'trending' | 'compact';
  progress?: number;
  moodQuote?: string;
  showRating?: boolean;
}

// A designed book-cover placeholder shown when no real cover image is available.
// Looks intentional (stylized spine + title), not like a broken image.
const fallbackTints = [
  'from-accent/70 to-rose/40',
  'from-sage/70 to-secondary',
  'from-secondary to-muted',
  'from-primary/40 to-sage/50',
  'from-rose/50 to-accent/40',
];

function CoverFallback({ title, author }: { title: string; author: string }) {
  const idx =
    Array.from(title).reduce((sum, c) => sum + c.charCodeAt(0), 0) % fallbackTints.length;
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between p-3 bg-gradient-to-br ${fallbackTints[idx]} rounded-lg border-l-4 border-foreground/10`}
    >
      <BookOpen className="h-4 w-4 text-foreground/35" />
      <div>
        <p className="font-display text-sm font-semibold text-foreground/85 leading-snug line-clamp-4">
          {title}
        </p>
        <p className="text-[10px] text-foreground/55 mt-1 line-clamp-1">{author}</p>
      </div>
    </div>
  );
}

export function BookCover({
  title,
  author,
  coverUrl,
  onResolved,
}: {
  title: string;
  author: string;
  coverUrl: string;
  onResolved?: (url: string) => void;
}) {
  const [resolvedCover, setResolvedCover] = useState<string>('');
  // 'loading' while we resolve a cover, 'ready' once we have one, 'failed' if none.
  const [status, setStatus] = useState<'loading' | 'ready' | 'failed'>('loading');
  const [imgLoaded, setImgLoaded] = useState(false);
  const onResolvedRef = useRef(onResolved);
  onResolvedRef.current = onResolved;

  useEffect(() => {
    setImgLoaded(false);
    const isPlaceholder =
      coverUrl.includes('images.unsplash.com') || !coverUrl?.trim();

    if (!isPlaceholder) {
      setResolvedCover(coverUrl);
      setStatus('ready');
      onResolvedRef.current?.(coverUrl);
      return;
    }

    // Check cache first
    const cacheKey = `${title}::${author}`;
    const cached = coverCache.get(cacheKey);
    if (cached) {
      setResolvedCover(cached);
      setStatus('ready');
      onResolvedRef.current?.(cached);
      return;
    }

    const controller = new AbortController();
    // Don't let a slow/blocked request hang forever — give up after 7s.
    const timeout = setTimeout(() => controller.abort(), 7000);

    async function fetchCover() {
      try {
        // Use Open Library — a reliable, openly accessible cover source.
        // A general query (title + author) matches more reliably than fielded search.
        const q = `${title} ${author}`.trim();
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(
            q
          )}&limit=3&fields=cover_i,isbn`,
          { signal: controller.signal }
        );

        const data = await res.json();
        const docs: any[] = data?.docs || [];
        // Pick the first result that actually has a cover.
        const withCover = docs.find(d => d?.cover_i) || docs.find(d => d?.isbn?.[0]);
        const coverId = withCover?.cover_i;
        const isbn = withCover?.isbn?.[0];

        const image = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
          : isbn
          ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`
          : '';

        if (image) {
          coverCache.set(cacheKey, image);
          setResolvedCover(image);
          setStatus('ready');
          onResolvedRef.current?.(image);
        } else {
          setStatus('failed');
          onResolvedRef.current?.(coverUrl);
        }
      } catch {
        // Network error, blocked request, or timeout — show the text fallback.
        setStatus('failed');
        onResolvedRef.current?.(coverUrl);
      }
    }

    fetchCover();

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [title, author, coverUrl]);

  if (status === 'failed') {
    return <CoverFallback title={title} author={author} />;
  }

  if (status === 'loading') {
    return <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />;
  }

  return (
    <>
      {!imgLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />
      )}
      <img
        src={resolvedCover}
        alt={title}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImgLoaded(true)}
        onError={() => setStatus('failed')}
      />
    </>
  );
}

export function BookCard({
  title,
  author,
  coverUrl,
  reason,
  rating,
  isFavorite,
  onFavoriteToggle,
  onClick,
  variant = 'default',
  progress,
  moodQuote,
  showRating = false,
}: BookCardProps) {
  const [resolvedCoverUrl, setResolvedCoverUrl] = useState(coverUrl);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
      onClick={() => onClick?.(resolvedCoverUrl)}
    >
      <div className="glass-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[2/3] overflow-hidden rounded-t-2xl">
          <BookCover
            title={title}
            author={author}
            coverUrl={coverUrl}
            onResolved={setResolvedCoverUrl}
          />

          {onFavoriteToggle && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle();
              }}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-background/70 backdrop-blur-sm transition-colors hover:bg-background z-20"
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isFavorite
                    ? 'fill-accent text-accent-foreground'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
          )}

          {progress !== undefined && progress > 0 && progress < 100 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/50 z-20">
              <div
                className="h-full bg-primary/70 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        <div className="p-3.5">
          <h3 className="font-display text-sm font-semibold text-foreground line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{author}</p>

          {reason && (
            <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 italic">
              "{reason}"
            </p>
          )}

          {showRating && rating !== undefined && rating > 0 && (
            <div className="flex items-center gap-0.5 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating)
                      ? 'fill-primary/70 text-primary/70'
                      : 'text-border'
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                {rating}
              </span>
            </div>
          )}

          {moodQuote && (
            <div className="flex items-start gap-1 mt-2 text-accent-foreground/80">
              <Quote className="h-3 w-3 mt-0.5 shrink-0" />
              <p className="text-[10px] italic line-clamp-2">{moodQuote}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function TrendingBookCard({
  book,
  onClick,
}: {
  book: TrendingBook;
  onClick?: (resolvedCoverUrl: string) => void;
}) {
  return (
    <BookCard
      title={book.title}
      author={book.author}
      coverUrl={book.coverUrl}
      reason={book.reason}
      rating={book.goodreadsRating}
      showRating={true}
      variant="trending"
      onClick={onClick}
    />
  );
}
