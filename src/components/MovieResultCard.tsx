import { Link } from 'react-router-dom'
import type { MovieSummary } from '../types/movie'
import { PosterImage } from './PosterImage'

interface MovieResultCardProps {
  movie: MovieSummary
  index?: number
}

const TYPE_LABELS: Record<MovieSummary['type'], string> = {
  movie: 'Movie',
  series: 'Series',
  episode: 'Episode',
}

export function MovieResultCard({ movie, index = 0 }: MovieResultCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden shadow-card animate-fade-in-up cursor-pointer transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 focus-visible:-translate-y-2 hover:shadow-[var(--shadow-lg),0_0_0_1px_var(--color-border-strong),0_0_40px_rgba(139,92,246,0.1)] focus-visible:shadow-[var(--shadow-lg),0_0_0_1px_var(--color-border-strong),0_0_40px_rgba(139,92,246,0.1)] hover:border-border-strong focus-visible:border-border-strong focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative h-[260px] overflow-hidden">
        <PosterImage src={movie.poster} alt={`${movie.title} poster`} />
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]"
          aria-hidden="true"
        />
        <span className="absolute top-3.5 right-3.5 z-[2] py-1 px-2.5 text-[11px] font-semibold text-white/90 bg-white/12 border border-white/20 rounded-full backdrop-blur-[8px] capitalize">
          {TYPE_LABELS[movie.type]}
        </span>
        <div
          className="absolute inset-0 z-[2] flex items-center justify-center opacity-0 bg-[rgba(139,92,246,0.2)] transition-opacity duration-250 group-hover:opacity-100 [&_svg]:w-12 [&_svg]:h-12 [&_svg]:text-white [&_svg]:drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>

      <div className="pt-4 px-[18px] pb-2.5 flex-1">
        <h3 className="font-body text-[15px] font-bold text-text mb-2 leading-[1.35] line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-medium text-text-muted">{movie.year}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-text-subtle flex-shrink-0" aria-hidden="true" />
          <span className="text-xs font-medium text-text-subtle font-mono">{movie.id}</span>
        </div>
      </div>

      <div className="pt-2.5 px-[18px] pb-4 border-t border-border">
        <span className="text-[13px] font-semibold text-accent transition-[letter-spacing,color] duration-150 group-hover:tracking-[0.03em] group-hover:text-pink">
          View Details →
        </span>
      </div>
    </Link>
  )
}
