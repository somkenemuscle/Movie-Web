import { httpClient } from './client'

const OMDB_BASE_URL = import.meta.env.VITE_OMDB_BASE_URL || 'https://www.omdbapi.com/'
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY

export type OmdbType = 'movie' | 'series' | 'episode'

export interface OmdbSearchResultItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface OmdbSearchResponse {
  Search?: OmdbSearchResultItem[]
  totalResults?: string
  Response: 'True' | 'False'
  Error?: string
}

export interface OmdbRating {
  Source: string
  Value: string
}

export interface OmdbMovieDetail {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings?: OmdbRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response: 'True' | 'False'
  Error?: string
}

export interface OmdbSearchParams {
  title: string
  type?: OmdbType
  year?: string
  page?: number
}

function assertApiKey(): void {
  if (!OMDB_API_KEY) {
    throw new Error(
      'Missing OMDb API key. Set VITE_OMDB_API_KEY in your .env file.',
    )
  }
}

export function searchTitles(
  params: OmdbSearchParams,
  signal?: AbortSignal,
): Promise<OmdbSearchResponse> {
  assertApiKey()
  return httpClient.get<OmdbSearchResponse>(OMDB_BASE_URL, {
    signal,
    params: {
      apikey: OMDB_API_KEY,
      s: params.title,
      type: params.type,
      y: params.year,
      page: params.page,
    },
  })
}

export function getTitleById(
  imdbId: string,
  signal?: AbortSignal,
): Promise<OmdbMovieDetail> {
  assertApiKey()
  return httpClient.get<OmdbMovieDetail>(OMDB_BASE_URL, {
    signal,
    params: {
      apikey: OMDB_API_KEY,
      i: imdbId,
      plot: 'full',
    },
  })
}
