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
