import type { FormEvent } from 'react'
import { Button } from './Button'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isLoading?: boolean
  placeholder?: string
}

export function SearchBar({
  value,
  onChange,
  onSubmit,
  isLoading = false,
  placeholder = 'Search for a movie, series, or episode…',
}: SearchBarProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form
      className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full py-3 px-3.5 sm:py-2 sm:pr-2 sm:pl-5 bg-surface border-[1.5px] border-border-strong rounded-2xl sm:rounded-full transition-[border-color,box-shadow] duration-250 focus-within:border-accent focus-within:shadow-[0_0_0_4px_var(--color-accent-glow)]"
      onSubmit={handleSubmit}
      role="search"
    >
      <span className="hidden sm:flex text-text-subtle flex-shrink-0 [&_svg]:w-5 [&_svg]:h-5" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        type="text"
        className="flex-1 min-w-0 py-1.5 sm:py-3 text-[15px] font-body text-text bg-transparent border-none outline-none placeholder:text-text-subtle"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search movies"
        autoComplete="off"
      />

      {value && (
        <button
          type="button"
          className="flex items-center justify-center w-7 h-7 flex-shrink-0 text-text-subtle rounded-full transition-colors duration-150 hover:text-text hover:bg-[rgba(139,92,246,0.12)] [&_svg]:w-4 [&_svg]:h-4"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      <Button type="submit" variant="primary" size="md" className="flex-shrink-0 w-full order-3 sm:w-auto sm:order-none">
        {isLoading ? 'Searching…' : 'Search'}
      </Button>
    </form>
  )
}
