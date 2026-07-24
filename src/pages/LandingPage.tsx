import { Button } from '../components/Button'
import { MovieCard } from '../components/MovieCard'
import { GenreCard } from '../components/GenreCard'
import { FeatureCard } from '../components/FeatureCard'
import { Footer } from '../components/Footer'
import { featuredMovies, popularGenres, features } from '../data/mockData'

export function LandingPage() {
  return (
    <div className="flex-1">
      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center pt-[var(--nav-height)] overflow-hidden bg-bg"
      >
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute rounded-full blur-[90px] animate-pulse-soft -top-[15%] -right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,transparent_65%)]" />
          <div className="absolute rounded-full blur-[90px] animate-pulse-soft [animation-delay:3s] -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(236,72,153,0.12)_0%,transparent_65%)]" />
          <div className="absolute rounded-full blur-[90px] animate-pulse-soft [animation-delay:6s] top-[30%] left-[35%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
        </div>

        <div className="relative z-[1] flex flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-16 max-w-[var(--container-max)] mx-auto w-full px-6 pt-[60px] pb-[60px] lg:pt-20 lg:pb-20">
          {/* Left: Content */}
          <div className="flex-1 min-w-0 max-w-full lg:max-w-[580px]">
            <div className="inline-flex items-center gap-2 py-[7px] px-4 mb-7 text-xs font-semibold tracking-[0.04em] text-accent bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.28)] rounded-full animate-fade-in-up">
              <span
                className="w-[7px] h-[7px] bg-accent rounded-full shadow-[0_0_0_3px_rgba(139,92,246,0.25)] animate-[pulse-soft_2s_ease-in-out_infinite] flex-shrink-0"
                aria-hidden="true"
              />
              10,000+ Movies &amp; Series Worldwide
            </div>

            <h1 className="text-[clamp(52px,7.5vw,96px)] max-sm:text-[clamp(44px,11vw,64px)] tracking-[0.06em] mb-6 animate-[fadeInUp_0.6s_ease_0.1s_both] leading-none text-text uppercase">
              Discover Your
              <br />
              <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
                Next Favorite Film
              </span>
            </h1>

            <p className="text-[clamp(15px,1.8vw,17px)] text-text-muted leading-[1.8] mb-9 max-w-[500px] animate-[fadeInUp_0.6s_ease_0.2s_both] font-normal">
              Alkademy CineVault is the ultimate movie discovery platform. Search by
              genre, mood, or year — and always know exactly where to watch.
            </p>

            <div className="flex flex-wrap gap-3 mb-[52px] animate-[fadeInUp_0.6s_ease_0.3s_both]">
              <Button to="/signup" variant="primary" size="lg">
                Get Started Free
              </Button>
              <Button to="/signup" variant="secondary" size="lg">
                Browse Movies
              </Button>
            </div>

            <div className="flex items-center gap-6 max-sm:gap-4 animate-[fadeInUp_0.6s_ease_0.4s_both]">
              <div className="flex flex-col gap-[3px]">
                <span className="font-display text-[26px] max-sm:text-[22px] font-normal tracking-[0.06em] text-text leading-none">
                  10K+
                </span>
                <span className="text-[11px] text-text-subtle font-medium uppercase tracking-[0.1em]">Movies</span>
              </div>
              <div className="w-px h-8 bg-border-strong" />
              <div className="flex flex-col gap-[3px]">
                <span className="font-display text-[26px] max-sm:text-[22px] font-normal tracking-[0.06em] text-text leading-none">
                  50+
                </span>
                <span className="text-[11px] text-text-subtle font-medium uppercase tracking-[0.1em]">Genres</span>
              </div>
              <div className="w-px h-8 bg-border-strong" />
              <div className="flex flex-col gap-[3px]">
                <span className="font-display text-[26px] max-sm:text-[22px] font-normal tracking-[0.06em] text-text leading-none">
                  2M+
                </span>
                <span className="text-[11px] text-text-subtle font-medium uppercase tracking-[0.1em]">Users</span>
              </div>
            </div>
          </div>

          {/* Right: Cinematic poster visual */}
          <div
            className="relative w-[440px] h-[500px] max-lg:w-full max-lg:max-w-[440px] max-lg:h-[420px] max-lg:self-center max-sm:hidden flex-shrink-0 animate-[fadeIn_0.8s_ease_0.5s_both]"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,transparent_65%)] pointer-events-none blur-[24px]" />

            {/* Back poster — left */}
            <div className="absolute rounded-2xl overflow-hidden w-[158px] h-[240px] top-20 left-2 [background:linear-gradient(160deg,#1a0533_0%,#3b0764_50%,#5b21b6_100%)] rotate-[-10deg] z-[1] animate-[float-rotate_5.5s_ease-in-out_infinite] shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 [background:repeating-linear-gradient(to_bottom,transparent_0px,transparent_30px,rgba(255,255,255,0.04)_30px,rgba(255,255,255,0.04)_31px)]" />
            </div>

            {/* Back poster — right */}
            <div className="absolute rounded-2xl overflow-hidden w-[152px] h-[228px] top-[100px] right-7 [background:linear-gradient(160deg,#1a1040_0%,#2d1b69_55%,#4c1d95_100%)] rotate-[7deg] z-[2] animate-[float-right_5s_ease-in-out_1s_infinite] shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 [background:repeating-linear-gradient(to_bottom,transparent_0px,transparent_30px,rgba(255,255,255,0.04)_30px,rgba(255,255,255,0.04)_31px)]" />
            </div>

            {/* Main featured poster */}
            <div className="absolute rounded-2xl overflow-hidden w-[212px] h-[316px] top-[50px] left-[108px] z-[3] [background:linear-gradient(160deg,#0f0c29_0%,#1e1070_40%,#2d1b69_70%,#4c1d95_100%)] flex flex-col animate-[float_5s_ease-in-out_0.5s_infinite] shadow-[0_24px_64px_rgba(0,0,0,0.7),0_0_0_1px_rgba(139,92,246,0.2),0_0_60px_rgba(139,92,246,0.12)]">
              <div className="flex flex-col h-full p-4">
                <div className="flex items-center justify-between mb-auto">
                  <span className="py-1 px-2.5 text-[11px] font-semibold text-white/90 bg-white/15 border border-white/20 rounded-full backdrop-blur-[8px]">
                    Sci-Fi
                  </span>
                  <span className="text-xs text-white/45 font-medium">2014</span>
                </div>
                <div className="mb-3">
                  <p className="font-display text-[22px] font-normal tracking-[0.08em] text-white m-0 mb-1 leading-[1.15] uppercase">
                    Interstellar
                  </p>
                  <p className="text-[11px] text-white/45 m-0 italic">Beyond the horizon</p>
                </div>
                <div className="inline-flex items-center gap-[5px] text-[13px] font-bold text-gold bg-[rgba(251,191,36,0.15)] border border-[rgba(251,191,36,0.25)] rounded-full py-1 px-2.5 self-start [&_svg]:w-3 [&_svg]:h-3">
                  <svg viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1l1.54 3.13L12 4.73l-2.5 2.43.59 3.42L7 9l-3.09 1.62.59-3.42L2 4.73l3.46-.6z" />
                  </svg>
                  8.7
                </div>
              </div>
            </div>

            {/* Floating: IMDb badge */}
            <div className="absolute flex items-center gap-2.5 py-3 px-4 bg-surface border border-border-strong rounded-[14px] shadow-[var(--shadow-lg),0_0_0_1px_rgba(139,92,246,0.08)] z-[4] top-3 right-3 animate-[float_4.5s_ease-in-out_2s_infinite]">
              <span className="text-[22px] leading-none">⭐</span>
              <div>
                <p className="text-sm font-bold text-text m-0 leading-[1.2]">9.0 / 10</p>
                <p className="text-[11px] text-text-subtle font-medium m-0">Top Rated</p>
              </div>
            </div>

            {/* Floating: Now Playing badge */}
            <div className="absolute flex items-center gap-2.5 py-3 px-4 bg-surface border border-border-strong rounded-[14px] shadow-[var(--shadow-lg),0_0_0_1px_rgba(139,92,246,0.08)] z-[4] bottom-20 left-1.5 animate-[float_4s_ease-in-out_0.5s_infinite]">
              <span className="w-2 h-2 bg-green rounded-full shadow-[0_0_0_3px_rgba(52,211,153,0.25)] animate-blink flex-shrink-0" />
              <p className="text-[13px] font-semibold text-text m-0">Now Streaming</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Movies ── */}
      <section id="featured" className="section bg-bg border-t border-border">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Top Picks</span>
            <h2 className="section-title">Featured Movies</h2>
            <p className="section-subtitle">
              Hand-curated selections from the greatest films of all time —
              updated weekly by our editorial team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Genres ── */}
      <section id="genres" className="section bg-bg-elevated border-t border-b border-border">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Explore</span>
            <h2 className="section-title">Browse by Genre</h2>
            <p className="section-subtitle">
              From pulse-pounding action to heartfelt drama — find the perfect
              film for any mood.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularGenres.map((genre, index) => (
              <GenreCard key={genre.id} genre={genre} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="section bg-bg">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Why Alkademy CineVault</span>
            <h2 className="section-title">Everything a Film Lover Needs</h2>
            <p className="section-subtitle">
              Powerful tools to search, discover, and track movies — all in one
              beautifully designed platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pt-16 pb-24 bg-bg">
        <div className="container">
          <div className="relative text-center py-20 px-8 max-sm:py-[52px] max-sm:px-6 bg-[image:var(--gradient-accent)] rounded-2xl overflow-hidden">
            <div
              className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,transparent_65%)] pointer-events-none"
              aria-hidden="true"
            />
            <div className="text-[52px] mb-5 relative z-[1] block" aria-hidden="true">
              🎬
            </div>
            <h2 className="text-[clamp(32px,5vw,56px)] mb-4 relative z-[1] text-white tracking-[0.06em]">
              Start Your Cinematic Journey
            </h2>
            <p className="text-base text-white/82 mb-9 relative z-[1] max-w-[480px] mx-auto leading-[1.75]">
              Join 2 million movie lovers who discover amazing films every day.
              Your watchlist is waiting — it&apos;s free to get started.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap relative z-[1]">
              <Button
                to="/signup"
                variant="primary"
                size="lg"
                className="!bg-white !text-accent !shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:!bg-[#f5f3ff] hover:!shadow-[0_8px_32px_rgba(0,0,0,0.28)] hover:!brightness-100"
              >
                Sign Up Free
              </Button>
              <Button
                to="/login"
                variant="secondary"
                size="lg"
                className="!bg-white/12 !text-white !border-white/35 !backdrop-blur-[8px] hover:!bg-white/22 hover:!border-white/55"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
