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
}

export interface TrendingBook {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  reason: string;
  platform: string;
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

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    authorBio: 'Matt Haig is an English novelist and journalist known for combining fantasy elements with poignant life lessons.',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
    rating: 4.5,
    notes: 'Beautiful exploration of life choices. Made me appreciate my current path.',
    startDate: '2024-01-15',
    finishDate: '2024-02-02',
    status: 'read',
    totalPages: 304,
    currentPage: 304,
    isFavorite: true,
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    authorBio: 'James Clear is an author and speaker focused on habits, decision making, and continuous improvement.',
    description: 'An easy and proven way to build good habits and break bad ones.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop',
    rating: 5,
    notes: 'Life-changing framework. Applied the 1% improvement principle immediately.',
    startDate: '2024-02-10',
    finishDate: '2024-02-28',
    status: 'read',
    totalPages: 320,
    currentPage: 320,
    isFavorite: true,
  },
  {
    id: '3',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    authorBio: 'Gabrielle Zevin is a New York Times bestselling author known for her imaginative storytelling.',
    description: 'A dazzling novel about the creative partnership between two friends who become video game designers.',
    coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop',
    rating: 4,
    notes: 'Unique premise. Love how it explores creativity and friendship.',
    startDate: '2024-03-01',
    finishDate: '2024-03-20',
    status: 'read',
    totalPages: 416,
    currentPage: 416,
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    authorBio: 'Bonnie Garmus is a copywriter and creative director who has worked in the tech, medical, and education sectors.',
    description: 'A woman scientist in the 1960s becomes an unlikely TV cooking show star.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop',
    rating: 4.5,
    notes: '',
    startDate: '2024-04-01',
    finishDate: '',
    status: 'reading',
    totalPages: 400,
    currentPage: 187,
    isFavorite: false,
  },
  {
    id: '5',
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune',
    authorBio: 'TJ Klune is an acclaimed fantasy author known for heartwarming and inclusive storytelling.',
    description: 'A magical story about finding family in the most unexpected places.',
    coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop',
    rating: 0,
    notes: '',
    startDate: '2024-04-15',
    finishDate: '',
    status: 'reading',
    totalPages: 398,
    currentPage: 95,
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    authorBio: 'Rebecca Yarros is a bestselling author of over twenty novels, including the Flight & Glory series.',
    description: 'A young woman enters a war college for dragon riders in this romantasy epic.',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop',
    rating: 0,
    notes: 'Everyone is recommending this!',
    startDate: '',
    finishDate: '',
    status: 'wishlist',
    totalPages: 528,
    currentPage: 0,
    isFavorite: false,
  },
  {
    id: '7',
    title: 'Yellowface',
    author: 'R.F. Kuang',
    authorBio: 'R.F. Kuang is an award-winning author known for genre-bending speculative fiction.',
    description: 'A dark satire about cultural appropriation and the publishing industry.',
    coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop',
    rating: 0,
    notes: 'Heard great things on BookTok.',
    startDate: '',
    finishDate: '',
    status: 'wishlist',
    totalPages: 336,
    currentPage: 0,
    isFavorite: false,
  },
  {
    id: '8',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    authorBio: 'Taylor Jenkins Reid is an American author known for historical fiction with vivid characters.',
    description: 'An aging Hollywood starlet finally tells the truth about her glamorous and scandalous life.',
    coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop',
    rating: 0,
    notes: '',
    startDate: '',
    finishDate: '',
    status: 'wishlist',
    totalPages: 389,
    currentPage: 0,
    isFavorite: false,
  },
];

