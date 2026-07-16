import type { Genre } from '../data/mockData'
import './GenreCard.css'

interface GenreCardProps {
  genre: Genre
  index?: number
}

export function GenreCard({ genre, index = 0 }: GenreCardProps) {
  return (
    <article
      className="genre-card"
      style={{
        background: genre.gradient,
        animationDelay: `${index * 60}ms`,
      }}
    >
      <div className="genre-card__content">
        <h3 className="genre-card__name">{genre.name}</h3>
        <p className="genre-card__count">{genre.count.toLocaleString()} titles</p>
      </div>
      <div className="genre-card__glow" aria-hidden="true" />
    </article>
  )
}
