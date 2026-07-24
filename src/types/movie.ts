export type MovieType = 'movie' | 'series' | 'episode'

export interface MovieSummary {
  id: string
  title: string
  year: string
  type: MovieType
  poster: string | null
}

export interface MovieDetails extends MovieSummary {
  plot: string
  genre: string[]
  runtime: string
  released: string
  director: string
  writer: string
  actors: string
  language: string
  country: string
  awards: string
  rated: string
  imdbRating: string | null
  imdbVotes: string | null
  metascore: string | null
  boxOffice: string | null
  production: string | null
  dvd: string | null
}

export interface MovieSearchParams {
  title: string
  type?: MovieType
  year?: string
  page?: number
}

export interface MovieSearchResult {
  items: MovieSummary[]
  totalResults: number
  page: number
  totalPages: number
}
