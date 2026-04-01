import { useEffect, useState } from 'react';
import { Star, Heart, Quote } from 'lucide-react';
import { TrendingBook } from '@/data/seedData';
import { motion } from 'framer-motion';

interface BookCardProps {
  title: string;
  author: string;
  coverUrl: string;
  reason?: string;
  rating?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onClick?: () => void;
  variant?: 'default' | 'trending' | 'compact';
  progress?: number;
  moodQuote?: string;
  showRating?: boolean;
}

export function BookCover({
  title,
  author,
  coverUrl,
}: {
  title: string;
  author: string;
  coverUrl: string;
}) {
  const [resolvedCover, setResolvedCover] = useState<string>(coverUrl);

  useEffect(() => {
    const isPlaceholder =
      coverUrl.includes('images.unsplash.com') || !coverUrl?.trim();

    if (!isPlaceholder) {
      setResolvedCover(coverUrl);
      return;
    }

    const controller = new AbortController();

    async function fetchCover() {
      try {
        const query = encodeURIComponent(`${title} ${author}`);
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
          setResolvedCover(image.replace('http://', 'https://'));
        }
      } catch (error) {
        console.error('Failed to fetch cover:', error);
      }
    }

    fetchCover();

    return () => controller.abort();
  }, [title, author, coverUrl]);

  return (
    <img
      src={resolvedCover}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="glass-card overflow-hidden">
        <div className="relative aspect-[2/3] overflow-hidden rounded-t-2xl">
          <BookCover title={title} author={author} coverUrl={coverUrl} />

          {onFavoriteToggle && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle();
              }}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-background/70 backdrop-blur-sm transition-colors hover:bg-background"
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
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/50">
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
                Goodreads {rating}
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
  onClick?: () => void;
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
