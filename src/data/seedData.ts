export interface Book {
  id: string;
  title: string;
  author: string;
  authorBio: string;
  description: string;
  coverUrl: string;
  rating: number;
  notes: string;
  startDate: string;
  finishDate: string;
  status: 'read' | 'reading' | 'wishlist';
  totalPages: number;
  currentPage: number;
  isFavorite: boolean;
  genre?: string;
  mood?: string;
  moodQuote?: string;
}

export interface TrendingBook {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  reason: string;
  platform: string;
  genre?: string;
  goodreadsRating?: number;
  review?: string;
}

export interface ReadingLog {
  id: string;
  bookId: string;
  date: string;
  pagesRead: number;
  hoursRead: number;
  notes: string;
}

export interface ExploreArticle {
  id: string;
  title: string;
  source: string;
  category: string;
  url: string;
  excerpt: string;
  imageUrl: string;
}

export interface MovieAdaptation {
  id: string;
  bookTitle: string;
  movieTitle: string;
  author: string;
  genre: string;
  mood: string;
  releaseYear: number;
  description: string;
  bookCoverUrl: string;
  moviePosterUrl: string;
  popularity: number;
  recommended?: boolean;
  director?: string;
  cast?: string[];
  movieRating?: number;
  movieReview?: string;
}

export interface CreatorPick {
  id: string;
  creator: string;
  creatorAvatar: string;
  platform: string;
  profileUrl: string;
  books: { title: string; author: string; coverUrl: string; reason: string }[];
}

export const genres = [
  'All', 'Romance', 'Fantasy', 'Thriller', 'Mystery', 'Literary Fiction',
  'Self-Help', 'Classics', 'Short Reads', 'Emotional Reads', 'Inspirational',
  'Young Adult', 'Non-Fiction', 'Science Fiction', 'Japanese Literature',
  'Psychological Fiction', 'Philosophy', 'Poetry', 'Horror', 'Memoir',
  'Historical Fiction', 'Dystopian', 'Custom',
];

export const moodVibes = [
  { id: 'cozy', label: '☕ Cozy & Comforting', description: 'Warm reads for rainy days' },
  { id: 'adventurous', label: '🗺️ Adventurous & Epic', description: 'Escape into grand worlds' },
  { id: 'romantic', label: '💕 Romantic & Tender', description: 'Love stories that stay with you' },
  { id: 'reflective', label: '🌙 Reflective & Deep', description: 'Books that make you think' },
  { id: 'thrilling', label: '🔥 Thrilling & Intense', description: 'Page-turners you can\'t put down' },
  { id: 'healing', label: '🌿 Healing & Gentle', description: 'Soft reads for the soul' },
  { id: 'dark', label: '🖤 Dark & Mysterious', description: 'Atmospheric and haunting' },
  { id: 'inspiring', label: '✨ Inspiring & Uplifting', description: 'Books that change your perspective' },
];

// Google Books API query mappings for mood-based searches
export const moodSearchQueries: Record<string, string> = {
  cozy: 'subject:fiction+cozy+heartwarming',
  adventurous: 'subject:adventure+epic+fantasy',
  romantic: 'subject:romance+love+contemporary',
  reflective: 'subject:literary+fiction+philosophical',
  thrilling: 'subject:thriller+suspense+mystery',
  healing: 'subject:fiction+healing+gentle',
  dark: 'subject:gothic+dark+mystery',
  inspiring: 'subject:inspirational+memoir+self-help',
};

