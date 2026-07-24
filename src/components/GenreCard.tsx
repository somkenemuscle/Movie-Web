import type { Genre } from '../data/mockData'

interface GenreCardProps {
  genre: Genre
  index?: number
}

export function GenreCard({ genre, index = 0 }: GenreCardProps) {
  return (
    <article
      className="relative py-6 px-5 rounded-xl overflow-hidden animate-fade-in-up min-h-[100px] flex items-center"
      style={{
        background: genre.gradient,
        animationDelay: `${index * 60}ms`,
      }}
    >
      <div className="relative z-[1] flex items-center gap-4">
        <span className="text-3xl leading-none flex-shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" aria-hidden="true">
          {genre.icon}
        </span>
        <div>
          <h3 className="text-lg font-bold text-white mb-0.5">{genre.name}</h3>
          <p className="text-[13px] text-white/75 font-medium">Search to explore {genre.count.toLocaleString()}+ titles</p>
        </div>
      </div>
    </article>
  )
}
