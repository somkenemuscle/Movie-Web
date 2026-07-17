import type { Movie } from '../data/mockData'
import './MovieCard.css'

interface MovieCardProps {
  movie: Movie
  index?: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="movie-card__rating">
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
      className="movie-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="movie-card__poster"
        style={{ background: movie.gradient }}
      >
        <div className="movie-card__poster-overlay" aria-hidden="true" />

        {movie.badge && (
          <span className="movie-card__badge">{movie.badge}</span>
        )}

        <span className="movie-card__genre-tag">{movie.genre}</span>

        <div className="movie-card__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{movie.title}</h3>
        <div className="movie-card__meta">
          <StarRating rating={movie.rating} />
          <span className="movie-card__dot" aria-hidden="true" />
          <span className="movie-card__year">{movie.year}</span>
          <span className="movie-card__dot" aria-hidden="true" />
          <span className="movie-card__duration">{movie.duration}</span>
        </div>
      </div>

      <div className="movie-card__footer">
        <span className="movie-card__cta">View Details →</span>
      </div>
    </article>
  )
}
