import { useState } from 'react'

interface PosterImageProps {
  src: string | null
  alt: string
  className?: string
}

export function PosterImage({ src, alt, className = '' }: PosterImageProps) {
  const [failed, setFailed] = useState(false)
  const showFallback = !src || failed

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[linear-gradient(160deg,#1a1a2e_0%,#16213e_100%)] ${className}`.trim()}
    >
      {showFallback ? (
        <div
          className="w-full h-full flex items-center justify-center text-text-subtle [&_svg]:w-[40%] [&_svg]:h-[40%] [&_svg]:max-w-16 [&_svg]:max-h-16 [&_svg]:opacity-50"
          role="img"
          aria-label={alt}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2.5" y="4" width="19" height="16" rx="2" />
            <path d="M2.5 8h19M8 4v4M16 4v4" />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}
