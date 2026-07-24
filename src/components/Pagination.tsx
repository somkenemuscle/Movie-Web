interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

function getPageNumbers(page: number, totalPages: number): (number | 'ellipsis')[] {
  const pages = new Set<number>([1, totalPages, page, page - 1, page + 1])
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b)

  const result: (number | 'ellipsis')[] = []
  let previous = 0
  for (const p of sorted) {
    if (previous && p - previous > 1) {
      result.push('ellipsis')
    }
    result.push(p)
    previous = p
  }
  return result
}

const NAV_PAGE_CLASSES =
  'flex items-center justify-center min-w-[34px] h-[34px] sm:min-w-10 sm:h-10 px-2 sm:px-3 text-[13px] sm:text-sm font-semibold ' +
  'text-text-muted bg-surface border border-border rounded-md transition-[color,background,border-color,transform] duration-150'

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const pageNumbers = getPageNumbers(page, totalPages)

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Search results pages">
      <button
        type="button"
        className={`${NAV_PAGE_CLASSES} disabled:opacity-35 disabled:cursor-not-allowed enabled:hover:text-text enabled:hover:bg-[rgba(139,92,246,0.1)] enabled:hover:border-border-strong enabled:hover:-translate-y-px`}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        ←
      </button>

      <div className="flex items-center gap-1">
        {pageNumbers.map((p, i) =>
          p === 'ellipsis' ? (
            <span
              key={`ellipsis-${i}`}
              className="flex items-center justify-center min-w-6 text-text-subtle text-sm"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              className={
                p === page
                  ? `${NAV_PAGE_CLASSES} text-white bg-[image:var(--gradient-accent)] border-transparent shadow-[0_4px_16px_var(--color-accent-glow)]`
                  : `${NAV_PAGE_CLASSES} hover:text-text hover:bg-[rgba(139,92,246,0.1)] hover:border-border-strong hover:-translate-y-px`
              }
              onClick={() => onPageChange(p)}
              aria-current={p === page ? 'page' : undefined}
            >
              {p}
            </button>
          ),
        )}
      </div>

      <button
        type="button"
        className={`${NAV_PAGE_CLASSES} disabled:opacity-35 disabled:cursor-not-allowed enabled:hover:text-text enabled:hover:bg-[rgba(139,92,246,0.1)] enabled:hover:border-border-strong enabled:hover:-translate-y-px`}
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        →
      </button>
    </nav>
  )
}
