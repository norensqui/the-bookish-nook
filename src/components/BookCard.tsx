import { useEffect, useState, useCallback, useRef } from 'react';
import { Star, Heart, Quote } from 'lucide-react';
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
  const [resolvedCover, setResolvedCover] = useState<string>(coverUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const onResolvedRef = useRef(onResolved);
  onResolvedRef.current = onResolved;

  useEffect(() => {
    const isPlaceholder =
      coverUrl.includes('images.unsplash.com') || !coverUrl?.trim();

    if (!isPlaceholder) {
      setResolvedCover(coverUrl);
      onResolvedRef.current?.(coverUrl);
      return;
    }

    // Check cache first
    const cacheKey = `${title}::${author}`;
    const cached = coverCache.get(cacheKey);
    if (cached) {
      setResolvedCover(cached);
      onResolvedRef.current?.(cached);
      return;
    }

    const controller = new AbortController();

    async function fetchCover() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
            title
          )}+inauthor:${encodeURIComponent(author)}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        const item = data?.items?.[0];
        const image =
          item?.volumeInfo?.imageLinks?.thumbnail ||
          item?.volumeInfo?.imageLinks?.smallThumbnail;

        if (image) {
          const secureImage = image.replace('http://', 'https://');
          coverCache.set(cacheKey, secureImage);
          setResolvedCover(secureImage);
          onResolvedRef.current?.(secureImage);
        } else {
          onResolvedRef.current?.(coverUrl);
        }
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Failed to fetch cover:', error);
        }
        onResolvedRef.current?.(coverUrl);
      }
    }

    fetchCover();

    return () => controller.abort();
  }, [title, author, coverUrl]);

  if (!resolvedCover && !hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted/60 rounded-lg">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />
      )}
      <img
        src={resolvedCover}
        alt={title}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
      {hasError && !resolvedCover && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/60 rounded-lg">
          <div className="text-center p-2">
            <p className="text-xs font-display font-semibold text-muted-foreground line-clamp-2">{title}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{author}</p>
          </div>
        </div>
      )}
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