export const trendingBooks: Record<string, TrendingBook[]> = {
  tiktok: [
    { id: 't1', title: 'A Court of Thorns and Roses', author: 'Sarah J. Maas', coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', reason: 'BookTok sensation with over 2M videos', platform: 'tiktok' },
    { id: 't2', title: 'It Ends with Us', author: 'Colleen Hoover', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Emotional rollercoaster everyone is crying over', platform: 'tiktok' },
    { id: 't3', title: 'The Song of Achilles', author: 'Madeline Miller', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'The most devastating love story on BookTok', platform: 'tiktok' },
    { id: 't4', title: 'Daisy Jones & The Six', author: 'Taylor Jenkins Reid', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Rock and roll era vibes everyone loves', platform: 'tiktok' },
    { id: 't5', title: 'Beach Read', author: 'Emily Henry', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'The ultimate summer romance read', platform: 'tiktok' },
  ],
  reddit: [
    { id: 'r1', title: 'Project Hail Mary', author: 'Andy Weir', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'r/books favorite sci-fi of the decade', platform: 'reddit' },
    { id: 'r2', title: 'Piranesi', author: 'Susanna Clarke', coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', reason: 'Hauntingly beautiful world-building', platform: 'reddit' },
    { id: 'r3', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', reason: 'Nobel laureate\'s masterful AI story', platform: 'reddit' },
    { id: 'r4', title: 'The Invisible Life of Addie LaRue', author: 'V.E. Schwab', coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop', reason: 'Fantasy that sparked a massive discussion thread', platform: 'reddit' },
    { id: 'r5', title: 'Circe', author: 'Madeline Miller', coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', reason: 'Feminist mythology retelling r/books adores', platform: 'reddit' },
  ],
  pinterest: [
    { id: 'p1', title: 'The Secret History', author: 'Donna Tartt', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'Dark academia aesthetic icon', platform: 'pinterest' },
    { id: 'p2', title: 'Normal People', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Most pinned book aesthetic of 2024', platform: 'pinterest' },
    { id: 'p3', title: 'Little Women', author: 'Louisa May Alcott', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Cottagecore reading list essential', platform: 'pinterest' },
    { id: 'p4', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'Art deco inspired boards everywhere', platform: 'pinterest' },
    { id: 'p5', title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'Regencycore aesthetic goes viral', platform: 'pinterest' },
  ],
  twitter: [
    { id: 'x1', title: 'Demon Copperhead', author: 'Barbara Kingsolver', coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', reason: 'Pulitzer Prize winner dominating book twitter', platform: 'twitter' },
    { id: 'x2', title: 'Trust', author: 'Hernan Diaz', coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', reason: 'Literary fiction that sparked fierce debates', platform: 'twitter' },
    { id: 'x3', title: 'The Covenant of Water', author: 'Abraham Verghese', coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop', reason: 'Oprah pick everyone is discussing', platform: 'twitter' },
    { id: 'x4', title: 'Babel', author: 'R.F. Kuang', coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', reason: 'Academic fantasy with sharp social commentary', platform: 'twitter' },
    { id: 'x5', title: 'Sea of Tranquility', author: 'Emily St. John Mandel', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'Mind-bending time travel literary fiction', platform: 'twitter' },
  ],
  instagram: [
    { id: 'i1', title: 'Malibu Rising', author: 'Taylor Jenkins Reid', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Most Instagrammed beach read cover', platform: 'instagram' },
    { id: 'i2', title: 'The Anthropocene Reviewed', author: 'John Green', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Beautiful essays perfect for bookstagram flatlays', platform: 'instagram' },
    { id: 'i3', title: 'Hamnet', author: 'Maggie O\'Farrell', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'Stunning cover dominating bookstagram', platform: 'instagram' },
    { id: 'i4', title: 'Beautiful World, Where Are You', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'Minimalist cover art everyone is posting', platform: 'instagram' },
    { id: 'i5', title: 'The Paris Wife', author: 'Paula McLain', coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', reason: 'Parisian aesthetic bookstagram favorite', platform: 'instagram' },
  ],
};

export const topPicks: TrendingBook[] = [
  { id: 'tp1', title: 'Intermezzo', author: 'Sally Rooney', coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', reason: 'A masterful exploration of grief and connection', platform: 'global' },
  { id: 'tp2', title: 'James', author: 'Percival Everett', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', reason: 'Reimagining a classic with stunning depth', platform: 'global' },
  { id: 'tp3', title: 'All Fours', author: 'Miranda July', coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop', reason: 'Bold and unapologetically original', platform: 'global' },
  { id: 'tp4', title: 'The Women', author: 'Kristin Hannah', coverUrl: 'https://images.unsplash.com/photo-1524578271613-d550eacbd6a4?w=300&h=450&fit=crop', reason: 'Powerful historical fiction at its finest', platform: 'global' },
  { id: 'tp5', title: 'Orbital', author: 'Samantha Harvey', coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', reason: 'Booker Prize winner — hauntingly poetic', platform: 'global' },
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
