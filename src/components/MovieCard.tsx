import type { Movie } from '../data/mockData'
import './MovieCard.css'

interface MovieCardProps {
  movie: Movie
  index?: number
}

export function MovieCard({ movie, index = 0 }: MovieCardProps) {
  return (
    <article
      className="movie-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="movie-card__poster-wrap">
        <img
          src={movie.image}
          alt={`${movie.title} poster`}
          className="movie-card__poster"
          loading="lazy"
        />
        <div className="movie-card__overlay">
          <span className="movie-card__rating">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {movie.rating}
          </span>
        </div>
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__meta">
          {movie.year} · {movie.genre}
        </p>
      </div>
    </article>
  )
}
