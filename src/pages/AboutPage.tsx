import { Button } from '../components/Button'
import { FeatureCard } from '../components/FeatureCard'
import { Footer } from '../components/Footer'
import type { Feature } from '../data/mockData'

const aboutFeatures: Feature[] = [
  {
    id: 1,
    title: 'Smart Search',
    description:
      'Look up any movie, series, or episode by title with instant, debounced search that keeps typing smooth.',
    icon: 'search',
  },
  {
    id: 2,
    title: 'Rich Movie Details',
    description:
      'Dive into plot, cast, crew, ratings, box office and more for every title in one clean, focused view.',
    icon: 'star',
  },
  {
    id: 3,
    title: 'Powerful Filters',
    description:
      'Narrow results by type and year, then page through results without losing your search context.',
    icon: 'list',
  },
  {
    id: 4,
    title: 'Built for Speed',
    description:
      'Skeleton loaders, graceful fallbacks, and responsive layouts keep the experience fast on any device.',
    icon: 'play',
  },
]

const roadmapItems = [
  {
    title: 'Personal Watchlists',
    description: 'Save titles to custom lists and pick up right where you left off.',
  },
  {
    title: 'Ratings & Reviews',
    description: 'Community reviews layered on top of IMDb and Metascore data.',
  },
  {
    title: 'Personalized Recommendations',
    description: 'Suggestions tuned to your search history and saved titles.',
  },
  {
    title: 'Own Backend Migration',
    description:
      'A dedicated Alkademy CineVault API will sit alongside — and eventually replace — the OMDb integration, with no visible change to the UI.',
  },
]

