import { useEffect, useState } from 'react'
import { getMovieDetails } from '../services/movie.service'
import type { MovieDetails } from '../types/movie'

interface UseFeaturedMoviesState {
  movies: MovieDetails[]
  isLoading: boolean
  error: string | null
}

export function useFeaturedMovies(imdbIds: string[]) {
  const [state, setState] = useState<UseFeaturedMoviesState>({
    movies: [],
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const controller = new AbortController()

    Promise.all(imdbIds.map((id) => getMovieDetails(id, controller.signal)))
      .then((movies) => {
        setState({ movies, isLoading: false, error: null })
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setState({
          movies: [],
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unable to load featured movies.',
        })
      })

    return () => controller.abort()
  }, [imdbIds])

  return state
}
