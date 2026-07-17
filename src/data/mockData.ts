export interface Movie {
  id: number
  title: string
  year: number
  genre: string
  rating: number
  duration: string
  gradient: string
  badge?: string
}

export interface Genre {
  id: number
  name: string
  count: number
  icon: string
  gradient: string
}

export interface Feature {
  id: number
  title: string
  description: string
  icon: 'search' | 'list' | 'star' | 'play'
}

export const featuredMovies: Movie[] = [
  {
    id: 1,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.7,
    duration: '2h 49m',
    gradient: 'linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    badge: 'Classic',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    duration: '2h 32m',
    gradient: 'linear-gradient(160deg, #1a1a1a 0%, #2d2d2d 50%, #3d3d3d 100%)',
    badge: 'Top Rated',
  },
  {
    id: 3,
    title: 'Inception',
    year: 2010,
    genre: 'Thriller',
    rating: 8.8,
    duration: '2h 28m',
    gradient: 'linear-gradient(160deg, #1a0533 0%, #2d1469 50%, #11998e 100%)',
  },
  {
    id: 4,
    title: 'Dune: Part Two',
    year: 2024,
    genre: 'Sci-Fi',
    rating: 8.5,
    duration: '2h 46m',
    gradient: 'linear-gradient(160deg, #3d1f00 0%, #8b4513 50%, #c68642 100%)',
    badge: 'New',
  },
  {
    id: 5,
    title: 'Parasite',
    year: 2019,
    genre: 'Drama',
    rating: 8.5,
    duration: '2h 12m',
    gradient: 'linear-gradient(160deg, #0a2e1e 0%, #134e5e 50%, #71b280 100%)',
    badge: 'Oscar Winner',
  },
  {
    id: 6,
    title: 'Blade Runner 2049',
    year: 2017,
    genre: 'Sci-Fi',
    rating: 8.0,
    duration: '2h 44m',
    gradient: 'linear-gradient(160deg, #1a0010 0%, #4e0f2b 50%, #801638 100%)',
  },
]

export const popularGenres: Genre[] = [
  {
    id: 1,
    name: 'Action',
    count: 2400,
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  },
  {
    id: 2,
    name: 'Sci-Fi',
    count: 1890,
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  },
  {
    id: 3,
    name: 'Drama',
    count: 3200,
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
  {
    id: 4,
    name: 'Horror',
    count: 1560,
    icon: '👻',
    gradient: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
  },
  {
    id: 5,
    name: 'Comedy',
    count: 2100,
    icon: '😂',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  },
  {
    id: 6,
    name: 'Romance',
    count: 980,
    icon: '❤️',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
  },
]

export const features: Feature[] = [
  {
    id: 1,
    title: 'Smart Search',
    description:
      'Find any movie instantly with our powerful search engine. Filter by genre, year, rating, director, and more.',
    icon: 'search',
  },
  {
    id: 2,
    title: 'Personal Watchlist',
    description:
      'Save movies to your personal watchlist and organize them into custom collections you can revisit anytime.',
    icon: 'list',
  },
  {
    id: 3,
    title: 'Ratings & Reviews',
    description:
      'Discover what critics and audiences think with aggregated scores, detailed reviews, and community ratings.',
    icon: 'star',
  },
  {
    id: 4,
    title: 'Where to Watch',
    description:
      'Know exactly which streaming platforms carry the film. We show every available option in real time.',
    icon: 'play',
  },
]
