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
}

export interface CreatorPick {
  id: string;
  creator: string;
  creatorAvatar: string;
  books: { title: string; author: string; coverUrl: string; reason: string }[];
}

export const genres = [
  'All', 'Romance', 'Fantasy', 'Thriller', 'Mystery', 'Literary Fiction',
  'Self-Help', 'Classics', 'Short Reads', 'Emotional Reads', 'Inspirational',
  'Young Adult', 'Non-Fiction', 'Custom',
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
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
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
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop',
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
    coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop',
    rating: 4, notes: 'Unique premise. Love how it explores creativity and friendship.',
    startDate: '2024-03-01', finishDate: '2024-03-20', status: 'read',
    totalPages: 416, currentPage: 416, isFavorite: false,
    genre: 'Literary Fiction', mood: 'bittersweet',
  },
  {
    id: '4', title: 'Lessons in Chemistry', author: 'Bonnie Garmus',
    authorBio: 'Bonnie Garmus is a copywriter and creative director who has worked in the tech, medical, and education sectors.',
    description: 'A woman scientist in the 1960s becomes an unlikely TV cooking show star.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop',
    rating: 4.5, notes: '', startDate: '2024-04-01', finishDate: '', status: 'reading',
    totalPages: 400, currentPage: 187, isFavorite: false,
    genre: 'Literary Fiction', mood: 'empowering',
  },
  {
    id: '5', title: 'The House in the Cerulean Sea', author: 'TJ Klune',
    authorBio: 'TJ Klune is an acclaimed fantasy author known for heartwarming and inclusive storytelling.',
    description: 'A magical story about finding family in the most unexpected places.',
    coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop',
    rating: 0, notes: '', startDate: '2024-04-15', finishDate: '', status: 'reading',
    totalPages: 398, currentPage: 95, isFavorite: false,
    genre: 'Fantasy', mood: 'cozy',
  },
  {
    id: '6', title: 'Fourth Wing', author: 'Rebecca Yarros',
    authorBio: 'Rebecca Yarros is a bestselling author of over twenty novels, including the Flight & Glory series.',
    description: 'A young woman enters a war college for dragon riders in this romantasy epic.',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop',
    rating: 0, notes: 'Everyone is recommending this!', startDate: '', finishDate: '', status: 'wishlist',
    totalPages: 528, currentPage: 0, isFavorite: false,
    genre: 'Fantasy', mood: 'adventurous',
  },
  {
    id: '7', title: 'Yellowface', author: 'R.F. Kuang',
    authorBio: 'R.F. Kuang is an award-winning author known for genre-bending speculative fiction.',
    description: 'A dark satire about cultural appropriation and the publishing industry.',
    coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop',
    rating: 0, notes: 'Heard great things on BookTok.', startDate: '', finishDate: '', status: 'wishlist',
    totalPages: 336, currentPage: 0, isFavorite: false,
    genre: 'Thriller', mood: 'dark',
  },
  {
    id: '8', title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid',
    authorBio: 'Taylor Jenkins Reid is an American author known for historical fiction with vivid characters.',
    description: 'An aging Hollywood starlet finally tells the truth about her glamorous and scandalous life.',
    coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop',
    rating: 0, notes: '', startDate: '', finishDate: '', status: 'wishlist',
    totalPages: 389, currentPage: 0, isFavorite: false,
    genre: 'Romance', mood: 'glamorous',
  },
];

