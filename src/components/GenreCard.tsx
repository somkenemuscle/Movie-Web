import type { Genre } from '../data/mockData'

interface GenreCardProps {
  genre: Genre
  index?: number
}

export function GenreCard({ genre, index = 0 }: GenreCardProps) {
  return (
    <article
      className="group relative py-6 px-5 rounded-xl overflow-hidden cursor-pointer animate-fade-in-up transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] min-h-[100px] flex items-center justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
      style={{
        background: genre.gradient,
        animationDelay: `${index * 60}ms`,
      }}
    >
      <div
        className="absolute -top-[30%] -right-[10%] w-[60%] h-[130%] bg-white/12 rounded-full blur-3xl pointer-events-none transition-opacity duration-250 opacity-0 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative z-[1] flex items-center gap-4">
        <span className="text-3xl leading-none flex-shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" aria-hidden="true">
          {genre.icon}
        </span>
        <div>
          <h3 className="text-lg font-bold text-white mb-0.5">{genre.name}</h3>
          <p className="text-[13px] text-white/75 font-medium">{genre.count.toLocaleString()}+ movies</p>
        </div>
      </div>
      <span
        className="relative z-[1] text-xl text-white/60 transition-[transform,color] duration-250 group-hover:translate-x-1 group-hover:text-white"
        aria-hidden="true"
      >
        →
      </span>
    </article>
  )
}
