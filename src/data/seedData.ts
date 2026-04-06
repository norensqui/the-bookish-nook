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

export const moodRecommendations: Record<string, TrendingBook[]> = {
  cozy: [
    { id: 'mv1', title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverUrl: '', reason: 'A magical hug of a book', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.46 },
    { id: 'mv2', title: 'Anxious People', author: 'Fredrik Backman', coverUrl: '', reason: 'Warm, funny, and deeply human', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.15 },
    { id: 'mv3', title: 'A Man Called Ove', author: 'Fredrik Backman', coverUrl: '', reason: 'Grumpy hero, warm heart', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.38 },
  ],
  adventurous: [
    { id: 'mv4', title: 'The Name of the Wind', author: 'Patrick Rothfuss', coverUrl: '', reason: 'Epic fantasy at its finest', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.55 },
    { id: 'mv5', title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: '', reason: 'A thrilling space adventure', platform: 'mood', genre: 'Science Fiction', goodreadsRating: 4.52 },
    { id: 'mv6', title: 'Piranesi', author: 'Susanna Clarke', coverUrl: '', reason: 'A surreal, wondrous journey', platform: 'mood', genre: 'Fantasy', goodreadsRating: 4.23 },
  ],
  romantic: [
    { id: 'mv7', title: 'Beach Read', author: 'Emily Henry', coverUrl: '', reason: 'Witty, warm, and swoony', platform: 'mood', genre: 'Romance', goodreadsRating: 4.02 },
    { id: 'mv8', title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', coverUrl: '', reason: 'Glamorous love and heartbreak', platform: 'mood', genre: 'Romance', goodreadsRating: 4.46 },
    { id: 'mv9', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: '', reason: 'The timeless love story', platform: 'mood', genre: 'Classics', goodreadsRating: 4.28 },
  ],
  reflective: [
    { id: 'mv10', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverUrl: '', reason: 'Tender and thought-provoking', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 3.83 },
    { id: 'mv11', title: 'The Midnight Library', author: 'Matt Haig', coverUrl: '', reason: 'What if you could live every life?', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.00 },
    { id: 'mv12', title: 'When Breath Becomes Air', author: 'Paul Kalanithi', coverUrl: '', reason: 'A meditation on life and death', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.36 },
  ],
  thrilling: [
    { id: 'mv13', title: 'The Silent Patient', author: 'Alex Michaelides', coverUrl: '', reason: 'A twist you won\'t see coming', platform: 'mood', genre: 'Thriller', goodreadsRating: 4.08 },
    { id: 'mv14', title: 'Gone Girl', author: 'Gillian Flynn', coverUrl: '', reason: 'Dark, gripping, unforgettable', platform: 'mood', genre: 'Thriller', goodreadsRating: 4.12 },
    { id: 'mv15', title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', coverUrl: '', reason: 'Intense and absorbing', platform: 'mood', genre: 'Mystery', goodreadsRating: 4.14 },
  ],
  healing: [
    { id: 'mv16', title: 'The Boy, the Mole, the Fox and the Horse', author: 'Charlie Mackesy', coverUrl: '', reason: 'Pure comfort in book form', platform: 'mood', genre: 'Inspirational', goodreadsRating: 4.41 },
    { id: 'mv17', title: 'Eleanor Oliphant Is Completely Fine', author: 'Gail Honeyman', coverUrl: '', reason: 'Quirky, kind, and healing', platform: 'mood', genre: 'Literary Fiction', goodreadsRating: 4.27 },
    { id: 'mv18', title: 'Maybe You Should Talk to Someone', author: 'Lori Gottlieb', coverUrl: '', reason: 'Honest and gently transformative', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.33 },
  ],
  dark: [
    { id: 'mv19', title: 'The Secret History', author: 'Donna Tartt', coverUrl: '', reason: 'Dark academia at its peak', platform: 'mood', genre: 'Mystery', goodreadsRating: 4.17 },
    { id: 'mv20', title: 'Mexican Gothic', author: 'Silvia Moreno-Garcia', coverUrl: '', reason: 'Gothic, atmospheric, chilling', platform: 'mood', genre: 'Horror', goodreadsRating: 3.66 },
    { id: 'mv21', title: 'Yellowface', author: 'R.F. Kuang', coverUrl: '', reason: 'A sharp, unsettling satire', platform: 'mood', genre: 'Thriller', goodreadsRating: 3.88 },
  ],
  inspiring: [
    { id: 'mv22', title: 'Atomic Habits', author: 'James Clear', coverUrl: '', reason: 'Small changes, big results', platform: 'mood', genre: 'Self-Help', goodreadsRating: 4.37 },
    { id: 'mv23', title: 'Educated', author: 'Tara Westover', coverUrl: '', reason: 'A remarkable memoir of resilience', platform: 'mood', genre: 'Memoir', goodreadsRating: 4.47 },
    { id: 'mv24', title: 'Man\'s Search for Meaning', author: 'Viktor E. Frankl', coverUrl: '', reason: 'Finding purpose in suffering', platform: 'mood', genre: 'Philosophy', goodreadsRating: 4.37 },
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
  { id: 'ea1', title: 'The Art of Slow Reading in a Fast World', source: 'The New Yorker', category: 'Literary Essays', url: 'https://www.newyorker.com/culture/cultural-comment/the-case-for-reading-slowly', excerpt: 'Why slowing down with a book might be the most radical act of self-care.', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop' },
  { id: 'ea2', title: 'Sally Rooney on Writing Her Fourth Novel', source: 'The Guardian', category: 'Author Interviews', url: 'https://www.theguardian.com/books/sally-rooney', excerpt: 'The Irish author discusses her creative process and the themes of Intermezzo.', imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop' },
  { id: 'ea3', title: '25 Must-Read Books for Spring 2025', source: 'Literary Hub', category: 'Book Recommendations', url: 'https://lithub.com/most-anticipated-books/', excerpt: 'Our editors pick the most anticipated books of the season.', imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop' },
  { id: 'ea4', title: 'How BookTok is Reshaping Publishing', source: 'The Atlantic', category: 'Literary News', url: 'https://www.theatlantic.com/technology/archive/2022/03/booktok-tiktok-publishing/629209/', excerpt: 'Inside the algorithm-driven revolution in book discovery and sales.', imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop' },
  { id: 'ea5', title: 'In Conversation with Percival Everett', source: 'Paris Review', category: 'Author Interviews', url: 'https://www.theparisreview.org/', excerpt: 'The National Book Award winner reflects on reimagining Huck Finn.', imageUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=250&fit=crop' },
  { id: 'ea6', title: 'The Return of the Reading Journal', source: 'Book Riot', category: 'Book Reviews', url: 'https://bookriot.com/', excerpt: 'Why analog reading trackers are having a moment in the digital age.', imageUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=250&fit=crop' },
  { id: 'ea7', title: 'Women Writing War: A New Wave', source: 'NYRB', category: 'Literary Essays', url: 'https://www.nybooks.com/', excerpt: 'How female authors are redefining war narratives in contemporary fiction.', imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop' },
  { id: 'ea8', title: 'Best Independent Bookstores to Visit', source: 'Condé Nast Traveler', category: 'Book Recommendations', url: 'https://www.cntraveler.com/galleries/bookstores', excerpt: 'A curated guide to the world\'s most beautiful bookshops.', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=250&fit=crop' },
  { id: 'ea9', title: 'The Best Books of 2025 So Far', source: 'The New York Times', category: 'Book Recommendations', url: 'https://www.nytimes.com/section/books', excerpt: 'The NYT staff picks their favorite reads of the year so far.', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop' },
  { id: 'ea10', title: 'Why We Still Need Physical Bookstores', source: 'Vox', category: 'Literary News', url: 'https://www.vox.com/', excerpt: 'In a digital age, bookstores are thriving — and here\'s why that matters.', imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop' },
  { id: 'ea11', title: 'Kazuo Ishiguro on Memory and Loss', source: 'The Paris Review', category: 'Author Interviews', url: 'https://www.theparisreview.org/', excerpt: 'The Nobel laureate discusses the themes that drive his haunting fiction.', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=250&fit=crop' },
  { id: 'ea12', title: 'Dark Academia: A Literary Movement', source: 'Literary Hub', category: 'Literary Essays', url: 'https://lithub.com/', excerpt: 'Exploring the aesthetic that turned classic literature into a lifestyle trend.', imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=250&fit=crop' },
];

export const movieAdaptations: MovieAdaptation[] = [
  { id: 'ma1', bookTitle: 'Normal People', movieTitle: 'Normal People (Series)', author: 'Sally Rooney', genre: 'Romance', mood: 'melancholic', releaseYear: 2020, description: 'An intimate portrayal of two people navigating love and identity.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop', popularity: 95, director: 'Lenny Abrahamson', cast: ['Daisy Edgar-Jones', 'Paul Mescal', 'Sarah Greene'], movieRating: 8.3, movieReview: 'A beautifully restrained adaptation that captures the novel\'s emotional intimacy.' },
  { id: 'ma2', bookTitle: 'Little Women', movieTitle: 'Little Women (2019)', author: 'Louisa May Alcott', genre: 'Classics', mood: 'heartwarming', releaseYear: 2019, description: 'Greta Gerwig\'s beloved adaptation of the timeless classic.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop', popularity: 90, director: 'Greta Gerwig', cast: ['Saoirse Ronan', 'Florence Pugh', 'Timothée Chalamet', 'Emma Watson'], movieRating: 7.8, movieReview: 'A vibrant and emotionally rich adaptation with stellar performances.' },
  { id: 'ma3', bookTitle: 'Daisy Jones & The Six', movieTitle: 'Daisy Jones & The Six (Series)', author: 'Taylor Jenkins Reid', genre: 'Literary Fiction', mood: 'nostalgic', releaseYear: 2023, description: 'The rise and fall of a fictional rock band in the 1970s.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop', popularity: 88, director: 'James Ponsoldt', cast: ['Riley Keough', 'Sam Claflin', 'Suki Waterhouse'], movieRating: 7.4, movieReview: 'Captures the spirit of 70s rock with dazzling performances and period detail.' },
  { id: 'ma4', bookTitle: 'The Great Gatsby', movieTitle: 'The Great Gatsby (2013)', author: 'F. Scott Fitzgerald', genre: 'Classics', mood: 'glamorous', releaseYear: 2013, description: 'Baz Luhrmann\'s visually stunning take on the Jazz Age classic.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop', popularity: 85, director: 'Baz Luhrmann', cast: ['Leonardo DiCaprio', 'Tobey Maguire', 'Carey Mulligan'], movieRating: 7.2, movieReview: 'Visually extravagant with a charismatic DiCaprio, though divisive in its excess.' },
  { id: 'ma5', bookTitle: 'It Ends with Us', movieTitle: 'It Ends with Us (2024)', author: 'Colleen Hoover', genre: 'Romance', mood: 'emotional', releaseYear: 2024, description: 'The highly anticipated film adaptation of the BookTok phenomenon.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop', popularity: 92, director: 'Justin Baldoni', cast: ['Blake Lively', 'Justin Baldoni', 'Brandon Sklenar'], movieRating: 6.4, movieReview: 'An emotional adaptation that divided audiences but brought the story to a wider audience.' },
  { id: 'ma6', bookTitle: 'Lessons in Chemistry', movieTitle: 'Lessons in Chemistry (Series)', author: 'Bonnie Garmus', genre: 'Literary Fiction', mood: 'empowering', releaseYear: 2023, description: 'Brie Larson stars in this witty feminist period drama.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop', popularity: 87, director: 'Sarah Adina Smith', cast: ['Brie Larson', 'Lewis Pullman', 'Aja Naomi King'], movieRating: 7.6, movieReview: 'Brie Larson shines in this sharp, witty adaptation full of feminist energy.' },
  { id: 'ma7', bookTitle: 'Pride and Prejudice', movieTitle: 'Pride & Prejudice (2005)', author: 'Jane Austen', genre: 'Romance', mood: 'romantic', releaseYear: 2005, description: 'The definitive period romance with Keira Knightley.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop', popularity: 93, director: 'Joe Wright', cast: ['Keira Knightley', 'Matthew Macfadyen', 'Judi Dench'], movieRating: 7.8, movieReview: 'A gorgeous, emotionally resonant adaptation with an iconic hand flex scene.' },
  { id: 'ma8', bookTitle: 'The Song of Achilles', movieTitle: 'The Song of Achilles (TBA)', author: 'Madeline Miller', genre: 'Classics', mood: 'epic', releaseYear: 2025, description: 'The long-awaited adaptation of the beloved mythology retelling.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop', popularity: 80, director: 'TBA', cast: ['TBA'], movieRating: undefined, movieReview: 'One of the most anticipated book-to-screen adaptations.' },
  { id: 'ma9', bookTitle: 'Gone Girl', movieTitle: 'Gone Girl (2014)', author: 'Gillian Flynn', genre: 'Thriller', mood: 'dark', releaseYear: 2014, description: 'David Fincher\'s chilling adaptation of the bestselling thriller.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop', popularity: 94, director: 'David Fincher', cast: ['Ben Affleck', 'Rosamund Pike', 'Neil Patrick Harris'], movieRating: 8.1, movieReview: 'A masterfully crafted psychological thriller with a career-best performance from Rosamund Pike.' },
  { id: 'ma10', bookTitle: 'Dune', movieTitle: 'Dune (2021)', author: 'Frank Herbert', genre: 'Science Fiction', mood: 'epic', releaseYear: 2021, description: 'Denis Villeneuve\'s sweeping sci-fi epic brings the classic novel to life.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop', popularity: 96, director: 'Denis Villeneuve', cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Oscar Isaac'], movieRating: 8.0, movieReview: 'A visually stunning and immersive adaptation that does justice to the source material.' },
  { id: 'ma11', bookTitle: 'The Perks of Being a Wallflower', movieTitle: 'The Perks of Being a Wallflower (2012)', author: 'Stephen Chbosky', genre: 'Young Adult', mood: 'emotional', releaseYear: 2012, description: 'A coming-of-age story about navigating the complexities of adolescence.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop', popularity: 88, director: 'Stephen Chbosky', cast: ['Logan Lerman', 'Emma Watson', 'Ezra Miller'], movieRating: 8.0, movieReview: 'A tender and authentic adaptation directed by the book\'s own author.' },
  { id: 'ma12', bookTitle: 'Call Me by Your Name', movieTitle: 'Call Me by Your Name (2017)', author: 'André Aciman', genre: 'Romance', mood: 'romantic', releaseYear: 2017, description: 'A sun-soaked romance set in 1980s Italy.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop', popularity: 91, director: 'Luca Guadagnino', cast: ['Timothée Chalamet', 'Armie Hammer', 'Michael Stuhlbarg'], movieRating: 7.9, movieReview: 'A sun-drenched, achingly beautiful film about first love and desire.' },
  { id: 'ma13', bookTitle: 'The Handmaid\'s Tale', movieTitle: 'The Handmaid\'s Tale (Series)', author: 'Margaret Atwood', genre: 'Dystopian', mood: 'dark', releaseYear: 2017, description: 'A chilling dystopian vision of a totalitarian society.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop', popularity: 93, director: 'Bruce Miller', cast: ['Elisabeth Moss', 'Joseph Fiennes', 'Yvonne Strahovski'], movieRating: 8.4, movieReview: 'A powerful and disturbing adaptation with an Emmy-winning performance from Elisabeth Moss.' },
  { id: 'ma14', bookTitle: 'Norwegian Wood', movieTitle: 'Norwegian Wood (2010)', author: 'Haruki Murakami', genre: 'Japanese Literature', mood: 'melancholic', releaseYear: 2010, description: 'A nostalgic and bittersweet tale of loss and longing in 1960s Tokyo.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop', popularity: 78, director: 'Tran Anh Hung', cast: ['Kenichi Matsuyama', 'Rinko Kikuchi', 'Kiko Mizuhara'], movieRating: 6.3, movieReview: 'Visually gorgeous but struggles to capture the interiority of Murakami\'s prose.' },
  { id: 'ma15', bookTitle: 'The Shining', movieTitle: 'The Shining (1980)', author: 'Stephen King', genre: 'Horror', mood: 'dark', releaseYear: 1980, description: 'Stanley Kubrick\'s iconic psychological horror masterpiece.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop', popularity: 97, director: 'Stanley Kubrick', cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'], movieRating: 8.4, movieReview: 'A masterclass in atmospheric horror, with Nicholson\'s iconic performance.' },
  { id: 'ma16', bookTitle: 'Atonement', movieTitle: 'Atonement (2007)', author: 'Ian McEwan', genre: 'Literary Fiction', mood: 'melancholic', releaseYear: 2007, description: 'A devastating story of love, war, and the power of storytelling.', bookCoverUrl: '', moviePosterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop', popularity: 86, director: 'Joe Wright', cast: ['Keira Knightley', 'James McAvoy', 'Saoirse Ronan'], movieRating: 7.8, movieReview: 'A lush, heartbreaking adaptation with stunning cinematography and performances.' },
];

export const creatorPicks: CreatorPick[] = [
  {
    id: 'cp1', creator: 'Moya Mawhinney',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    books: [
      { title: 'The Midnight Library', author: 'Matt Haig', coverUrl: '', reason: 'A gentle reminder that every life is worth living.' },
      { title: 'Intermezzo', author: 'Sally Rooney', coverUrl: '', reason: 'Rooney at her most intimate and mature.' },
      { title: 'Eleanor Oliphant Is Completely Fine', author: 'Gail Honeyman', coverUrl: '', reason: 'Quietly devastating and deeply kind.' },
    ],
  },
  {
    id: 'cp2', creator: 'Jack Edwards',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    books: [
      { title: 'Babel', author: 'R.F. Kuang', coverUrl: '', reason: 'If you love dark academia, this is the one.' },
      { title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: '', reason: 'The most fun I\'ve had reading sci-fi in years.' },
      { title: 'The Secret History', author: 'Donna Tartt', coverUrl: '', reason: 'The original dark academia.' },
    ],
  },
  {
    id: 'cp3', creator: 'Emma Chamberlain',
    creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    books: [
      { title: 'Normal People', author: 'Sally Rooney', coverUrl: '', reason: 'Quiet, devastating, and so real.' },
      { title: 'The Secret History', author: 'Donna Tartt', coverUrl: '', reason: 'Dark academia perfection.' },
      { title: 'Conversations with Friends', author: 'Sally Rooney', coverUrl: '', reason: 'Messy, complicated, and very human.' },
    ],
  },
  {
    id: 'cp4', creator: 'Mia Goth (Inspired)',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
    books: [
      { title: 'Piranesi', author: 'Susanna Clarke', coverUrl: '', reason: 'Ethereal and hauntingly beautiful.' },
      { title: 'Circe', author: 'Madeline Miller', coverUrl: '', reason: 'A fierce, poetic reimagining of mythology.' },
    ],
  },
  {
    id: 'cp5', creator: 'Haley Pham',
    creatorAvatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop',
    books: [
      { title: 'Atomic Habits', author: 'James Clear', coverUrl: '', reason: 'Changed my entire morning routine.' },
      { title: 'The Alchemist', author: 'Paulo Coelho', coverUrl: '', reason: 'A timeless tale about following your dreams.' },
      { title: 'Educated', author: 'Tara Westover', coverUrl: '', reason: 'One of the most powerful memoirs ever.' },
    ],
  },
  {
    id: 'cp6', creator: 'Ariel Bissett',
    creatorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop',
    books: [
      { title: 'Norwegian Wood', author: 'Haruki Murakami', coverUrl: '', reason: 'Nostalgic and beautifully melancholic.' },
      { title: 'The Bell Jar', author: 'Sylvia Plath', coverUrl: '', reason: 'A raw, essential classic.' },
      { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverUrl: '', reason: 'Quiet brilliance from a master storyteller.' },
    ],
  },
  {
    id: 'cp7', creator: 'thisstoryaintover',
    creatorAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop',
    books: [
      { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', coverUrl: '', reason: 'Glamorous, heartbreaking, unforgettable.' },
      { title: 'A Little Life', author: 'Hanya Yanagihara', coverUrl: '', reason: 'The most emotionally intense book I\'ve ever read.' },
    ],
  },
  {
    id: 'cp8', creator: 'Cindy Pham',
    creatorAvatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&h=80&fit=crop',
    books: [
      { title: 'Pachinko', author: 'Min Jin Lee', coverUrl: '', reason: 'A sweeping family epic that moved me to tears.' },
      { title: 'The Vanishing Half', author: 'Brit Bennett', coverUrl: '', reason: 'Identity, race, and belonging — beautifully told.' },
      { title: 'Homegoing', author: 'Yaa Gyasi', coverUrl: '', reason: 'Generational storytelling at its very best.' },
    ],
  },
];