export const trendingBooks: Record<string, TrendingBook[]> = {
  tiktok: [
    { id: 't1', title: 'A Court of Thorns and Roses', author: 'Sarah J. Maas', coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', reason: 'BookTok sensation with over 2M videos', platform: 'tiktok', genre: 'Fantasy' },
    { id: 't2', title: 'It Ends with Us', author: 'Colleen Hoover', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Emotional rollercoaster everyone is crying over', platform: 'tiktok', genre: 'Romance' },
    { id: 't3', title: 'The Song of Achilles', author: 'Madeline Miller', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'The most devastating love story on BookTok', platform: 'tiktok', genre: 'Classics' },
    { id: 't4', title: 'Daisy Jones & The Six', author: 'Taylor Jenkins Reid', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Rock and roll era vibes everyone loves', platform: 'tiktok', genre: 'Literary Fiction' },
    { id: 't5', title: 'Beach Read', author: 'Emily Henry', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'The ultimate summer romance read', platform: 'tiktok', genre: 'Romance' },
  ],
  reddit: [
    { id: 'r1', title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'r/books favorite sci-fi of the decade', platform: 'reddit', genre: 'Non-Fiction' },
    { id: 'r2', title: 'Piranesi', author: 'Susanna Clarke', coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', reason: 'Hauntingly beautiful world-building', platform: 'reddit', genre: 'Fantasy' },
    { id: 'r3', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', reason: 'Nobel laureate\'s masterful AI story', platform: 'reddit', genre: 'Literary Fiction' },
    { id: 'r4', title: 'The Invisible Life of Addie LaRue', author: 'V.E. Schwab', coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop', reason: 'Fantasy that sparked a massive discussion thread', platform: 'reddit', genre: 'Fantasy' },
    { id: 'r5', title: 'Circe', author: 'Madeline Miller', coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', reason: 'Feminist mythology retelling r/books adores', platform: 'reddit', genre: 'Classics' },
  ],
  pinterest: [
    { id: 'p1', title: 'The Secret History', author: 'Donna Tartt', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'Dark academia aesthetic icon', platform: 'pinterest', genre: 'Mystery' },
    { id: 'p2', title: 'Normal People', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Most pinned book aesthetic of 2024', platform: 'pinterest', genre: 'Literary Fiction' },
    { id: 'p3', title: 'Little Women', author: 'Louisa May Alcott', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Cottagecore reading list essential', platform: 'pinterest', genre: 'Classics' },
    { id: 'p4', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'Art deco inspired boards everywhere', platform: 'pinterest', genre: 'Classics' },
    { id: 'p5', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'Regencycore aesthetic goes viral', platform: 'pinterest', genre: 'Romance' },
  ],
  twitter: [
    { id: 'x1', title: 'Demon Copperhead', author: 'Barbara Kingsolver', coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', reason: 'Pulitzer Prize winner dominating book twitter', platform: 'twitter', genre: 'Literary Fiction' },
    { id: 'x2', title: 'Trust', author: 'Hernan Diaz', coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', reason: 'Literary fiction that sparked fierce debates', platform: 'twitter', genre: 'Literary Fiction' },
    { id: 'x3', title: 'The Covenant of Water', author: 'Abraham Verghese', coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop', reason: 'Oprah pick everyone is discussing', platform: 'twitter', genre: 'Literary Fiction' },
    { id: 'x4', title: 'Babel', author: 'R.F. Kuang', coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', reason: 'Academic fantasy with sharp social commentary', platform: 'twitter', genre: 'Fantasy' },
    { id: 'x5', title: 'Sea of Tranquility', author: 'Emily St. John Mandel', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'Mind-bending time travel literary fiction', platform: 'twitter', genre: 'Literary Fiction' },
  ],
  instagram: [
    { id: 'i1', title: 'Malibu Rising', author: 'Taylor Jenkins Reid', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Most Instagrammed beach read cover', platform: 'instagram', genre: 'Romance' },
    { id: 'i2', title: 'The Anthropocene Reviewed', author: 'John Green', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Beautiful essays perfect for bookstagram flatlays', platform: 'instagram', genre: 'Non-Fiction' },
    { id: 'i3', title: 'Hamnet', author: 'Maggie O\'Farrell', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'Stunning cover dominating bookstagram', platform: 'instagram', genre: 'Literary Fiction' },
    { id: 'i4', title: 'Beautiful World, Where Are You', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'Minimalist cover art everyone is posting', platform: 'instagram', genre: 'Literary Fiction' },
    { id: 'i5', title: 'The Paris Wife', author: 'Paula McLain', coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', reason: 'Parisian aesthetic bookstagram favorite', platform: 'instagram', genre: 'Romance' },
  ],
};

export const topPicks: TrendingBook[] = [
  { id: 'tp1', title: 'Intermezzo', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'A masterful exploration of grief and connection', platform: 'global', genre: 'Literary Fiction' },
  { id: 'tp2', title: 'James', author: 'Percival Everett', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Reimagining a classic with stunning depth', platform: 'global', genre: 'Classics' },
  { id: 'tp3', title: 'All Fours', author: 'Miranda July', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Bold and unapologetically original', platform: 'global', genre: 'Literary Fiction' },
  { id: 'tp4', title: 'The Women', author: 'Kristin Hannah', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'Powerful historical fiction at its finest', platform: 'global', genre: 'Literary Fiction' },
  { id: 'tp5', title: 'Orbital', author: 'Samantha Harvey', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'Booker Prize winner — hauntingly poetic', platform: 'global', genre: 'Literary Fiction' },
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
  { id: 'ea1', title: 'The Art of Slow Reading in a Fast World', source: 'The New Yorker', category: 'Literary Essays', url: '#', excerpt: 'Why slowing down with a book might be the most radical act of self-care.', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop' },
  { id: 'ea2', title: 'Sally Rooney on Writing Her Fourth Novel', source: 'The Guardian', category: 'Author Interviews', url: '#', excerpt: 'The Irish author discusses her creative process and the themes of Intermezzo.', imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop' },
  { id: 'ea3', title: '25 Must-Read Books for Spring 2024', source: 'Literary Hub', category: 'Book Recommendations', url: '#', excerpt: 'Our editors pick the most anticipated books of the season.', imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop' },
  { id: 'ea4', title: 'How BookTok is Reshaping Publishing', source: 'The Atlantic', category: 'Literary News', url: '#', excerpt: 'Inside the algorithm-driven revolution in book discovery and sales.', imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop' },
  { id: 'ea5', title: 'In Conversation with Percival Everett', source: 'Paris Review', category: 'Author Interviews', url: '#', excerpt: 'The National Book Award winner reflects on reimagining Huck Finn.', imageUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=250&fit=crop' },
  { id: 'ea6', title: 'The Return of the Reading Journal', source: 'Book Riot', category: 'Book Reviews', url: '#', excerpt: 'Why analog reading trackers are having a moment in the digital age.', imageUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=250&fit=crop' },
  { id: 'ea7', title: 'Women Writing War: A New Wave', source: 'NYRB', category: 'Literary Essays', url: '#', excerpt: 'How female authors are redefining war narratives in contemporary fiction.', imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop' },
  { id: 'ea8', title: 'Best Independent Bookstores to Visit', source: 'Condé Nast Traveler', category: 'Book Recommendations', url: '#', excerpt: 'A curated guide to the world\'s most beautiful bookshops.', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=250&fit=crop' },
];

export const movieAdaptations: MovieAdaptation[] = [
  { id: 'ma1', bookTitle: 'Normal People', movieTitle: 'Normal People (Series)', author: 'Sally Rooney', genre: 'Romance', mood: 'melancholic', releaseYear: 2020, description: 'An intimate portrayal of two people navigating love and identity.', bookCoverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop', popularity: 95 },
  { id: 'ma2', bookTitle: 'Little Women', movieTitle: 'Little Women (2019)', author: 'Louisa May Alcott', genre: 'Classics', mood: 'heartwarming', releaseYear: 2019, description: 'Greta Gerwig\'s beloved adaptation of the timeless classic.', bookCoverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop', popularity: 90 },
  { id: 'ma3', bookTitle: 'Daisy Jones & The Six', movieTitle: 'Daisy Jones & The Six (Series)', author: 'Taylor Jenkins Reid', genre: 'Literary Fiction', mood: 'nostalgic', releaseYear: 2023, description: 'The rise and fall of a fictional rock band in the 1970s.', bookCoverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop', popularity: 88 },
  { id: 'ma4', bookTitle: 'The Great Gatsby', movieTitle: 'The Great Gatsby (2013)', author: 'F. Scott Fitzgerald', genre: 'Classics', mood: 'glamorous', releaseYear: 2013, description: 'Baz Luhrmann\'s visually stunning take on the Jazz Age classic.', bookCoverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop', popularity: 85 },
  { id: 'ma5', bookTitle: 'It Ends with Us', movieTitle: 'It Ends with Us (2024)', author: 'Colleen Hoover', genre: 'Romance', mood: 'emotional', releaseYear: 2024, description: 'The highly anticipated film adaptation of the BookTok phenomenon.', bookCoverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop', popularity: 92 },
  { id: 'ma6', bookTitle: 'Lessons in Chemistry', movieTitle: 'Lessons in Chemistry (Series)', author: 'Bonnie Garmus', genre: 'Literary Fiction', mood: 'empowering', releaseYear: 2023, description: 'Brie Larson stars in this witty feminist period drama.', bookCoverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop', popularity: 87 },
  { id: 'ma7', bookTitle: 'Pride and Prejudice', movieTitle: 'Pride & Prejudice (2005)', author: 'Jane Austen', genre: 'Romance', mood: 'romantic', releaseYear: 2005, description: 'The definitive period romance with Keira Knightley.', bookCoverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop', popularity: 93 },
  { id: 'ma8', bookTitle: 'The Song of Achilles', movieTitle: 'The Song of Achilles (TBA)', author: 'Madeline Miller', genre: 'Classics', mood: 'epic', releaseYear: 2025, description: 'The long-awaited adaptation of the beloved mythology retelling.', bookCoverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop', moviePosterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop', popularity: 80 },
];

export const creatorPicks: CreatorPick[] = [
  {
    id: 'cp1', creator: 'Moya Mawhinney',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    books: [
      { title: 'The Midnight Library', author: 'Matt Haig', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'A gentle reminder that every life is worth living.' },
      { title: 'Intermezzo', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Rooney at her most intimate and mature.' },
    ],
  },
  {
    id: 'cp2', creator: 'Jack Edwards',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    books: [
      { title: 'Babel', author: 'R.F. Kuang', coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', reason: 'If you love dark academia, this is the one.' },
      { title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'The most fun I\'ve had reading sci-fi in years.' },
    ],
  },
  {
    id: 'cp3', creator: 'Emma Chamberlain',
    creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    books: [
      { title: 'Normal People', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Quiet, devastating, and so real.' },
      { title: 'The Secret History', author: 'Donna Tartt', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'Dark academia perfection.' },
    ],
  },
  {
    id: 'cp4', creator: 'Mia Goth (Inspired)',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
    books: [
      { title: 'Piranesi', author: 'Susanna Clarke', coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', reason: 'Ethereal and hauntingly beautiful.' },
      { title: 'Circe', author: 'Madeline Miller', coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', reason: 'A fierce, poetic reimagining of mythology.' },
    ],
  },
];
