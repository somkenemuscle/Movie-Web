import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { MovieCardSkeletonGrid } from '../components/MovieCardSkeleton'
import { MovieResultCard } from '../components/MovieResultCard'
import { Pagination } from '../components/Pagination'
import { SearchBar } from '../components/SearchBar'
import { SELECT_FIELD_CLASSES, SELECT_LABEL_CLASSES, Select } from '../components/Select'
import { StateMessage } from '../components/StateMessage'
import { useDebounce } from '../hooks/useDebounce'
import { useMovieSearch } from '../hooks/useMovieSearch'
import { RESULTS_PER_PAGE, SEARCH_TOO_BROAD_MESSAGE } from '../services/movie.service'
import type { MovieType } from '../types/movie'

type SortOption = 'relevance' | 'title-asc' | 'year-desc' | 'year-asc'

const TYPE_OPTIONS = [
  { label: 'All Types', value: '' },
  { label: 'Movies', value: 'movie' },
  { label: 'Series', value: 'series' },
  { label: 'Episodes', value: 'episode' },
]

const SORT_OPTIONS = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Title (A–Z)', value: 'title-asc' },
  { label: 'Year (Newest)', value: 'year-desc' },
  { label: 'Year (Oldest)', value: 'year-asc' },
]

function parseYear(value: string): number {
  const match = value.match(/\d{4}/)
  return match ? Number(match[0]) : 0
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState<SortOption>('relevance')

  const query = searchParams.get('q') ?? ''
  const type = (searchParams.get('type') as MovieType | null) ?? undefined
  const year = searchParams.get('year') ?? undefined
  const page = Number(searchParams.get('page')) || 1

  const [rawInput, setRawInput] = useState(query)
  const debouncedInput = useDebounce(rawInput, 450)
  const committedQueryRef = useRef(query)

  const updateSearchParams = useCallback(
    (updates: Record<string, string | undefined>) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev)
        for (const [key, value] of Object.entries(updates)) {
          if (value) next.set(key, value)
          else next.delete(key)
        }
        return next
      })
    },
    [setSearchParams],
  )

  // Keep the input synced when the URL query changes from outside typing —
  // browser back/forward navigation. (handleSubmit updates committedQueryRef
  // synchronously itself, so this doesn't need to race the debounce effect
  // below for that case.)
  useEffect(() => {
    const urlQuery = searchParams.get('q') ?? ''
    committedQueryRef.current = urlQuery
    setRawInput((prev) => (prev === urlQuery ? prev : urlQuery))
  }, [searchParams])

  // Debounced live search as the user types. Compares against the last
  // *committed* query (not the live URL) so it only fires in response to an
  // actual debounce tick, never as a side effect of some other query change.
  useEffect(() => {
    if (debouncedInput === committedQueryRef.current) return
    committedQueryRef.current = debouncedInput
    updateSearchParams({ q: debouncedInput.trim() || undefined, page: undefined })
  }, [debouncedInput, updateSearchParams])

  const searchQueryParams = useMemo(
    () => (query.trim() ? { title: query, type, year, page } : null),
    [query, type, year, page],
  )

  const { data, isLoading, error, retry } = useMovieSearch(searchQueryParams)

  const sortedItems = useMemo(() => {
    if (!data) return []
    const items = [...data.items]
    if (sortBy === 'title-asc') {
      items.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'year-desc') {
      items.sort((a, b) => parseYear(b.year) - parseYear(a.year))
    } else if (sortBy === 'year-asc') {
      items.sort((a, b) => parseYear(a.year) - parseYear(b.year))
    }
    return items
  }, [data, sortBy])

  const handleSubmit = () => {
    const next = rawInput.trim()
    committedQueryRef.current = next
    updateSearchParams({ q: next || undefined, page: undefined })
  }

  const handlePageChange = (nextPage: number) => {
    updateSearchParams({ page: nextPage > 1 ? String(nextPage) : undefined })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const hasActiveFilters = Boolean(type || year)

  const showIdleState = !query.trim()
  const showSkeletons = isLoading && !data
  const showError = Boolean(error) && !isLoading
  const showEmpty = !showIdleState && !isLoading && !error && data && data.items.length === 0
  const showResults = !showIdleState && !isLoading && !error && data && data.items.length > 0

  return (
    <div className="flex-1">
      <section className="pt-[calc(var(--nav-height)+56px)] pb-10 bg-bg border-b border-border">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Search</span>
            <h1 className="section-title">Find Your Next Watch</h1>
            <p className="section-subtitle" style={{ margin: '0 auto 8px' }}>
              Search thousands of movies, series, and episodes powered by the OMDb API.
            </p>
          </div>

          <div className="max-w-[640px] mx-auto mb-6">
            <SearchBar
              value={rawInput}
              onChange={setRawInput}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>

          <div className="flex items-end justify-center flex-wrap gap-4 max-w-[720px] mx-auto">
            <Select
              id="type-filter"
              label="Type"
              value={type ?? ''}
              options={TYPE_OPTIONS}
              onChange={(value) => updateSearchParams({ type: value || undefined, page: undefined })}
              className="w-full sm:w-[calc(50%-8px)] md:w-[170px]"
            />
            <div className="flex flex-col gap-[7px] w-full sm:w-[calc(50%-8px)] md:w-[150px]">
              <label htmlFor="year-filter" className={SELECT_LABEL_CLASSES}>
                Year
              </label>
              <input
                id="year-filter"
                type="number"
                className={SELECT_FIELD_CLASSES}
                placeholder="e.g. 2014"
                value={year ?? ''}
                min={1900}
                max={2100}
                onChange={(e) =>
                  updateSearchParams({ year: e.target.value || undefined, page: undefined })
                }
              />
            </div>
            <Select
              id="sort-by"
              label="Sort"
              value={sortBy}
              options={SORT_OPTIONS}
              onChange={(value) => setSortBy(value as SortOption)}
              className="w-full sm:w-[calc(50%-8px)] md:w-[170px]"
            />
            {hasActiveFilters && (
              <button
                type="button"
                className="py-3 px-1 text-[13px] font-semibold text-accent transition-colors duration-150 hover:text-pink"
                onClick={() => updateSearchParams({ type: undefined, year: undefined, page: undefined })}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="section !pt-14">
        <div className="container">
          {showIdleState && (
            <StateMessage
              title="Search for a movie, series, or episode"
              description="Start typing a title above to see results from the OMDb catalog."
            />
          )}

          {showSkeletons && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 sm:gap-6">
              <MovieCardSkeletonGrid count={RESULTS_PER_PAGE} />
            </div>
          )}

          {showError && error === SEARCH_TOO_BROAD_MESSAGE && (
            <StateMessage title="Narrow your search" description={error} />
          )}

          {showError && error !== SEARCH_TOO_BROAD_MESSAGE && (
            <StateMessage
              variant="error"
              title="Something went wrong"
              description={error ?? undefined}
              actionLabel="Try Again"
              onAction={retry}
            />
          )}

          {showEmpty && (
            <StateMessage
              title="No results found"
              description={`We couldn't find anything matching "${query}". Try a different title or check your spelling.`}
            />
          )}

          {showResults && data && (
            <>
              <p className="text-sm text-text-muted mb-6">
                {data.totalResults.toLocaleString()} result{data.totalResults === 1 ? '' : 's'} for
                &nbsp;&ldquo;{query}&rdquo;
              </p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 sm:gap-6">
                {sortedItems.map((movie, index) => (
                  <MovieResultCard key={movie.id} movie={movie} index={index} />
                ))}
              </div>
              <Pagination page={data.page} totalPages={data.totalPages} onPageChange={handlePageChange} />
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
