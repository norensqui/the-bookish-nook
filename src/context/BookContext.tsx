import React, { createContext, useContext, useState, ReactNode } from 'react';
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

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>(sampleBooks);
  const [readingLogs, setReadingLogs] = useState<ReadingLog[]>(sampleReadingLogs);

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
