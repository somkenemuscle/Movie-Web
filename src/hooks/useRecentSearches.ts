import { useCallback, useState } from 'react'

const STORAGE_KEY = 'alkademy-cinevault:recent-searches'
const MAX_ENTRIES = 8

function readStoredSearches(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === 'string') : []
  } catch {
    return []
  }
}

export function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>(readStoredSearches)

  const addSearch = useCallback((term: string) => {
    const trimmed = term.trim()
    if (!trimmed) return

    setRecentSearches((prev) => {
      const next = [trimmed, ...prev.filter((s) => s.toLowerCase() !== trimmed.toLowerCase())].slice(
        0,
        MAX_ENTRIES,
      )
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // localStorage may be unavailable (private browsing, quota) — safe to ignore
      }
      return next
    })
  }, [])

  const clearSearches = useCallback(() => {
    setRecentSearches([])
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }, [])

  return { recentSearches, addSearch, clearSearches }
}
