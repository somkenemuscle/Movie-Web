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
      <section id="home" className="hero">
        <div className="hero__bg">
          <div className="hero__bg-image" />
          <div className="hero__bg-gradient" />
          <div className="hero__bg-glow hero__bg-glow--1" />
          <div className="hero__bg-glow hero__bg-glow--2" />
        </div>

        <div className="container hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Now streaming 50,000+ titles
          </div>

          <h1 className="hero__title">
            Discover Movies
            <br />
            <span className="hero__title-accent">Worth Watching</span>
          </h1>

          <p className="hero__description">
            Search, explore, and curate your perfect watchlist. CineVault brings
            the magic of cinema to your fingertips with a premium browsing
            experience.
          </p>

          <div className="hero__actions">
            <Button to="/signup" variant="primary" size="lg">
              Get Started
            </Button>
            <Button to="/signup" variant="secondary" size="lg">
              Browse Movies
            </Button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">50K+</span>
              <span className="hero__stat-label">Movies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">120+</span>
              <span className="hero__stat-label">Genres</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">2M+</span>
              <span className="hero__stat-label">Users</span>
            </div>
          </div>
        </div>

        <div className="hero__film-strip" aria-hidden="true">
          {[...featuredMovies, ...featuredMovies].map((movie, i) => (
            <div key={`${movie.id}-${i}`} className="hero__film-frame">
              <img src={movie.image} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="featured" className="section featured">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Trending Now</span>
            <h2 className="section-title">Featured Movies</h2>
            <p className="section-subtitle">
              Hand-picked selections from critics and our community — updated
              weekly.
            </p>
          </div>

          <div className="featured__grid">
            {featuredMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="genres" className="section genres">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Explore</span>
            <h2 className="section-title">Popular Genres</h2>
            <p className="section-subtitle">
              Dive into the categories that define great storytelling.
            </p>
          </div>

          <div className="genres__grid">
            {popularGenres.map((genre, index) => (
              <GenreCard key={genre.id} genre={genre} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section features">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Why CineVault</span>
            <h2 className="section-title">Built for Movie Lovers</h2>
            <p className="section-subtitle">
              Everything you need to discover, track, and enjoy films — all in
              one beautiful place.
            </p>
          </div>

          <div className="features__grid">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__card">
            <div className="cta__glow" aria-hidden="true" />
            <h2 className="cta__title">Ready to start your cinematic journey?</h2>
            <p className="cta__text">
              Join millions of movie enthusiasts and never miss a great film
              again.
            </p>
            <Button to="/signup" variant="primary" size="lg">
              Create Free Account
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