export const moodRecommendations: Record<string, TrendingBook[]> = {
  cozy: [
    { id: 'mv1', title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverUrl: '', reason: 'A magical hug of a book', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.46 },
    { id: 'mv2', title: 'Anxious People', author: 'Fredrik Backman', coverUrl: '', reason: 'Warm, funny, and deeply human', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.15 },
    { id: 'mv3', title: 'A Man Called Ove', author: 'Fredrik Backman', coverUrl: '', reason: 'Grumpy hero, warm heart', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.38 },
    { id: 'mv3b', title: 'The Storied Life of A.J. Fikry', author: 'Gabrielle Zevin', coverUrl: '', reason: 'A love letter to books and bookstores', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 3.97 },
    { id: 'mv3c', title: 'Howl\'s Moving Castle', author: 'Diana Wynne Jones', coverUrl: '', reason: 'Whimsical, cozy fantasy perfection', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.28 },
    { id: 'mv3d', title: 'The Long Way to a Small, Angry Planet', author: 'Becky Chambers', coverUrl: '', reason: 'Found family in space', platform: 'mood', genre: 'Science Fiction', goodreadsRating: 4.17 },
    { id: 'mv3e', title: 'Legends & Lattes', author: 'Travis Baldree', coverUrl: '', reason: 'Cozy fantasy about opening a coffee shop', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.08 },
    { id: 'mv3f', title: 'The Bookish Life of Nina Hill', author: 'Abbi Waxman', coverUrl: '', reason: 'Perfect for bookworm introverts', platform: 'mood', genre: 'Romance', goodreadsRating: 3.71 },
    { id: 'mv3g', title: 'Under the Whispering Door', author: 'TJ Klune', coverUrl: '', reason: 'Afterlife has never felt so warm', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.09 },
    { id: 'mv3h', title: 'The Guernsey Literary and Potato Peel Pie Society', author: 'Mary Ann Shaffer', coverUrl: '', reason: 'Charming epistolary warmth', platform: 'mood', genre: 'Historical Fiction', goodreadsRating: 4.17 },
  ],
  adventurous: [
    { id: 'mv4', title: 'The Name of the Wind', author: 'Patrick Rothfuss', coverUrl: '', reason: 'Epic fantasy at its finest', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.55 },
    { id: 'mv5', title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: '', reason: 'A thrilling space adventure', platform: 'mood', genre: 'Science Fiction', goodreadsRating: 4.52 },
    { id: 'mv6', title: 'Piranesi', author: 'Susanna Clarke', coverUrl: '', reason: 'A surreal, wondrous journey', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.23 },
    { id: 'mv6b', title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: '', reason: 'The original there-and-back-again adventure', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.28 },
    { id: 'mv6c', title: 'Six of Crows', author: 'Leigh Bardugo', coverUrl: '', reason: 'An impossible heist in a magical world', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.47 },
    { id: 'mv6d', title: 'Jurassic Park', author: 'Michael Crichton', coverUrl: '', reason: 'Dinosaurs + science = pure adrenaline', platform: 'mood', genre: 'Science Fiction', goodreadsRating: 4.06 },
    { id: 'mv6e', title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', coverUrl: '', reason: 'The ultimate revenge epic', platform: 'mood', genre: 'Classics', goodreadsRating: 4.27 },
    { id: 'mv6f', title: 'Red Rising', author: 'Pierce Brown', coverUrl: '', reason: 'Brutal, fast-paced sci-fi revolution', platform: 'mood', genre: 'Science Fiction', goodreadsRating: 4.26 },
    { id: 'mv6g', title: 'The Lies of Locke Lamora', author: 'Scott Lynch', coverUrl: '', reason: 'Ocean\'s Eleven meets fantasy', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.30 },
    { id: 'mv6h', title: 'Children of Time', author: 'Adrian Tchaikovsky', coverUrl: '', reason: 'Mind-expanding space epic', platform: 'mood', genre: 'Science Fiction', goodreadsRating: 4.29 },
  ],
  romantic: [
    { id: 'mv7', title: 'Beach Read', author: 'Emily Henry', coverUrl: '', reason: 'Witty, warm, and swoony', platform: 'mood', genre: 'Romance', goodreadsRating: 4.02 },
    { id: 'mv8', title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', coverUrl: '', reason: 'Glamorous love and heartbreak', platform: 'mood', genre: 'Romance', goodreadsRating: 4.46 },
    { id: 'mv9', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: '', reason: 'The timeless love story', platform: 'mood', genre: 'Classics', goodreadsRating: 4.28 },
    { id: 'mv9b', title: 'People We Meet on Vacation', author: 'Emily Henry', coverUrl: '', reason: 'Friends-to-lovers done perfectly', platform: 'mood', genre: 'Romance', goodreadsRating: 4.06 },
    { id: 'mv9c', title: 'The Notebook', author: 'Nicholas Sparks', coverUrl: '', reason: 'A love story for the ages', platform: 'mood', genre: 'Romance', goodreadsRating: 4.07 },
    { id: 'mv9d', title: 'Love in the Time of Cholera', author: 'Gabriel García Márquez', coverUrl: '', reason: 'Passionate, poetic, unforgettable', platform: 'mood', genre: 'Classics', goodreadsRating: 3.91 },
    { id: 'mv9e', title: 'The Flatshare', author: 'Beth O\'Leary', coverUrl: '', reason: 'Quirky British romcom charm', platform: 'mood', genre: 'Romance', goodreadsRating: 3.95 },
    { id: 'mv9f', title: 'Red, White & Royal Blue', author: 'Casey McQuiston', coverUrl: '', reason: 'Political romance that sparks joy', platform: 'mood', genre: 'Romance', goodreadsRating: 4.11 },
    { id: 'mv9g', title: 'Call Me by Your Name', author: 'André Aciman', coverUrl: '', reason: 'Sun-drenched and achingly tender', platform: 'mood', genre: 'Romance', goodreadsRating: 3.98 },
    { id: 'mv9h', title: 'The Time Traveler\'s Wife', author: 'Audrey Niffenegger', coverUrl: '', reason: 'Love across time — beautiful and tragic', platform: 'mood', genre: 'Romance', goodreadsRating: 3.97 },
  ],
  reflective: [
    { id: 'mv10', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverUrl: '', reason: 'Tender and thought-provoking', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 3.83 },
    { id: 'mv11', title: 'The Midnight Library', author: 'Matt Haig', coverUrl: '', reason: 'What if you could live every life?', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.00 },
    { id: 'mv12', title: 'When Breath Becomes Air', author: 'Paul Kalanithi', coverUrl: '', reason: 'A meditation on life and death', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.36 },
    { id: 'mv12b', title: 'Stoner', author: 'John Williams', coverUrl: '', reason: 'A quiet life, deeply examined', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.19 },
    { id: 'mv12c', title: 'The Remains of the Day', author: 'Kazuo Ishiguro', coverUrl: '', reason: 'Restrained emotion at its most powerful', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.14 },
    { id: 'mv12d', title: 'Siddhartha', author: 'Hermann Hesse', coverUrl: '', reason: 'A spiritual journey toward meaning', platform: 'mood', genre: 'Philosophy', goodreadsRating: 4.06 },
    { id: 'mv12e', title: 'Norwegian Wood', author: 'Haruki Murakami', coverUrl: '', reason: 'Nostalgic and beautifully melancholic', platform: 'mood', genre: 'Japanese Literature', goodreadsRating: 4.02 },
    { id: 'mv12f', title: 'A Gentleman in Moscow', author: 'Amor Towles', coverUrl: '', reason: 'An entire world within four walls', platform: 'mood', genre: 'Historical Fiction', goodreadsRating: 4.36 },
    { id: 'mv12g', title: 'Circe', author: 'Madeline Miller', coverUrl: '', reason: 'Mythology reimagined with soul', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.23 },
    { id: 'mv12h', title: 'The Unbearable Lightness of Being', author: 'Milan Kundera', coverUrl: '', reason: 'Philosophy woven into love and loss', platform: 'mood', genre: 'Philosophy', goodreadsRating: 4.14 },
  ],
  thrilling: [
    { id: 'mv13', title: 'The Silent Patient', author: 'Alex Michaelides', coverUrl: '', reason: 'A twist you won\'t see coming', platform: 'mood', genre: 'Thriller', goodreadsRating: 4.08 },
    { id: 'mv14', title: 'Gone Girl', author: 'Gillian Flynn', coverUrl: '', reason: 'Dark, gripping, unforgettable', platform: 'mood', genre: 'Thriller', goodreadsRating: 4.12 },
    { id: 'mv15', title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', coverUrl: '', reason: 'Intense and absorbing', platform: 'mood', genre: 'Mystery', goodreadsRating: 4.14 },
    { id: 'mv15b', title: 'The Da Vinci Code', author: 'Dan Brown', coverUrl: '', reason: 'A relentless puzzle thriller', platform: 'mood', genre: 'Thriller', goodreadsRating: 3.87 },
    { id: 'mv15c', title: 'Dark Places', author: 'Gillian Flynn', coverUrl: '', reason: 'Twisted and unflinching', platform: 'mood', genre: 'Thriller', goodreadsRating: 3.97 },
    { id: 'mv15d', title: 'The Woman in the Window', author: 'A.J. Finn', coverUrl: '', reason: 'Claustrophobic and gripping', platform: 'mood', genre: 'Thriller', goodreadsRating: 3.83 },
    { id: 'mv15e', title: 'Behind Closed Doors', author: 'B.A. Paris', coverUrl: '', reason: 'A marriage hiding dark secrets', platform: 'mood', genre: 'Thriller', goodreadsRating: 3.93 },
    { id: 'mv15f', title: 'The Maid', author: 'Nita Prose', coverUrl: '', reason: 'Charming mystery with a unique voice', platform: 'mood', genre: 'Mystery', goodreadsRating: 3.77 },
    { id: 'mv15g', title: 'Verity', author: 'Colleen Hoover', coverUrl: '', reason: 'Dark, shocking, impossible to forget', platform: 'mood', genre: 'Thriller', goodreadsRating: 4.19 },
    { id: 'mv15h', title: 'In the Woods', author: 'Tana French', coverUrl: '', reason: 'Atmospheric and deeply unsettling', platform: 'mood', genre: 'Mystery', goodreadsRating: 3.81 },
  ],
  healing: [
    { id: 'mv16', title: 'The Boy, the Mole, the Fox and the Horse', author: 'Charlie Mackesy', coverUrl: '', reason: 'Pure comfort in book form', platform: 'mood', genre: 'Inspirational', goodreadsRating: 4.41 },
    { id: 'mv17', title: 'Eleanor Oliphant Is Completely Fine', author: 'Gail Honeyman', coverUrl: '', reason: 'Quirky, kind, and healing', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.27 },
    { id: 'mv18', title: 'Maybe You Should Talk to Someone', author: 'Lori Gottlieb', coverUrl: '', reason: 'Honest and gently transformative', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.33 },
    { id: 'mv18b', title: 'Tuesdays with Morrie', author: 'Mitch Albom', coverUrl: '', reason: 'Life lessons that stay with you', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.12 },
    { id: 'mv18c', title: 'The Alchemist', author: 'Paulo Coelho', coverUrl: '', reason: 'Follow your personal legend', platform: 'mood', genre: 'Inspirational', goodreadsRating: 3.89 },
    { id: 'mv18d', title: 'Wild', author: 'Cheryl Strayed', coverUrl: '', reason: 'Healing through journey and nature', platform: 'mood', genre: 'Memoir', goodreadsRating: 3.93 },
    { id: 'mv18e', title: 'A New Earth', author: 'Eckhart Tolle', coverUrl: '', reason: 'Awakening to a new perspective', platform: 'mood', genre: 'Self-Help', goodreadsRating: 4.12 },
    { id: 'mv18f', title: 'Tiny Beautiful Things', author: 'Cheryl Strayed', coverUrl: '', reason: 'Advice that heals and holds you', platform: 'mood', genre: 'Non-Fiction', goodreadsRating: 4.30 },
    { id: 'mv18g', title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverUrl: '', reason: 'Gentle magic for weary hearts', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.46 },
    { id: 'mv18h', title: 'Anne of Green Gables', author: 'L.M. Montgomery', coverUrl: '', reason: 'Timeless comfort and kindred spirits', platform: 'mood', genre: 'Classics', goodreadsRating: 4.28 },
  ],
  dark: [
    { id: 'mv19', title: 'The Secret History', author: 'Donna Tartt', coverUrl: '', reason: 'Dark academia at its peak', platform: 'mood', genre: 'Mystery', goodreadsRating: 4.17 },
    { id: 'mv20', title: 'Mexican Gothic', author: 'Silvia Moreno-Garcia', coverUrl: '', reason: 'Gothic, atmospheric, chilling', platform: 'mood', genre: 'Horror', goodreadsRating: 3.66 },
    { id: 'mv21', title: 'Yellowface', author: 'R.F. Kuang', coverUrl: '', reason: 'A sharp, unsettling satire', platform: 'mood', genre: 'Thriller', goodreadsRating: 3.88 },
    { id: 'mv21b', title: 'We Have Always Lived in the Castle', author: 'Shirley Jackson', coverUrl: '', reason: 'Eerie and unforgettable', platform: 'mood', genre: 'Horror', goodreadsRating: 4.06 },
    { id: 'mv21c', title: 'Rebecca', author: 'Daphne du Maurier', coverUrl: '', reason: 'Gothic suspense at its finest', platform: 'mood', genre: 'Mystery', goodreadsRating: 4.23 },
    { id: 'mv21d', title: 'Sharp Objects', author: 'Gillian Flynn', coverUrl: '', reason: 'Disturbing and brilliant', platform: 'mood', genre: 'Thriller', goodreadsRating: 3.95 },
    { id: 'mv21e', title: 'The Haunting of Hill House', author: 'Shirley Jackson', coverUrl: '', reason: 'Psychological horror perfection', platform: 'mood', genre: 'Horror', goodreadsRating: 3.88 },
    { id: 'mv21f', title: 'Ninth House', author: 'Leigh Bardugo', coverUrl: '', reason: 'Dark magic at Yale', platform: 'mood', genre: 'Fantasy', goodreadsRating: 3.79 },
    { id: 'mv21g', title: 'Bunny', author: 'Mona Awad', coverUrl: '', reason: 'Delightfully unhinged and surreal', platform: 'mood', genre: 'Horror', goodreadsRating: 3.55 },
    { id: 'mv21h', title: 'House of Leaves', author: 'Mark Z. Danielewski', coverUrl: '', reason: 'A labyrinth of fear and obsession', platform: 'mood', genre: 'Horror', goodreadsRating: 4.12 },
  ],
  inspiring: [
    { id: 'mv22', title: 'Atomic Habits', author: 'James Clear', coverUrl: '', reason: 'Small changes, big results', platform: 'mood', genre: 'Self-Help', goodreadsRating: 4.37 },
    { id: 'mv23', title: 'Educated', author: 'Tara Westover', coverUrl: '', reason: 'A remarkable memoir of resilience', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.47 },
    { id: 'mv24', title: 'Man\'s Search for Meaning', author: 'Viktor E. Frankl', coverUrl: '', reason: 'Finding purpose in suffering', platform: 'mood', genre: 'Philosophy', goodreadsRating: 4.37 },
    { id: 'mv24b', title: 'Becoming', author: 'Michelle Obama', coverUrl: '', reason: 'Grace, strength, and authenticity', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.27 },
    { id: 'mv24c', title: 'The Power of Now', author: 'Eckhart Tolle', coverUrl: '', reason: 'Present-moment awareness', platform: 'mood', genre: 'Self-Help', goodreadsRating: 3.98 },
    { id: 'mv24d', title: 'Shoe Dog', author: 'Phil Knight', coverUrl: '', reason: 'The gritty story behind Nike', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.47 },
    { id: 'mv24e', title: 'Born a Crime', author: 'Trevor Noah', coverUrl: '', reason: 'Hilarious, moving, and eye-opening', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.42 },
    { id: 'mv24f', title: 'Meditations', author: 'Marcus Aurelius', coverUrl: '', reason: 'Ancient wisdom, modern relevance', platform: 'mood', genre: 'Philosophy', goodreadsRating: 4.25 },
    { id: 'mv24g', title: 'Outliers', author: 'Malcolm Gladwell', coverUrl: '', reason: 'Rethink what makes people successful', platform: 'mood', genre: 'Non-Fiction', goodreadsRating: 4.18 },
    { id: 'mv24h', title: 'Daring Greatly', author: 'Brené Brown', coverUrl: '', reason: 'Vulnerability as strength', platform: 'mood', genre: 'Self-Help', goodreadsRating: 4.17 },
  ],
};

export const weeklyRecommendations: TrendingBook[] = [
  { id: 'wr1', title: 'Intermezzo', author: 'Sally Rooney', coverUrl: '', reason: 'Rooney\'s most mature work yet', platform: 'weekly', genre: 'Literary Fiction', goodreadsRating: 4.08 },
  { id: 'wr2', title: 'The Women', author: 'Kristin Hannah', coverUrl: '', reason: 'Epic and deeply moving', platform: 'weekly', genre: 'Historical Fiction', goodreadsRating: 4.61 },
  { id: 'wr3', title: 'James', author: 'Percival Everett', coverUrl: '', reason: 'A stunning reimagining', platform: 'weekly', genre: 'Literary Fiction', goodreadsRating: 4.35 },
  { id: 'wr4', title: 'Onyx Storm', author: 'Rebecca Yarros', coverUrl: '', reason: 'The fantasy event of the year', platform: 'weekly', genre: 'Fantasy', goodreadsRating: 4.20 },
  { id: 'wr5', title: 'We Solve Murders', author: 'Richard Osman', coverUrl: '', reason: 'Witty and endlessly fun', platform: 'weekly', genre: 'Mystery', goodreadsRating: 4.10 },
];

export const moodQuotes: Record<string, string[]> = {
  high_romance: [
    "This is the kind of book you read when you need a warm hug.",
    "A love story that stays with you long after the last page.",
  ],
  high_fantasy: [
    "An escape into a world where anything is possible.",
    "A book that feels like stepping through a wardrobe.",
  ],
  high_emotional: [
    "When you want to cry in the best way.",
    "Soft, comforting, and deeply human.",
  ],
  high_thriller: [
    "A book that keeps you turning pages at midnight.",
    "Heart-pounding and impossible to put down.",
  ],
  high_literary: [
    "A book that feels like home.",
    "This one stays with you long after you finish.",
  ],
  high_selfhelp: [
    "A short read that shifts your perspective.",
    "Inspirational without trying too hard.",
  ],
  mid: [
    "Perfect for when you're craving a quiet emotional read.",
    "A book for rainy days and tea.",
    "For when you're feeling lost, angry, or confused.",
  ],
  low: [
    "Not every book is for everyone, and that's okay.",
    "Sometimes a story just doesn't click — and that's perfectly fine.",
  ],
};

export function getMoodQuote(rating: number, genre?: string, mood?: string): string {
  if (rating >= 4) {
    const key = genre ? `high_${genre.toLowerCase().replace(/[^a-z]/g, '')}` : 'high_literary';
    const quotes = moodQuotes[key] || moodQuotes['high_literary'];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  if (rating >= 2.5) {
    return moodQuotes.mid[Math.floor(Math.random() * moodQuotes.mid.length)];
  }
  return moodQuotes.low[Math.floor(Math.random() * moodQuotes.low.length)];
}

export const sampleBooks: Book[] = [
  {
    id: '1', title: 'The Midnight Library', author: 'Matt Haig',
    authorBio: 'Matt Haig is an English novelist and journalist known for combining fantasy elements with poignant life lessons.',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
    coverUrl: '',
    rating: 4.5, notes: 'Beautiful exploration of life choices. Made me appreciate my current path.',
    startDate: '2024-01-15', finishDate: '2024-02-02', status: 'read',
    totalPages: 304, currentPage: 304, isFavorite: true,
    genre: 'Literary Fiction', mood: 'reflective',
    moodQuote: 'This one stays with you long after you finish.',
  },
  {
    id: '2', title: 'Atomic Habits', author: 'James Clear',
    authorBio: 'James Clear is an author and speaker focused on habits, decision making, and continuous improvement.',
    description: 'An easy and proven way to build good habits and break bad ones.',
    coverUrl: '',
    rating: 5, notes: 'Life-changing framework. Applied the 1% improvement principle immediately.',
    startDate: '2024-02-10', finishDate: '2024-02-28', status: 'read',
    totalPages: 320, currentPage: 320, isFavorite: true,
    genre: 'Self-Help', mood: 'motivating',
    moodQuote: 'A short read that shifts your perspective.',
  },
  {
    id: '3', title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin',
    authorBio: 'Gabrielle Zevin is a New York Times bestselling author known for her imaginative storytelling.',
    description: 'A dazzling novel about the creative partnership between two friends who become video game designers.',
    coverUrl: '',
    rating: 4, notes: 'Unique premise. Love how it explores creativity and friendship.',
    startDate: '2024-03-01', finishDate: '2024-03-20', status: 'read',
    totalPages: 416, currentPage: 416, isFavorite: false,
    genre: 'Literary Fiction', mood: 'bittersweet',
  },
  {
    id: '4', title: 'Lessons in Chemistry', author: 'Bonnie Garmus',
    authorBio: 'Bonnie Garmus is a copywriter and creative director who has worked in the tech, medical, and education sectors.',
    description: 'A woman scientist in the 1960s becomes an unlikely TV cooking show star.',
    coverUrl: '',
    rating: 4.5, notes: '', startDate: '2024-04-01', finishDate: '', status: 'reading',
    totalPages: 400, currentPage: 187, isFavorite: false,
    genre: 'Literary Fiction', mood: 'empowering',
  },
  {
    id: '5', title: 'The House in the Cerulean Sea', author: 'TJ Klune',
    authorBio: 'TJ Klune is an acclaimed fantasy author known for heartwarming and inclusive storytelling.',
    description: 'A magical story about finding family in the most unexpected places.',
    coverUrl: '',
    rating: 0, notes: '', startDate: '2024-04-15', finishDate: '', status: 'reading',
    totalPages: 398, currentPage: 95, isFavorite: false,
    genre: 'Fantasy', mood: 'cozy',
  },
  {
    id: '6', title: 'Fourth Wing', author: 'Rebecca Yarros',
    authorBio: 'Rebecca Yarros is a bestselling author of over twenty novels, including the Flight & Glory series.',
    description: 'A young woman enters a war college for dragon riders in this romantasy epic.',
    coverUrl: '',
    rating: 0, notes: 'Everyone is recommending this!', startDate: '', finishDate: '', status: 'wishlist',
    totalPages: 528, currentPage: 0, isFavorite: false,
    genre: 'Fantasy', mood: 'adventurous',
  },
  {
    id: '7', title: 'Yellowface', author: 'R.F. Kuang',
    authorBio: 'R.F. Kuang is an award-winning author known for genre-bending speculative fiction.',
    description: 'A dark satire about cultural appropriation and the publishing industry.',
    coverUrl: '',
    rating: 0, notes: 'Heard great things on BookTok.', startDate: '', finishDate: '', status: 'wishlist',
    totalPages: 336, currentPage: 0, isFavorite: false,
    genre: 'Thriller', mood: 'dark',
  },
  {
    id: '8', title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid',
    authorBio: 'Taylor Jenkins Reid is an American author known for historical fiction with vivid characters.',
    description: 'An aging Hollywood starlet finally tells the truth about her glamorous and scandalous life.',
    coverUrl: '',
    rating: 0, notes: '', startDate: '', finishDate: '', status: 'wishlist',
    totalPages: 389, currentPage: 0, isFavorite: false,
    genre: 'Romance', mood: 'glamorous',
  },
];

export const trendingBooks: Record<string, TrendingBook[]> = {
  tiktok: [
    { id: 't1', title: 'A Court of Thorns and Roses', author: 'Sarah J. Maas', coverUrl: '', reason: 'BookTok sensation with over 2M videos', platform: 'tiktok', genre: 'Fantasy', goodreadsRating: 4.19, review: 'A lush fantasy romance with high stakes, addictive tension, and a world readers love to disappear into.' },
    { id: 't2', title: 'It Ends with Us', author: 'Colleen Hoover', coverUrl: '', reason: 'Emotional rollercoaster everyone is crying over', platform: 'tiktok', genre: 'Romance', goodreadsRating: 4.14, review: 'An emotional and highly discussed contemporary novel that sparks strong reactions.' },
    { id: 't3', title: 'The Song of Achilles', author: 'Madeline Miller', coverUrl: '', reason: 'The most devastating love story on BookTok', platform: 'tiktok', genre: 'Classics', goodreadsRating: 4.34, review: 'A lyrical, heartbreaking retelling of myth that readers often describe as unforgettable.' },
    { id: 't4', title: 'Daisy Jones & The Six', author: 'Taylor Jenkins Reid', coverUrl: '', reason: 'Rock and roll era vibes everyone loves', platform: 'tiktok', genre: 'Literary Fiction', goodreadsRating: 4.20, review: 'Fast-paced, glamorous, and immersive, with a documentary style that makes the band feel real.' },
    { id: 't5', title: 'Beach Read', author: 'Emily Henry', coverUrl: '', reason: 'The ultimate summer romance read', platform: 'tiktok', genre: 'Romance', goodreadsRating: 4.02, review: 'A witty and emotional romance that balances charm, grief, and chemistry beautifully.' },
  ],
  reddit: [
    { id: 'r1', title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: '', reason: 'r/books favorite sci-fi of the decade', platform: 'reddit', genre: 'Science Fiction', goodreadsRating: 4.52, review: 'A clever, entertaining sci-fi adventure full of problem-solving, humor, and big emotional payoff.' },
    { id: 'r2', title: 'Piranesi', author: 'Susanna Clarke', coverUrl: '', reason: 'Hauntingly beautiful world-building', platform: 'reddit', genre: 'Fantasy', goodreadsRating: 4.23, review: 'Quiet, surreal, and haunting, this novel rewards patient readers with a deeply original atmosphere.' },
    { id: 'r3', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverUrl: '', reason: 'Nobel laureate\'s masterful AI story', platform: 'reddit', genre: 'Literary Fiction', goodreadsRating: 3.83, review: 'A reflective and tender novel about love, loneliness, and what it means to be human.' },
    { id: 'r4', title: 'The Invisible Life of Addie LaRue', author: 'V.E. Schwab', coverUrl: '', reason: 'Fantasy that sparked a massive discussion thread', platform: 'reddit', genre: 'Fantasy', goodreadsRating: 4.18, review: 'A romantic, melancholic fantasy with an unforgettable premise.' },
    { id: 'r5', title: 'Circe', author: 'Madeline Miller', coverUrl: '', reason: 'Feminist mythology retelling r/books adores', platform: 'reddit', genre: 'Classics', goodreadsRating: 4.23, review: 'A beautifully written myth retelling centered on power, exile, womanhood, and self-discovery.' },
  ],
  pinterest: [
    { id: 'p1', title: 'The Secret History', author: 'Donna Tartt', coverUrl: '', reason: 'Dark academia aesthetic icon', platform: 'pinterest', genre: 'Mystery', goodreadsRating: 4.17, review: 'Dark, stylish, and cerebral, this is the novel many readers associate with the dark academia mood.' },
    { id: 'p2', title: 'Normal People', author: 'Sally Rooney', coverUrl: '', reason: 'Most pinned book aesthetic of 2024', platform: 'pinterest', genre: 'Literary Fiction', goodreadsRating: 3.82, review: 'A minimal, intimate novel about miscommunication, vulnerability, and complicated love.' },
    { id: 'p3', title: 'Little Women', author: 'Louisa May Alcott', coverUrl: '', reason: 'Cottagecore reading list essential', platform: 'pinterest', genre: 'Classics', goodreadsRating: 4.14, review: 'Warm, timeless, and comforting, with beloved characters and a homey emotional core.' },
    { id: 'p4', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: '', reason: 'Art deco inspired boards everywhere', platform: 'pinterest', genre: 'Classics', goodreadsRating: 3.93, review: 'Elegant and tragic, this classic remains popular for its mood, symbolism, and iconic imagery.' },
    { id: 'p5', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: '', reason: 'Regencycore aesthetic goes viral', platform: 'pinterest', genre: 'Romance', goodreadsRating: 4.28, review: 'Sharp, romantic, and endlessly re-readable, with sparkling dialogue and timeless chemistry.' },
  ],
  twitter: [
    { id: 'x1', title: 'Demon Copperhead', author: 'Barbara Kingsolver', coverUrl: '', reason: 'Pulitzer Prize winner dominating book twitter', platform: 'twitter', genre: 'Literary Fiction', goodreadsRating: 4.41, review: 'An expansive, emotionally powerful novel praised for its voice, scope, and social depth.' },
    { id: 'x2', title: 'Trust', author: 'Hernan Diaz', coverUrl: '', reason: 'Literary fiction that sparked fierce debates', platform: 'twitter', genre: 'Literary Fiction', goodreadsRating: 3.81, review: 'Layered and intellectually rich, this novel plays with power, wealth, and narrative control.' },
    { id: 'x3', title: 'The Covenant of Water', author: 'Abraham Verghese', coverUrl: '', reason: 'Oprah pick everyone is discussing', platform: 'twitter', genre: 'Literary Fiction', goodreadsRating: 4.32, review: 'A sweeping family saga praised for its humanity, richness, and emotional resonance.' },
    { id: 'x4', title: 'Babel', author: 'R.F. Kuang', coverUrl: '', reason: 'Academic fantasy with sharp social commentary', platform: 'twitter', genre: 'Fantasy', goodreadsRating: 4.17, review: 'A bold and intelligent fantasy about language, empire, and resistance.' },
    { id: 'x5', title: 'Sea of Tranquility', author: 'Emily St. John Mandel', coverUrl: '', reason: 'Mind-bending time travel literary fiction', platform: 'twitter', genre: 'Literary Fiction', goodreadsRating: 4.03, review: 'Elegant and unsettling, this quiet sci-fi novel explores time, memory, and connection.' },
  ],
  instagram: [
    { id: 'i1', title: 'Malibu Rising', author: 'Taylor Jenkins Reid', coverUrl: '', reason: 'Most Instagrammed beach read cover', platform: 'instagram', genre: 'Romance', goodreadsRating: 4.07, review: 'A glamorous and emotional family drama with a summery setting.' },
    { id: 'i2', title: 'The Anthropocene Reviewed', author: 'John Green', coverUrl: '', reason: 'Beautiful essays perfect for bookstagram flatlays', platform: 'instagram', genre: 'Non-Fiction', goodreadsRating: 4.36, review: 'Thoughtful, warm, and witty essays that mix the personal with the universal.' },
    { id: 'i3', title: 'Hamnet', author: 'Maggie O\'Farrell', coverUrl: '', reason: 'Stunning cover dominating bookstagram', platform: 'instagram', genre: 'Literary Fiction', goodreadsRating: 4.09, review: 'A lyrical historical novel rich in atmosphere, grief, and intimate family emotion.' },
    { id: 'i4', title: 'Beautiful World, Where Are You', author: 'Sally Rooney', coverUrl: '', reason: 'Minimalist cover art everyone is posting', platform: 'instagram', genre: 'Literary Fiction', goodreadsRating: 3.67, review: 'A reflective novel about friendship, love, work, and modern uncertainty.' },
    { id: 'i5', title: 'The Paris Wife', author: 'Paula McLain', coverUrl: '', reason: 'Parisian aesthetic bookstagram favorite', platform: 'instagram', genre: 'Romance', goodreadsRating: 3.80, review: 'A stylish historical novel that blends romance, ambition, and literary history.' },
  ],
};

export const topPicks: TrendingBook[] = [
  { id: 'tp1', title: 'Intermezzo', author: 'Sally Rooney', coverUrl: '', reason: 'A masterful exploration of grief and connection', platform: 'global', genre: 'Literary Fiction', goodreadsRating: 4.08, review: 'An intimate and emotionally observant novel about grief, love, distance, and complicated human connection.' },
  { id: 'tp2', title: 'James', author: 'Percival Everett', coverUrl: '', reason: 'Reimagining a classic with stunning depth', platform: 'global', genre: 'Classics', goodreadsRating: 4.35, review: 'A brilliant reimagining that feels sharp, literary, and deeply relevant.' },
  { id: 'tp3', title: 'All Fours', author: 'Miranda July', coverUrl: '', reason: 'Bold and unapologetically original', platform: 'global', genre: 'Literary Fiction', goodreadsRating: 3.92, review: 'Strange, bold, and intimate, this is the kind of novel that starts conversations.' },
  { id: 'tp4', title: 'The Women', author: 'Kristin Hannah', coverUrl: '', reason: 'Powerful historical fiction at its finest', platform: 'global', genre: 'Historical Fiction', goodreadsRating: 4.61, review: 'A sweeping and emotional historical novel that readers praise for its intensity and heart.' },
  { id: 'tp5', title: 'Orbital', author: 'Samantha Harvey', coverUrl: '', reason: 'Booker Prize winner — hauntingly poetic', platform: 'global', genre: 'Literary Fiction', goodreadsRating: 3.87, review: 'A contemplative, poetic novel with a quiet intensity and a very distinct literary voice.' },
];

export const sampleReadingLogs: ReadingLog[] = [
  { id: 'rl1', bookId: '4', date: '2024-04-01', pagesRead: 35, hoursRead: 1.5, notes: 'Great opening chapter' },
  { id: 'rl2', bookId: '4', date: '2024-04-02', pagesRead: 28, hoursRead: 1, notes: '' },
  { id: 'rl3', bookId: '4', date: '2024-04-03', pagesRead: 42, hoursRead: 2, notes: 'Couldn\'t put it down' },
  { id: 'rl4', bookId: '5', date: '2024-04-03', pagesRead: 20, hoursRead: 0.5, notes: '' },
  { id: 'rl5', bookId: '4', date: '2024-04-04', pagesRead: 30, hoursRead: 1.5, notes: '' },
  { id: 'rl6', bookId: '5', date: '2024-04-04', pagesRead: 35, hoursRead: 1, notes: 'Love the characters' },
  { id: 'rl7', bookId: '4', date: '2024-04-05', pagesRead: 52, hoursRead: 2.5, notes: 'Plot twist!' },
];

export const exploreArticles: ExploreArticle[] = [
  { id: 'ea1', title: 'The Art of Slow Reading in a Fast World', source: 'The New Yorker', category: 'Literary Essays', url: 'https://www.newyorker.com/culture/cultural-comment/the-case-for-reading-slowly', excerpt: 'Why slowing down with a book might be the most radical act of self-care.', imageUrl: 'https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Schwartz-Slow-Reading.jpg' },
  { id: 'ea2', title: 'Sally Rooney on Writing Intermezzo', source: 'The Guardian', category: 'Author Interviews', url: 'https://www.theguardian.com/books/sally-rooney', excerpt: 'The Irish author discusses her creative process and the themes of Intermezzo.', imageUrl: 'https://i.guim.co.uk/img/media/d8b7a4c9e2c54e67b0d5f0a3c8e1b9d2a7f6c3e4/0_0_5472_3283/master/5472.jpg?width=620&quality=85&fit=max&s=placeholder' },
  { id: 'ea3', title: '25 Must-Read Books for Spring 2025', source: 'Literary Hub', category: 'Book Recommendations', url: 'https://lithub.com/most-anticipated-books/', excerpt: 'Our editors pick the most anticipated books of the season.', imageUrl: 'https://s26162.pcdn.co/wp-content/uploads/2024/12/Most-Anticipated-2025.jpg' },
  { id: 'ea4', title: 'How BookTok is Reshaping Publishing', source: 'The Atlantic', category: 'Literary News', url: 'https://www.theatlantic.com/technology/archive/2022/03/booktok-tiktok-publishing/629209/', excerpt: 'Inside the algorithm-driven revolution in book discovery and sales.', imageUrl: 'https://cdn.theatlantic.com/thumbor/placeholder/0x0:2000x1125/960x540/media/img/mt/2022/03/booktok/original.jpg' },
  { id: 'ea5', title: 'In Conversation with Percival Everett', source: 'Paris Review', category: 'Author Interviews', url: 'https://www.theparisreview.org/', excerpt: 'The National Book Award winner reflects on reimagining Huck Finn.', imageUrl: 'https://www.theparisreview.org/il/placeholder-author.jpg' },
  { id: 'ea6', title: 'The Return of the Reading Journal', source: 'Book Riot', category: 'Book Reviews', url: 'https://bookriot.com/', excerpt: 'Why analog reading trackers are having a moment in the digital age.', imageUrl: 'https://s2982.pcdn.co/wp-content/uploads/2023/01/reading-journal.jpg' },
  { id: 'ea7', title: 'Women Writing War: A New Wave', source: 'NYRB', category: 'Literary Essays', url: 'https://www.nybooks.com/', excerpt: 'How female authors are redefining war narratives in contemporary fiction.', imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop' },
  { id: 'ea8', title: 'Best Independent Bookstores to Visit', source: 'Condé Nast Traveler', category: 'Book Recommendations', url: 'https://www.cntraveler.com/galleries/bookstores', excerpt: 'A curated guide to the world\'s most beautiful bookshops.', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=250&fit=crop' },
  { id: 'ea9', title: 'The Best Books of 2025 So Far', source: 'The New York Times', category: 'Book Recommendations', url: 'https://www.nytimes.com/section/books', excerpt: 'The NYT staff picks their favorite reads of the year so far.', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop' },
  { id: 'ea10', title: 'Why We Still Need Physical Bookstores', source: 'Vox', category: 'Literary News', url: 'https://www.vox.com/', excerpt: 'In a digital age, bookstores are thriving — and here\'s why that matters.', imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop' },
  { id: 'ea11', title: 'Kazuo Ishiguro on Memory and Loss', source: 'The Paris Review', category: 'Author Interviews', url: 'https://www.theparisreview.org/', excerpt: 'The Nobel laureate discusses the themes that drive his haunting fiction.', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=250&fit=crop' },
  { id: 'ea12', title: 'Dark Academia: A Literary Movement', source: 'Literary Hub', category: 'Literary Essays', url: 'https://lithub.com/', excerpt: 'Exploring the aesthetic that turned classic literature into a lifestyle trend.', imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=250&fit=crop' },
];

export const movieAdaptations: MovieAdaptation[] = [
  {
    id: 'ma1', bookTitle: 'Normal People', movieTitle: 'Normal People (Series)', author: 'Sally Rooney',
    genre: 'Romance', mood: 'melancholic', releaseYear: 2020,
    description: 'An intimate portrayal of two people navigating love and identity.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/6vHBqcMgMhOL0PB1EgWSfblUEAp.jpg',
    popularity: 95, director: 'Lenny Abrahamson', cast: ['Daisy Edgar-Jones', 'Paul Mescal'],
    movieRating: 8.4, movieReview: 'Tender, raw, and emotionally devastating in the best way.',
  },
  {
    id: 'ma2', bookTitle: 'Little Women', movieTitle: 'Little Women (2019)', author: 'Louisa May Alcott',
    genre: 'Classics', mood: 'heartwarming', releaseYear: 2019,
    description: 'Greta Gerwig\'s beloved adaptation of the timeless classic.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg',
    popularity: 90, director: 'Greta Gerwig', cast: ['Saoirse Ronan', 'Florence Pugh', 'Emma Watson', 'Timothée Chalamet'],
    movieRating: 7.8, movieReview: 'Warm, elegant, and full of heart.',
  },
  {
    id: 'ma3', bookTitle: 'Daisy Jones & The Six', movieTitle: 'Daisy Jones & The Six (Series)', author: 'Taylor Jenkins Reid',
    genre: 'Literary Fiction', mood: 'nostalgic', releaseYear: 2023,
    description: 'The rise and fall of a fictional rock band in the 1970s.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/dGmGSGkcQRATagV4Rl2YMHkpCID.jpg',
    popularity: 88, director: 'Scott Neustadter', cast: ['Riley Keough', 'Sam Claflin'],
    movieRating: 8.1, movieReview: 'Stylish, messy, and immersive rock-and-roll drama.',
  },
  {
    id: 'ma4', bookTitle: 'The Great Gatsby', movieTitle: 'The Great Gatsby (2013)', author: 'F. Scott Fitzgerald',
    genre: 'Classics', mood: 'glamorous', releaseYear: 2013,
    description: 'Baz Luhrmann\'s visually stunning take on the Jazz Age classic.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/tyxfhBFEqn84MEBX8L6OwPEPJAr.jpg',
    popularity: 85, director: 'Baz Luhrmann', cast: ['Leonardo DiCaprio', 'Carey Mulligan', 'Tobey Maguire'],
    movieRating: 7.2, movieReview: 'Lavish visuals and spectacle.',
  },
  {
    id: 'ma5', bookTitle: 'It Ends with Us', movieTitle: 'It Ends with Us (2024)', author: 'Colleen Hoover',
    genre: 'Romance', mood: 'emotional', releaseYear: 2024,
    description: 'The highly anticipated film of the BookTok phenomenon.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg',
    popularity: 92, director: 'Justin Baldoni', cast: ['Blake Lively', 'Justin Baldoni', 'Brandon Sklenar'],
    movieRating: 6.8, movieReview: 'Emotional and visually polished.',
  },
  {
    id: 'ma6', bookTitle: 'Lessons in Chemistry', movieTitle: 'Lessons in Chemistry (Series)', author: 'Bonnie Garmus',
    genre: 'Literary Fiction', mood: 'empowering', releaseYear: 2023,
    description: 'Brie Larson stars in this witty feminist period drama.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/7xyw5dKKuVf0oA0f6mF4Pjk6Hoy.jpg',
    popularity: 87, director: 'Lee Eisenberg', cast: ['Brie Larson', 'Lewis Pullman'],
    movieRating: 8.2, movieReview: 'Sharp, charming, and empowering.',
  },
  {
    id: 'ma7', bookTitle: 'Pride and Prejudice', movieTitle: 'Pride & Prejudice (2005)', author: 'Jane Austen',
    genre: 'Romance', mood: 'romantic', releaseYear: 2005,
    description: 'The definitive period romance with Keira Knightley.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg',
    popularity: 93, director: 'Joe Wright', cast: ['Keira Knightley', 'Matthew Macfadyen'],
    movieRating: 7.8, movieReview: 'Beautifully shot and endlessly rewatchable.',
  },
  {
    id: 'ma8', bookTitle: 'Dune', movieTitle: 'Dune (2021)', author: 'Frank Herbert',
    genre: 'Science Fiction', mood: 'epic', releaseYear: 2021,
    description: 'Denis Villeneuve\'s visionary adaptation of the sci-fi masterpiece.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    popularity: 96, director: 'Denis Villeneuve', cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Oscar Isaac'],
    movieRating: 8.0, movieReview: 'A sweeping, immersive sci-fi epic.',
  },
  {
    id: 'ma9', bookTitle: 'Gone Girl', movieTitle: 'Gone Girl (2014)', author: 'Gillian Flynn',
    genre: 'Thriller', mood: 'dark', releaseYear: 2014,
    description: 'David Fincher\'s chilling take on Gillian Flynn\'s twisty thriller.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/qymaJhfJEUz0TZ4WREZDMM4WJwD.jpg',
    popularity: 91, director: 'David Fincher', cast: ['Ben Affleck', 'Rosamund Pike'],
    movieRating: 8.1, movieReview: 'Dark, gripping, and brilliantly acted.',
  },
  {
    id: 'ma10', bookTitle: 'The Shawshank Redemption', movieTitle: 'The Shawshank Redemption (1994)', author: 'Stephen King',
    genre: 'Literary Fiction', mood: 'inspiring', releaseYear: 1994,
    description: 'Based on Stephen King\'s novella, a story of hope and resilience.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/9cqNcoGLjRJHitLMlBaeSscAdjv.jpg',
    popularity: 99, director: 'Frank Darabont', cast: ['Tim Robbins', 'Morgan Freeman'],
    movieRating: 9.3, movieReview: 'One of the greatest films ever made.',
  },
  {
    id: 'ma11', bookTitle: 'Call Me by Your Name', movieTitle: 'Call Me by Your Name (2017)', author: 'André Aciman',
    genre: 'Romance', mood: 'romantic', releaseYear: 2017,
    description: 'A sun-drenched summer romance in Northern Italy.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iN3XNW1bYJ.jpg',
    popularity: 89, director: 'Luca Guadagnino', cast: ['Timothée Chalamet', 'Armie Hammer'],
    movieRating: 7.9, movieReview: 'Achingly tender and luminously beautiful.',
  },
  {
    id: 'ma12', bookTitle: 'To Kill a Mockingbird', movieTitle: 'To Kill a Mockingbird (1962)', author: 'Harper Lee',
    genre: 'Classics', mood: 'emotional', releaseYear: 1962,
    description: 'Gregory Peck stars in the definitive adaptation of Harper Lee\'s classic.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/gKMOVw1WrKbhEPWuCfB7jeh7uiG.jpg',
    popularity: 94, director: 'Robert Mulligan', cast: ['Gregory Peck', 'Mary Badham'],
    movieRating: 8.3, movieReview: 'A timeless masterpiece of cinema.',
  },
  {
    id: 'ma13', bookTitle: 'The Hunger Games', movieTitle: 'The Hunger Games (2012)', author: 'Suzanne Collins',
    genre: 'Dystopian', mood: 'thrilling', releaseYear: 2012,
    description: 'Katniss Everdeen fights for survival in a televised death match.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/yDbyVT8tTOgXUrSV4hPMgVrecCQ.jpg',
    popularity: 93, director: 'Gary Ross', cast: ['Jennifer Lawrence', 'Josh Hutcherson', 'Liam Hemsworth'],
    movieRating: 7.2, movieReview: 'Gripping and well-acted dystopian drama.',
  },
  {
    id: 'ma14', bookTitle: 'The Lord of the Rings', movieTitle: 'The Fellowship of the Ring (2001)', author: 'J.R.R. Tolkien',
    genre: 'Fantasy', mood: 'epic', releaseYear: 2001,
    description: 'Peter Jackson\'s legendary adaptation of Tolkien\'s masterwork.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    popularity: 98, director: 'Peter Jackson', cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen', 'Orlando Bloom'],
    movieRating: 8.8, movieReview: 'The gold standard of fantasy filmmaking.',
  },
  {
    id: 'ma15', bookTitle: 'The Perks of Being a Wallflower', movieTitle: 'The Perks of Being a Wallflower (2012)', author: 'Stephen Chbosky',
    genre: 'Young Adult', mood: 'emotional', releaseYear: 2012,
    description: 'A coming-of-age story about love, loss, and finding your people.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/aKwELJPW0OJJwjAKL6lEbjSJ5KG.jpg',
    popularity: 86, director: 'Stephen Chbosky', cast: ['Logan Lerman', 'Emma Watson', 'Ezra Miller'],
    movieRating: 8.0, movieReview: 'Authentic, moving, and beautifully performed.',
  },
  {
    id: 'ma16', bookTitle: 'The Girl with the Dragon Tattoo', movieTitle: 'The Girl with the Dragon Tattoo (2011)', author: 'Stieg Larsson',
    genre: 'Thriller', mood: 'dark', releaseYear: 2011,
    description: 'David Fincher\'s dark and stylish Swedish crime adaptation.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/xyHDM5dUaJniEiw4OGkOSjGknMU.jpg',
    popularity: 84, director: 'David Fincher', cast: ['Daniel Craig', 'Rooney Mara'],
    movieRating: 7.8, movieReview: 'Intense and absorbing crime thriller.',
  },
  {
    id: 'ma17', bookTitle: 'Atonement', movieTitle: 'Atonement (2007)', author: 'Ian McEwan',
    genre: 'Romance', mood: 'melancholic', releaseYear: 2007,
    description: 'A devastating love story torn apart by a childhood lie.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/pGFVNhk7GPQNsfViJKkAsYvjxgY.jpg',
    popularity: 83, director: 'Joe Wright', cast: ['Keira Knightley', 'James McAvoy', 'Saoirse Ronan'],
    movieRating: 7.8, movieReview: 'Heartbreaking and cinematically stunning.',
  },
  {
    id: 'ma18', bookTitle: 'The Fault in Our Stars', movieTitle: 'The Fault in Our Stars (2014)', author: 'John Green',
    genre: 'Young Adult', mood: 'emotional', releaseYear: 2014,
    description: 'Two cancer-stricken teens fall in love.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/5XBHZ3UQBS2yPhkNjAYMRJc4XoP.jpg',
    popularity: 82, director: 'Josh Boone', cast: ['Shailene Woodley', 'Ansel Elgort'],
    movieRating: 7.7, movieReview: 'A tearjerker that earns every emotion.',
  },
  {
    id: 'ma19', bookTitle: 'Rebecca', movieTitle: 'Rebecca (2020)', author: 'Daphne du Maurier',
    genre: 'Mystery', mood: 'dark', releaseYear: 2020,
    description: 'A young bride is haunted by the legacy of her husband\'s first wife.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/zf5cIXjqd43h3S5FbDMwSFBO9Pd.jpg',
    popularity: 78, director: 'Ben Wheatley', cast: ['Lily James', 'Armie Hammer', 'Kristin Scott Thomas'],
    movieRating: 6.2, movieReview: 'Visually lush gothic atmosphere.',
  },
  {
    id: 'ma20', bookTitle: 'Where the Crawdads Sing', movieTitle: 'Where the Crawdads Sing (2022)', author: 'Delia Owens',
    genre: 'Mystery', mood: 'melancholic', releaseYear: 2022,
    description: 'A young woman raised in the marshes becomes a murder suspect.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/mPR0b2NOHfl3a92cDGSYjJBDnzz.jpg',
    popularity: 85, director: 'Olivia Newman', cast: ['Daisy Edgar-Jones', 'Taylor John Smith'],
    movieRating: 7.1, movieReview: 'Atmospheric and beautifully shot.',
  },
  {
    id: 'ma21', bookTitle: 'The Handmaid\'s Tale', movieTitle: 'The Handmaid\'s Tale (Series)', author: 'Margaret Atwood',
    genre: 'Dystopian', mood: 'dark', releaseYear: 2017,
    description: 'A dystopian tale of women\'s oppression brought to harrowing life.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/oIkxqt6ug5C7t0JYuM4IhwTJwg1.jpg',
    popularity: 91, director: 'Bruce Miller', cast: ['Elisabeth Moss', 'Joseph Fiennes', 'Yvonne Strahovski'],
    movieRating: 8.4, movieReview: 'Chilling, powerful, and uncomfortably relevant.',
  },
  {
    id: 'ma22', bookTitle: 'Big Little Lies', movieTitle: 'Big Little Lies (Series)', author: 'Liane Moriarty',
    genre: 'Thriller', mood: 'glamorous', releaseYear: 2017,
    description: 'Secrets and lies among wealthy Monterey mothers.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/fhxv9KDMHLL1KzBQEFbMnrXPC0u.jpg',
    popularity: 88, director: 'Jean-Marc Vallée', cast: ['Nicole Kidman', 'Reese Witherspoon', 'Shailene Woodley'],
    movieRating: 8.5, movieReview: 'Addictive, stellar cast, beautifully directed.',
  },
  {
    id: 'ma23', bookTitle: 'The Notebook', movieTitle: 'The Notebook (2004)', author: 'Nicholas Sparks',
    genre: 'Romance', mood: 'romantic', releaseYear: 2004,
    description: 'The iconic love story that defined a generation of romance films.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg',
    popularity: 90, director: 'Nick Cassavetes', cast: ['Ryan Gosling', 'Rachel McAdams'],
    movieRating: 7.8, movieReview: 'A sweeping, unforgettable love story.',
  },
  {
    id: 'ma24', bookTitle: 'Sharp Objects', movieTitle: 'Sharp Objects (Series)', author: 'Gillian Flynn',
    genre: 'Thriller', mood: 'dark', releaseYear: 2018,
    description: 'A journalist returns to her hometown to investigate child murders.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/fH7PP2Rkdlo414IHvZqBqBZXhEh.jpg',
    popularity: 83, director: 'Jean-Marc Vallée', cast: ['Amy Adams', 'Patricia Clarkson', 'Chris Messina'],
    movieRating: 8.1, movieReview: 'Disturbing, atmospheric, and brilliant.',
  },
  {
    id: 'ma25', bookTitle: 'Persuasion', movieTitle: 'Persuasion (2022)', author: 'Jane Austen',
    genre: 'Romance', mood: 'romantic', releaseYear: 2022,
    description: 'A modern take on Austen\'s novel of second chances.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/1OFyiIaMUOz4KKRJG7qrqEGr3sE.jpg',
    popularity: 72, director: 'Carrie Cracknell', cast: ['Dakota Johnson', 'Cosmo Jarvis', 'Henry Golding'],
    movieRating: 5.7, movieReview: 'Divisive but visually charming.',
  },
  {
    id: 'ma26', bookTitle: 'The Kite Runner', movieTitle: 'The Kite Runner (2007)', author: 'Khaled Hosseini',
    genre: 'Literary Fiction', mood: 'emotional', releaseYear: 2007,
    description: 'A haunting story of friendship and redemption set in Afghanistan.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/oZzFUOGbNvIkBfOqFaXfPXMJamG.jpg',
    popularity: 81, director: 'Marc Forster', cast: ['Khalid Abdalla', 'Zekeria Ebrahimi', 'Ahmad Khan Mahmoodzada'],
    movieRating: 7.6, movieReview: 'Deeply moving and faithful adaptation.',
  },
  {
    id: 'ma27', bookTitle: 'Life of Pi', movieTitle: 'Life of Pi (2012)', author: 'Yann Martel',
    genre: 'Literary Fiction', mood: 'inspiring', releaseYear: 2012,
    description: 'A boy stranded at sea with a Bengal tiger in Ang Lee\'s visually breathtaking film.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/mny0AH7xmJie5PgNZKuhR2mz2No.jpg',
    popularity: 86, director: 'Ang Lee', cast: ['Suraj Sharma', 'Irrfan Khan'],
    movieRating: 7.9, movieReview: 'Visually stunning and spiritually moving.',
  },
  {
    id: 'ma28', bookTitle: 'The Talented Mr. Ripley', movieTitle: 'The Talented Mr. Ripley (1999)', author: 'Patricia Highsmith',
    genre: 'Thriller', mood: 'dark', releaseYear: 1999,
    description: 'A charming sociopath infiltrates the world of the wealthy elite.',
    bookCoverUrl: '', moviePosterUrl: 'https://image.tmdb.org/t/p/w500/xbCr0XdWkJGT4Yw7GdbIDVgv1Do.jpg',
    popularity: 80, director: 'Anthony Minghella', cast: ['Matt Damon', 'Jude Law', 'Gwyneth Paltrow', 'Cate Blanchett'],
    movieRating: 7.4, movieReview: 'Stylish, unsettling psychological thriller.',
  },
];

export const creatorPicks: CreatorPick[] = [
  {
    id: 'cp1', creator: 'Jack Edwards', platform: 'YouTube',
    profileUrl: 'https://www.youtube.com/@JackEdwards',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_nFzB7kLOMK7PR8pEOIf2vYLkIYd8wE3YD1RqG2f0TLHQ=s176-c-k-c0x00ffffff-no-rj',
    books: [
      { title: 'Babel', author: 'R.F. Kuang', coverUrl: '', reason: 'If you love dark academia, this is the one.' },
      { title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: '', reason: 'The most fun I\'ve had reading sci-fi in years.' },
      { title: 'The Secret History', author: 'Donna Tartt', coverUrl: '', reason: 'The original dark academia.' },
      { title: 'Circe', author: 'Madeline Miller', coverUrl: '', reason: 'Mythology reimagined with poetic brilliance.' },
      { title: 'Piranesi', author: 'Susanna Clarke', coverUrl: '', reason: 'Utterly unique and hauntingly beautiful.' },
    ],
  },
  {
    id: 'cp2', creator: 'Ariel Bissett', platform: 'YouTube',
    profileUrl: 'https://www.youtube.com/@ArielBissett',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_nGRJI-aFPKz7yvSQVtK3g5bMHiPxqR3J9aaQZi8KpTqw=s176-c-k-c0x00ffffff-no-rj',
    books: [
      { title: 'Norwegian Wood', author: 'Haruki Murakami', coverUrl: '', reason: 'Nostalgic and beautifully melancholic.' },
      { title: 'The Bell Jar', author: 'Sylvia Plath', coverUrl: '', reason: 'A raw, essential classic.' },
      { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverUrl: '', reason: 'Quiet brilliance from a master storyteller.' },
      { title: 'Stoner', author: 'John Williams', coverUrl: '', reason: 'A quiet life, examined with devastating precision.' },
      { title: 'The Remains of the Day', author: 'Kazuo Ishiguro', coverUrl: '', reason: 'Restrained emotion at its most powerful.' },
    ],
  },
  {
    id: 'cp3', creator: 'thisstoryaintover', platform: 'TikTok',
    profileUrl: 'https://www.tiktok.com/@thisstoryaintover',
    creatorAvatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7229715028295680006~c5_100x100.jpeg',
    books: [
      { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', coverUrl: '', reason: 'Glamorous, heartbreaking, unforgettable.' },
      { title: 'A Little Life', author: 'Hanya Yanagihara', coverUrl: '', reason: 'The most emotionally intense book I\'ve ever read.' },
      { title: 'It Ends with Us', author: 'Colleen Hoover', coverUrl: '', reason: 'Emotional and impossible to put down.' },
      { title: 'The Song of Achilles', author: 'Madeline Miller', coverUrl: '', reason: 'A love story that shatters your heart.' },
      { title: 'Beach Read', author: 'Emily Henry', coverUrl: '', reason: 'The perfect romcom for book lovers.' },
    ],
  },
  {
    id: 'cp4', creator: 'Haley Pham', platform: 'YouTube',
    profileUrl: 'https://www.youtube.com/@HaleyPham',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mhZ3P_aKJVq7f8_Y0P2f3V6jNJHIvE-J3tW8bCsJBWsA=s176-c-k-c0x00ffffff-no-rj',
    books: [
      { title: 'Atomic Habits', author: 'James Clear', coverUrl: '', reason: 'Changed my entire morning routine.' },
      { title: 'The Alchemist', author: 'Paulo Coelho', coverUrl: '', reason: 'A timeless tale about following your dreams.' },
      { title: 'Educated', author: 'Tara Westover', coverUrl: '', reason: 'One of the most powerful memoirs ever.' },
      { title: 'The Midnight Library', author: 'Matt Haig', coverUrl: '', reason: 'Makes you rethink everything about regret.' },
      { title: 'Maybe You Should Talk to Someone', author: 'Lori Gottlieb', coverUrl: '', reason: 'Honest, gentle, and life-changing.' },
    ],
  },
  {
    id: 'cp5', creator: 'Moya Mawhinney', platform: 'YouTube',
    profileUrl: 'https://www.youtube.com/@MoyaMawhinney',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_l3L7WTmGa6iJ6O4eG0Hp7E0cM7Jg5vLPEGmj2=s176-c-k-c0x00ffffff-no-rj',
    books: [
      { title: 'A Court of Thorns and Roses', author: 'Sarah J. Maas', coverUrl: '', reason: 'The series that started my fantasy obsession.' },
      { title: 'Fourth Wing', author: 'Rebecca Yarros', coverUrl: '', reason: 'Dragons, romance, action — everything I love.' },
      { title: 'The Love Hypothesis', author: 'Ali Hazelwood', coverUrl: '', reason: 'STEM romance done right.' },
      { title: 'People We Meet on Vacation', author: 'Emily Henry', coverUrl: '', reason: 'Friends-to-lovers perfection.' },
      { title: 'Iron Flame', author: 'Rebecca Yarros', coverUrl: '', reason: 'Even better than the first book.' },
    ],
  },
  {
    id: 'cp6', creator: 'withcindy', platform: 'Instagram',
    profileUrl: 'https://www.instagram.com/withcindy/',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=176&h=176&fit=crop&crop=face',
    books: [
      { title: 'Normal People', author: 'Sally Rooney', coverUrl: '', reason: 'Quiet, devastating, and so real.' },
      { title: 'Conversations with Friends', author: 'Sally Rooney', coverUrl: '', reason: 'Messy, complicated, and very human.' },
      { title: 'Beautiful World, Where Are You', author: 'Sally Rooney', coverUrl: '', reason: 'Rooney\'s most philosophical.' },
      { title: 'Intermezzo', author: 'Sally Rooney', coverUrl: '', reason: 'Her most emotionally complex work.' },
      { title: 'Exciting Times', author: 'Naoise Dolan', coverUrl: '', reason: 'Sharp prose and modern Irish sensibility.' },
    ],
  },
  {
    id: 'cp7', creator: 'emmareadsandcoffee', platform: 'TikTok',
    profileUrl: 'https://www.tiktok.com/@emmareadsandcoffee',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=176&h=176&fit=crop&crop=face',
    books: [
      { title: 'The Midnight Library', author: 'Matt Haig', coverUrl: '', reason: 'A gentle reminder that every life is worth living.' },
      { title: 'Intermezzo', author: 'Sally Rooney', coverUrl: '', reason: 'Rooney at her most intimate and mature.' },
      { title: 'Eleanor Oliphant Is Completely Fine', author: 'Gail Honeyman', coverUrl: '', reason: 'Quietly devastating and deeply kind.' },
      { title: 'Anxious People', author: 'Fredrik Backman', coverUrl: '', reason: 'Funny, warm, and surprisingly moving.' },
      { title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverUrl: '', reason: 'Pure magic and warmth.' },
    ],
  },
  {
    id: 'cp8', creator: 'booksandbao', platform: 'Blog',
    profileUrl: 'https://www.booksandbao.com/',
    creatorAvatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=176&h=176&fit=crop&crop=face',
    books: [
      { title: 'Piranesi', author: 'Susanna Clarke', coverUrl: '', reason: 'Ethereal and hauntingly beautiful.' },
      { title: 'Circe', author: 'Madeline Miller', coverUrl: '', reason: 'A fierce, poetic reimagining of mythology.' },
      { title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverUrl: '', reason: 'Warm, whimsical, and wonderful.' },
      { title: 'Pachinko', author: 'Min Jin Lee', coverUrl: '', reason: 'A sweeping epic across generations.' },
      { title: 'The Vegetarian', author: 'Han Kang', coverUrl: '', reason: 'Unsettling, poetic Korean fiction.' },
    ],
  },
  {
    id: 'cp9', creator: 'Daniel Greene', platform: 'YouTube',
    profileUrl: 'https://www.youtube.com/@DanielGreeneReviews',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kJz_hP6Pu8CpEE1b5P0fPMq1z9x2UiKuJGRu4nOBcOQ=s176-c-k-c0x00ffffff-no-rj',
    books: [
      { title: 'The Name of the Wind', author: 'Patrick Rothfuss', coverUrl: '', reason: 'The prose is absolutely magical.' },
      { title: 'Dune', author: 'Frank Herbert', coverUrl: '', reason: 'The foundation of modern sci-fi.' },
      { title: 'The Way of Kings', author: 'Brandon Sanderson', coverUrl: '', reason: 'Epic fantasy at its most ambitious.' },
      { title: 'The Blade Itself', author: 'Joe Abercrombie', coverUrl: '', reason: 'Grimdark at its absolute best.' },
      { title: 'Mistborn: The Final Empire', author: 'Brandon Sanderson', coverUrl: '', reason: 'The most ingenious magic system ever.' },
    ],
  },
  {
    id: 'cp10', creator: 'Merphy Napier', platform: 'YouTube',
    profileUrl: 'https://www.youtube.com/@MerphyNapier',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mvkKxIxWAZh8LQGbKI3CZdXX5EhbKl7mXpVNYpVKdQ=s176-c-k-c0x00ffffff-no-rj',
    books: [
      { title: 'Fourth Wing', author: 'Rebecca Yarros', coverUrl: '', reason: 'Dragons + romance = perfection.' },
      { title: 'A Court of Thorns and Roses', author: 'Sarah J. Maas', coverUrl: '', reason: 'The series that launched a genre.' },
      { title: 'The Priory of the Orange Tree', author: 'Samantha Shannon', coverUrl: '', reason: 'An epic standalone fantasy masterpiece.' },
      { title: 'House of Salt and Sorrows', author: 'Erin A. Craig', coverUrl: '', reason: 'Gothic fantasy that gives you chills.' },
      { title: 'Daughter of the Moon Goddess', author: 'Sue Lynn Tan', coverUrl: '', reason: 'Stunning Chinese mythology retelling.' },
    ],
  },
  {
    id: 'cp11', creator: 'Cindy Pham', platform: 'TikTok',
    profileUrl: 'https://www.tiktok.com/@phamcindy',
    creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=176&h=176&fit=crop&crop=face',
    books: [
      { title: 'Pachinko', author: 'Min Jin Lee', coverUrl: '', reason: 'A sweeping family epic that moved me to tears.' },
      { title: 'The Vanishing Half', author: 'Brit Bennett', coverUrl: '', reason: 'Identity, race, and belonging — beautifully told.' },
      { title: 'Homegoing', author: 'Yaa Gyasi', coverUrl: '', reason: 'Generational storytelling at its very best.' },
      { title: 'The Joy Luck Club', author: 'Amy Tan', coverUrl: '', reason: 'Mothers, daughters, and the immigrant experience.' },
      { title: 'On Earth We\'re Briefly Gorgeous', author: 'Ocean Vuong', coverUrl: '', reason: 'Poetry disguised as a novel — breathtaking.' },
    ],
  },
];
