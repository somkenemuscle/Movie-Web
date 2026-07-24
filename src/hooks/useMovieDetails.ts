import { useCallback, useEffect, useRef, useState } from 'react'
import { getMovieDetails } from '../services/movie.service'
import type { MovieDetails } from '../types/movie'

interface UseMovieDetailsState {
  data: MovieDetails | null
  isLoading: boolean
  error: string | null
}

export function useMovieDetails(imdbId: string | undefined) {
  const [state, setState] = useState<UseMovieDetailsState>({
    data: null,
    isLoading: Boolean(imdbId),
    error: null,
  })
  const requestIdRef = useRef(0)

  const fetchDetails = useCallback(
    (signal?: AbortSignal) => {
      if (!imdbId) {
        setState({ data: null, isLoading: false, error: null })
        return
      }

      const requestId = ++requestIdRef.current
      setState((prev) => ({ ...prev, isLoading: true, error: null }))

      getMovieDetails(imdbId, signal)
        .then((result) => {
          if (requestIdRef.current !== requestId) return
          setState({ data: result, isLoading: false, error: null })
        })
        .catch((error: unknown) => {
          if (error instanceof DOMException && error.name === 'AbortError') return
          if (requestIdRef.current !== requestId) return
          setState({
            data: null,
            isLoading: false,
            error: error instanceof Error ? error.message : 'Something went wrong.',
          })
        })
    },
    [imdbId],
  )

  useEffect(() => {
    const controller = new AbortController()
    fetchDetails(controller.signal)
    return () => controller.abort()
  }, [fetchDetails])

  const retry = useCallback(() => {
    fetchDetails()
  }, [fetchDetails])

  return { ...state, retry }
}
