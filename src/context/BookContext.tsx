import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Book, ReadingLog, sampleBooks, sampleReadingLogs } from '@/data/seedData';

interface BookContextType {
  books: Book[];
  readingLogs: ReadingLog[];
  addBook: (book: Omit<Book, 'id'>) => void;
  updateBook: (id: string, updates: Partial<Book>) => void;
  deleteBook: (id: string) => void;
  moveBook: (id: string, status: Book['status']) => void;
  toggleFavorite: (id: string) => void;
  addReadingLog: (log: Omit<ReadingLog, 'id'>) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

const BOOKS_KEY = 'bookish_books';
const LOGS_KEY = 'bookish_reading_logs';

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T) : fallback;
  } catch {
    return fallback;
  }
}

export const BookProvider = ({ children }: { children: ReactNode }) => {
  // Seed the library on first run, then read from localStorage on every load.
  const [books, setBooks] = useState<Book[]>(() => loadFromStorage(BOOKS_KEY, sampleBooks));
  const [readingLogs, setReadingLogs] = useState<ReadingLog[]>(() =>
    loadFromStorage(LOGS_KEY, sampleReadingLogs)
  );

  // Persist whenever data changes so nothing is lost on refresh.
  useEffect(() => {
    try {
      localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
    } catch {
      /* storage full or unavailable — ignore */
    }
  }, [books]);

  useEffect(() => {
    try {
      localStorage.setItem(LOGS_KEY, JSON.stringify(readingLogs));
    } catch {
      /* storage full or unavailable — ignore */
    }
  }, [readingLogs]);

  const addBook = (book: Omit<Book, 'id'>) => {
    setBooks(prev => [...prev, { ...book, id: Date.now().toString() }]);
  };

  const updateBook = (id: string, updates: Partial<Book>) => {
    setBooks(prev => prev.map(b => b.id === id ? { ...b, ...updates } : b));
  };

  const deleteBook = (id: string) => {
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  const moveBook = (id: string, status: Book['status']) => {
    setBooks(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const toggleFavorite = (id: string) => {
    setBooks(prev => prev.map(b => b.id === id ? { ...b, isFavorite: !b.isFavorite } : b));
  };

  const addReadingLog = (log: Omit<ReadingLog, 'id'>) => {
    setReadingLogs(prev => [...prev, { ...log, id: Date.now().toString() }]);
  };

  return (
    <BookContext.Provider value={{ books, readingLogs, addBook, updateBook, deleteBook, moveBook, toggleFavorite, addReadingLog }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const ctx = useContext(BookContext);
  if (!ctx) throw new Error('useBooks must be used within BookProvider');
  return ctx;
};
