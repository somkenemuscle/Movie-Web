import { getTitleById, searchTitles } from '../api/omdb'
import type { OmdbMovieDetail, OmdbSearchResultItem } from '../api/omdb'
import type {
  MovieDetails,
  MovieSearchParams,
  MovieSearchResult,
  MovieSummary,
  MovieType,
} from '../types/movie'

/**
 * This is the only module the rest of the app talks to for movie data.
 * It maps the current OMDb provider onto our domain types — swapping in a
 * future backend means changing the calls below, not any hook or component.
 */

export const RESULTS_PER_PAGE = 10

/**
 * OMDb returns Response: "False" with this exact message when a query is too
 * broad to narrow down (e.g. a single common word). It's not a failure —
 * callers should prompt the user to refine their search, not show a retry.
 */
export const SEARCH_TOO_BROAD_MESSAGE =
  'Your search matched too many titles. Try a more specific title, or narrow it down with the year or type filters.'

function toMovieType(type: string | undefined): MovieType {
  return type === 'series' || type === 'episode' ? type : 'movie'
}

function orNull(value: string | undefined): string | null {
  return !value || value === 'N/A' ? null : value
}

function orEmpty(value: string | undefined): string {
  return !value || value === 'N/A' ? '' : value
}

function toMovieSummary(item: OmdbSearchResultItem): MovieSummary {
  return {
    id: item.imdbID,
    title: item.Title,
    year: item.Year,
    type: toMovieType(item.Type),
    poster: orNull(item.Poster),
  }
}

function toMovieDetails(item: OmdbMovieDetail): MovieDetails {
  return {
    id: item.imdbID,
    title: item.Title,
    year: item.Year,
    type: toMovieType(item.Type),
    poster: orNull(item.Poster),
    plot: orEmpty(item.Plot),
    genre: orEmpty(item.Genre)
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean),
    runtime: orEmpty(item.Runtime),
    released: orEmpty(item.Released),
    director: orEmpty(item.Director),
    writer: orEmpty(item.Writer),
    actors: orEmpty(item.Actors),
    language: orEmpty(item.Language),
    country: orEmpty(item.Country),
    awards: orEmpty(item.Awards),
    rated: orEmpty(item.Rated),
    imdbRating: orNull(item.imdbRating),
    imdbVotes: orNull(item.imdbVotes),
    metascore: orNull(item.Metascore),
    boxOffice: orNull(item.BoxOffice),
    production: orNull(item.Production),
    dvd: orNull(item.DVD),
  }
}

export async function searchMovies(
  params: MovieSearchParams,
  signal?: AbortSignal,
): Promise<MovieSearchResult> {
  const page = params.page ?? 1
  const response = await searchTitles(
    { title: params.title, type: params.type, year: params.year, page },
    signal,
  )

  if (response.Response === 'False') {
    if (response.Error === 'Movie not found!') {
      return { items: [], totalResults: 0, page, totalPages: 0 }
    }
    if (response.Error === 'Too many results.') {
      throw new Error(SEARCH_TOO_BROAD_MESSAGE)
    }
    throw new Error(response.Error ?? 'Unable to search movies right now.')
  }

  const items = (response.Search ?? []).map(toMovieSummary)
  const totalResults = Number(response.totalResults) || items.length
  const totalPages = Math.max(1, Math.ceil(totalResults / RESULTS_PER_PAGE))

  return { items, totalResults, page, totalPages }
}

export async function getMovieDetails(
  imdbId: string,
  signal?: AbortSignal,
): Promise<MovieDetails> {
  const response = await getTitleById(imdbId, signal)

  if (response.Response === 'False') {
    throw new Error(response.Error ?? 'Unable to load this title right now.')
  }

  return toMovieDetails(response)
}
