import { Button } from '../components/Button'
import { MovieCard } from '../components/MovieCard'
import { GenreCard } from '../components/GenreCard'
import { FeatureCard } from '../components/FeatureCard'
import { Footer } from '../components/Footer'
import { featuredMovies, popularGenres, features } from '../data/mockData'
import './LandingPage.css'

export function LandingPage() {
  return (
    <div className="landing">
      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-blob hero__bg-blob--1" />
          <div className="hero__bg-blob hero__bg-blob--2" />
          <div className="hero__bg-blob hero__bg-blob--3" />
          <div className="hero__bg-noise" />
        </div>

        <div className="container hero__inner">
          {/* Left: Content */}
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              10,000+ Movies &amp; Series Worldwide
            </div>

            <h1 className="hero__title">
              Discover Your
              <br />
              <span className="hero__title-accent">Next Favorite Film</span>
            </h1>

            <p className="hero__description">
              CineVault is the ultimate movie discovery platform. Search by
              genre, mood, or year — and always know exactly where to watch.
            </p>

            <div className="hero__actions">
              <Button to="/signup" variant="primary" size="lg">
                Get Started Free
              </Button>
              <Button to="/signup" variant="secondary" size="lg">
                Browse Movies
              </Button>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">10K+</span>
                <span className="hero__stat-label">Movies</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-value">50+</span>
                <span className="hero__stat-label">Genres</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-value">2M+</span>
                <span className="hero__stat-label">Users</span>
              </div>
            </div>
          </div>

          {/* Right: Cinematic poster visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-glow" />

            {/* Back poster — left */}
            <div className="hero__poster hero__poster--back-left">
              <div className="hero__poster-lines" />
            </div>

            {/* Back poster — right */}
            <div className="hero__poster hero__poster--back-right">
              <div className="hero__poster-lines" />
            </div>

            {/* Main featured poster */}
            <div className="hero__poster hero__poster--main">
              <div className="hero__poster-inner">
                <div className="hero__poster-top">
                  <span className="hero__poster-genre-tag">Sci-Fi</span>
                  <span className="hero__poster-year">2014</span>
                </div>
                <div className="hero__poster-body">
                  <p className="hero__poster-title">Interstellar</p>
                  <p className="hero__poster-tagline">Beyond the horizon</p>
                </div>
                <div className="hero__poster-rating">
                  <svg viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1l1.54 3.13L12 4.73l-2.5 2.43.59 3.42L7 9l-3.09 1.62.59-3.42L2 4.73l3.46-.6z" />
                  </svg>
                  8.7
                </div>
              </div>
            </div>

            {/* Floating: IMDb badge */}
            <div className="hero__widget hero__widget--rating">
              <span className="hero__widget-star">⭐</span>
              <div>
                <p className="hero__widget-value">9.0 / 10</p>
                <p className="hero__widget-label">Top Rated</p>
              </div>
            </div>

            {/* Floating: Now Playing badge */}
            <div className="hero__widget hero__widget--playing">
              <span className="hero__widget-dot" />
              <p className="hero__widget-text">Now Streaming</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Movies ── */}
      <section id="featured" className="section featured">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Top Picks</span>
            <h2 className="section-title">Featured Movies</h2>
            <p className="section-subtitle">
              Hand-curated selections from the greatest films of all time —
              updated weekly by our editorial team.
            </p>
          </div>

          <div className="featured__grid">
            {featuredMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Genres ── */}
      <section id="genres" className="section genres">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Explore</span>
            <h2 className="section-title">Browse by Genre</h2>
            <p className="section-subtitle">
              From pulse-pounding action to heartfelt drama — find the perfect
              film for any mood.
            </p>
          </div>

          <div className="genres__grid">
            {popularGenres.map((genre, index) => (
              <GenreCard key={genre.id} genre={genre} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Why CineVault</span>
            <h2 className="section-title">Everything a Film Lover Needs</h2>
            <p className="section-subtitle">
              Powerful tools to search, discover, and track movies — all in one
              beautifully designed platform.
            </p>
          </div>

          <div className="features__grid">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="container">
          <div className="cta__card">
            <div className="cta__glow" aria-hidden="true" />
            <div className="cta__icon" aria-hidden="true">🎬</div>
            <h2 className="cta__title">Start Your Cinematic Journey</h2>
            <p className="cta__text">
              Join 2 million movie lovers who discover amazing films every day.
              Your watchlist is waiting — it&apos;s free to get started.
            </p>
            <div className="cta__actions">
              <Button to="/signup" variant="primary" size="lg">
                Sign Up Free
              </Button>
              <Button to="/login" variant="secondary" size="lg">
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
