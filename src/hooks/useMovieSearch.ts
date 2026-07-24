import { useCallback, useEffect, useRef, useState } from 'react'
import { searchMovies } from '../services/movie.service'
import type { MovieSearchParams, MovieSearchResult } from '../types/movie'

interface UseMovieSearchState {
  data: MovieSearchResult | null
  isLoading: boolean
  error: string | null
}

const INITIAL_STATE: UseMovieSearchState = {
  data: null,
  isLoading: false,
  error: null,
}

export function useMovieSearch(params: MovieSearchParams | null) {
  const [state, setState] = useState<UseMovieSearchState>(INITIAL_STATE)
  const requestIdRef = useRef(0)
  const paramsRef = useRef(params)
  paramsRef.current = params

  const runSearch = useCallback((signal?: AbortSignal) => {
    const currentParams = paramsRef.current
    if (!currentParams || !currentParams.title.trim()) {
      setState(INITIAL_STATE)
      return
    }

    const requestId = ++requestIdRef.current
    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    searchMovies(currentParams, signal)
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
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    runSearch(controller.signal)
    return () => controller.abort()
  }, [params?.title, params?.type, params?.year, params?.page, runSearch])

  const retry = useCallback(() => {
    runSearch()
  }, [runSearch])

  return { ...state, retry }
}
