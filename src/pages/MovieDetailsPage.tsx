import { Link, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { SHIMMER_CLASSES } from '../components/MovieCardSkeleton'
import { PosterImage } from '../components/PosterImage'
import { StateMessage } from '../components/StateMessage'
import { useMovieDetails } from '../hooks/useMovieDetails'

const TYPE_LABELS: Record<string, string> = {
  movie: 'Movie',
  series: 'Series',
  episode: 'Episode',
}

export function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const { data: movie, isLoading, error, retry } = useMovieDetails(id)

  if (isLoading) {
    return (
      <div className="flex-1">
        <div
          className="container flex flex-col md:flex-row items-center md:items-start gap-12 pt-[calc(var(--nav-height)+48px)] pb-[72px]"
          aria-busy="true"
        >
          <div className={`${SHIMMER_CLASSES} flex-shrink-0 w-[200px] md:w-80 aspect-[2/3] rounded-xl`} />
          <div className="flex-1 flex flex-col gap-4 pt-2 w-full">
            <div className={`${SHIMMER_CLASSES} h-9 rounded-sm`} style={{ width: '60%' }} />
            <div className={`${SHIMMER_CLASSES} h-3.5 rounded-sm`} style={{ width: '30%' }} />
            <div className={`${SHIMMER_CLASSES} h-3.5 rounded-sm`} style={{ width: '100%' }} />
            <div className={`${SHIMMER_CLASSES} h-3.5 rounded-sm`} style={{ width: '90%' }} />
            <div className={`${SHIMMER_CLASSES} h-3.5 rounded-sm`} style={{ width: '75%' }} />
          </div>
        </div>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className="flex-1">
        <div className="container">
          <StateMessage
            variant="error"
            title="We couldn't load this title"
            description={error ?? 'This movie could not be found.'}
            actionLabel="Try Again"
            onAction={retry}
          />
        </div>
      </div>
    )
  }

  const infoItems: { label: string; value: string }[] = [
    { label: 'Director', value: movie.director },
    { label: 'Writer', value: movie.writer },
    { label: 'Actors', value: movie.actors },
    { label: 'Language', value: movie.language },
    { label: 'Country', value: movie.country },
    { label: 'Awards', value: movie.awards },
    { label: 'Box Office', value: movie.boxOffice ?? '' },
    { label: 'Production', value: movie.production ?? '' },
    { label: 'DVD Release', value: movie.dvd ?? '' },
    { label: 'IMDb Votes', value: movie.imdbVotes ?? '' },
  ].filter((item) => item.value)

  return (
    <div className="flex-1">
      <div className="container pt-[calc(var(--nav-height)+32px)]">
        <Link
          to="/search"
          className="text-sm font-medium text-text-muted transition-colors duration-150 hover:text-text"
        >
          ← Back to Search
        </Link>
      </div>

      <section className="container flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12 pt-8 pb-14 max-sm:px-4 max-sm:pt-6 max-sm:pb-[56px] animate-fade-in-up">
        <div className="flex-shrink-0 w-[200px] md:w-80 aspect-[2/3] rounded-xl overflow-hidden border border-border shadow-lg">
          <PosterImage src={movie.poster} alt={`${movie.title} poster`} />
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-4 pt-1">
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-2">
            <span className="py-[5px] px-3 text-[11px] font-bold tracking-[0.05em] uppercase text-white bg-[image:var(--gradient-accent)] rounded-full">
              {TYPE_LABELS[movie.type] ?? movie.type}
            </span>
            {movie.rated && (
              <span className="py-[5px] px-3 text-xs font-semibold text-text-muted bg-surface border border-border rounded-full">
                {movie.rated}
              </span>
            )}
            {movie.runtime && (
              <span className="py-[5px] px-3 text-xs font-semibold text-text-muted bg-surface border border-border rounded-full">
                {movie.runtime}
              </span>
            )}
          </div>

          <h1 className="text-[clamp(32px,4.5vw,48px)] tracking-[0.03em] leading-[1.1]">{movie.title}</h1>
          <p className="text-[15px] text-text-muted font-medium">{movie.released || movie.year}</p>

          <div className="flex items-center justify-center md:justify-start gap-6 my-1">
            {movie.imdbRating && (
              <div className="flex items-baseline gap-1.5">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-gold self-center"
                >
                  <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.1L8 10.5l-3.7 1.95.7-4.1L2 5.5l4.15-.75z" />
                </svg>
                <span className="text-xl font-bold text-text">{movie.imdbRating}</span>
                <span className="text-xs font-semibold text-text-subtle uppercase tracking-[0.04em]">IMDb</span>
              </div>
            )}
            {movie.metascore && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-text">{movie.metascore}</span>
                <span className="text-xs font-semibold text-text-subtle uppercase tracking-[0.04em]">
                  Metascore
                </span>
              </div>
            )}
          </div>

          {movie.genre.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="py-1.5 px-3.5 text-xs font-semibold text-accent bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.25)] rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>
          )}

          {movie.plot && <p className="text-[15px] leading-[1.85] text-text-muted max-w-[720px]">{movie.plot}</p>}
        </div>
      </section>

      {infoItems.length > 0 && (
        <section className="section bg-bg-elevated border-t border-border">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Details</span>
              <h2 className="section-title">More About This Title</h2>
            </div>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
              {infoItems.map((item) => (
                <div key={item.label} className="py-5 px-6 bg-surface">
                  <dt className="text-[11px] font-bold tracking-[0.08em] uppercase text-text-subtle mb-2">
                    {item.label}
                  </dt>
                  <dd className="m-0 text-sm leading-[1.6] text-text">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
