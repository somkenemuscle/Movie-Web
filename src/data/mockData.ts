export interface Movie {
  id: number
  title: string
  year: number
  rating: number
  genre: string
  image: string
}

export interface Genre {
  id: number
  name: string
  count: number
  gradient: string
}

export interface Feature {
  id: number
  title: string
  description: string
  icon: 'search' | 'bookmark' | 'sparkle' | 'shield'
}

export const featuredMovies: Movie[] = [
  {
    id: 1,
    title: 'Neon Horizon',
    year: 2025,
    rating: 8.7,
    genre: 'Sci-Fi',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Midnight Echo',
    year: 2024,
    rating: 9.1,
    genre: 'Thriller',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Golden Requiem',
    year: 2025,
    rating: 8.4,
    genre: 'Drama',
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Velvet Storm',
    year: 2024,
    rating: 8.9,
    genre: 'Action',
    image:
      'https://images.unsplash.com/photo-1574267432644-f6101a5a3c27?w=400&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Silent Canvas',
    year: 2025,
    rating: 8.2,
    genre: 'Mystery',
    image:
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Starlit Path',
    year: 2024,
    rating: 9.0,
    genre: 'Adventure',
    image:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
  },
]

export const popularGenres: Genre[] = [
  {
    id: 1,
    name: 'Action',
    count: 1240,
    gradient: 'linear-gradient(135deg, #e50914 0%, #7f1d1d 100%)',
  },
  {
    id: 2,
    name: 'Sci-Fi',
    count: 890,
    gradient: 'linear-gradient(135deg, #6366f1 0%, #312e81 100%)',
  },
  {
    id: 3,
    name: 'Drama',
    count: 1560,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #92400e 100%)',
  },
  {
    id: 4,
    name: 'Thriller',
    count: 720,
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  },
  {
    id: 5,
    name: 'Comedy',
    count: 980,
    gradient: 'linear-gradient(135deg, #ec4899 0%, #831843 100%)',
  },
  {
    id: 6,
    name: 'Horror',
    count: 640,
    gradient: 'linear-gradient(135deg, #dc2626 0%, #450a0a 100%)',
  },
]

export const features: Feature[] = [
  {
    id: 1,
    title: 'Instant Search',
    description:
      'Find any movie in seconds with our lightning-fast search powered by a comprehensive database.',
    icon: 'search',
  },
  {
    id: 2,
    title: 'Personal Watchlist',
    description:
      'Save movies you want to watch and build your perfect collection across all your devices.',
    icon: 'bookmark',
  },
  {
    id: 3,
    title: 'Smart Recommendations',
    description:
      'Discover hidden gems tailored to your taste with AI-powered suggestions you will love.',
    icon: 'sparkle',
  },
  {
    id: 4,
    title: 'Trusted Reviews',
    description:
      'Make informed choices with aggregated ratings and reviews from critics and fellow viewers.',
    icon: 'shield',
  },
]
