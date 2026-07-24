import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { PageLoader } from './components/PageLoader'

const LandingPage = lazy(() =>
  import('./pages/LandingPage').then((m) => ({ default: m.LandingPage })),
)
const LoginPage = lazy(() => import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })))
const SignUpPage = lazy(() =>
  import('./pages/SignUpPage').then((m) => ({ default: m.SignUpPage })),
)
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const SearchPage = lazy(() =>
  import('./pages/SearchPage').then((m) => ({ default: m.SearchPage })),
)
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage').then((m) => ({ default: m.MovieDetailsPage })),
)

function withNavbar(page: React.ReactNode) {
  return (
    <>
      <Navbar />
      {page}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={withNavbar(<LandingPage />)} />
          <Route path="/about" element={withNavbar(<AboutPage />)} />
          <Route path="/search" element={withNavbar(<SearchPage />)} />
          <Route path="/movie/:id" element={withNavbar(<MovieDetailsPage />)} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
