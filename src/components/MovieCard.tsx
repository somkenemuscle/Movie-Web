import type { Movie } from '../data/mockData'

interface MovieCardProps {
  movie: Movie
  index?: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-[13px] font-bold text-gold [&_svg]:w-3 [&_svg]:h-3 [&_svg]:text-gold">
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.1L8 10.5l-3.7 1.95.7-4.1L2 5.5l4.15-.75z" />
      </svg>
      {rating.toFixed(1)}
    </span>
  )
}

export function MovieCard({ movie, index = 0 }: MovieCardProps) {
  return (
    <article
      className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden shadow-card animate-fade-in-up cursor-pointer transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[var(--shadow-lg),0_0_0_1px_var(--color-border-strong),0_0_40px_rgba(139,92,246,0.1)] hover:border-border-strong"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative h-[200px] overflow-hidden" style={{ background: movie.gradient }}>
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_30%,rgba(0,0,0,0.65)_100%)]"
          aria-hidden="true"
        />

        {movie.badge && (
          <span className="absolute top-3.5 left-3.5 z-[2] py-1 px-2.5 text-[10px] font-bold tracking-[0.06em] text-white bg-[image:var(--gradient-accent)] rounded-full uppercase">
            {movie.badge}
          </span>
        )}

        <span className="absolute top-3.5 right-3.5 z-[2] py-1 px-2.5 text-[11px] font-semibold text-white/90 bg-white/12 border border-white/20 rounded-full backdrop-blur-[8px]">
          {movie.genre}
        </span>

        <div
          className="absolute inset-0 z-[2] flex items-center justify-center opacity-0 bg-[rgba(139,92,246,0.2)] transition-opacity duration-250 group-hover:opacity-100 [&_svg]:w-[52px] [&_svg]:h-[52px] [&_svg]:text-white [&_svg]:drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>

      <div className="py-[18px] px-5 pb-3 flex-1">
        <h3 className="font-body text-[15px] font-bold text-text mb-2.5 leading-[1.3] whitespace-nowrap overflow-hidden text-ellipsis">
          {movie.title}
        </h3>
        <div className="flex items-center gap-1.5 flex-wrap">
          <StarRating rating={movie.rating} />
          <span className="w-[3px] h-[3px] rounded-full bg-text-subtle flex-shrink-0" aria-hidden="true" />
          <span className="text-xs font-medium text-text-muted">{movie.year}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-text-subtle flex-shrink-0" aria-hidden="true" />
          <span className="text-xs font-medium text-text-muted">{movie.duration}</span>
        </div>
      </div>

      <div className="py-2.5 px-5 pb-4 border-t border-border">
        <span className="text-[13px] font-semibold text-accent transition-[letter-spacing,color] duration-150 group-hover:tracking-[0.03em] group-hover:text-pink">
          View Details →
        </span>
      </div>
    </article>
  )
}