export function AboutPage() {
  return (
    <div className="flex-1">
      <section className="relative pt-[calc(var(--nav-height)+88px)] pb-[72px] overflow-hidden bg-bg">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute rounded-full blur-[90px] animate-pulse-soft -top-[20%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.16)_0%,transparent_65%)]" />
          <div className="absolute rounded-full blur-[90px] animate-pulse-soft [animation-delay:3s] -bottom-[30%] right-[5%] w-[460px] h-[460px] bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_65%)]" />
        </div>

        <div className="container relative z-[1] max-w-[720px]">
          <span className="inline-flex items-center gap-2 py-[7px] px-4 mb-6 text-xs font-semibold tracking-[0.04em] text-text-muted bg-[rgba(139,92,246,0.08)] border border-border-strong rounded-full">
            <span
              className="w-[7px] h-[7px] bg-accent rounded-full shadow-[0_0_0_3px_rgba(139,92,246,0.25)] animate-[pulse-soft_2s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            About the Project
          </span>
          <h1 className="text-[clamp(36px,6vw,60px)] tracking-[0.04em] leading-[1.1] mb-5 animate-[fadeInUp_0.6s_ease_0.1s_both]">
            What is{' '}
            <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
              Alkademy CineVault
            </span>
            ?
          </h1>
          <p className="text-[17px] text-text-muted leading-[1.8] animate-[fadeInUp_0.6s_ease_0.2s_both]">
            Alkademy CineVault is a movie search and discovery app built to make finding
            reliable, detailed information about films, series, and episodes fast and
            enjoyable — all wrapped in a clean, modern interface.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Features</span>
            <h2 className="section-title">Everything You Need to Explore Film</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A focused toolkit for searching and understanding movies — no clutter, no
              distractions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aboutFeatures.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg-elevated border-t border-b border-border">
        <div className="container flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14">
          <div className="flex-1 min-w-0">
            <span className="section-label">Under the Hood</span>
            <h2 className="section-title !my-2 !mb-4">Powered by the OMDb API</h2>
            <p className="section-subtitle !max-w-none !mb-3.5">
              Every search, poster, and detail page in Alkademy CineVault is sourced live
              from the{' '}
              <a
                href="https://www.omdbapi.com/"
                target="_blank"
                rel="noreferrer"
                className="text-accent font-semibold underline underline-offset-2 transition-colors duration-150 hover:text-pink"
              >
                Open Movie Database (OMDb) API
              </a>
              , a community-driven catalog covering hundreds of thousands of titles. That
              means ratings, cast lists, and release details stay accurate and current
              without us maintaining our own dataset.
            </p>
            <p className="section-subtitle !max-w-none">
              The integration lives behind a dedicated API layer, so swapping OMDb for a
              future Alkademy backend — or running both side by side — is a small,
              contained change rather than a rewrite.
            </p>
          </div>
          <div
            className="flex-shrink-0 flex flex-col items-center justify-center gap-1.5 w-full md:w-[200px] h-[140px] md:h-[200px] text-center bg-surface border border-border-strong rounded-xl shadow-card"
            aria-hidden="true"
          >
            <span className="text-4xl mb-1">🎞️</span>
            <p className="font-display text-xl tracking-[0.06em] text-text">OMDb API</p>
            <p className="text-xs text-text-muted">Live movie data</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What&apos;s Next</span>
            <h2 className="section-title">Future Roadmap</h2>
            <p className="section-subtitle">
              Alkademy CineVault is an evolving MVP. Here&apos;s what&apos;s planned next.
            </p>
          </div>

          <ol className="list-none m-0 p-0 flex flex-col gap-1 max-w-[720px]">
            {roadmapItems.map((item, index) => (
              <li
                key={item.title}
                className="flex items-start gap-5 py-[22px] px-1 border-b border-border last:border-b-0 animate-fade-in-up"
              >
                <span className="flex-shrink-0 font-display text-2xl tracking-[0.05em] text-accent opacity-70 min-w-10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-body text-base font-bold text-text mb-1.5">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-[1.7]">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-bg-elevated border-t border-border">
        <div className="container flex flex-col gap-3">
          <span className="section-label">Our Motivation</span>
          <h2 className="section-title !my-1">Why This Project Exists</h2>
          <p className="section-subtitle" style={{ maxWidth: '640px' }}>
            Alkademy CineVault started as a way to pair a real, production-style UI with a
            genuine data source — proving out clean architecture, thoughtful UX, and solid
            engineering practices on a problem everyone understands: finding a good movie.
            It&apos;s built to grow, from a single API integration today into a full
            platform tomorrow, without ever needing a rewrite.
          </p>
        </div>
      </section>

      <section className="pt-16 pb-24 bg-bg">
        <div className="container">
          <div className="relative text-center py-20 px-8 max-sm:py-[52px] max-sm:px-6 bg-[image:var(--gradient-accent)] rounded-2xl overflow-hidden">
            <div
              className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,transparent_65%)] pointer-events-none"
              aria-hidden="true"
            />
            <div className="text-[52px] mb-5 relative z-[1] block" aria-hidden="true">
              🍿
            </div>
            <h2 className="text-[clamp(32px,5vw,56px)] mb-4 relative z-[1] text-white tracking-[0.06em]">
              Ready to Find Your Next Watch?
            </h2>
            <p className="text-base text-white/82 mb-9 relative z-[1] max-w-[480px] mx-auto leading-[1.75]">
              Jump into search and explore thousands of movies, series, and episodes.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap relative z-[1]">
              <Button
                to="/search"
                variant="primary"
                size="lg"
                className="!bg-white !text-accent !shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:!bg-[#f5f3ff] hover:!shadow-[0_8px_32px_rgba(0,0,0,0.28)] hover:!brightness-100"
              >
                Start Searching
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container flex items-center justify-center gap-4 py-10 px-6">
        <a
          href="https://www.alkademy.com/contact"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-text-muted transition-colors duration-150 hover:text-accent"
        >
          Contact
        </a>
        <span className="w-1 h-1 rounded-full bg-border-strong" aria-hidden="true" />
        <a
          href="https://www.alkademy.com/privacy"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-text-muted transition-colors duration-150 hover:text-accent"
        >
          Privacy
        </a>
      </div>

      <Footer />
    </div>
  )
}
