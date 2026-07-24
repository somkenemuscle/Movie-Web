import type { Feature } from '../data/mockData'

const icons: Record<Feature['icon'], React.ReactNode> = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  list: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  ),
}

interface FeatureCardProps {
  feature: Feature
  index?: number
}

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  return (
    <article
      className="group relative p-8 bg-surface border border-border rounded-xl overflow-hidden animate-fade-in-up transition-[transform,border-color,box-shadow] duration-[400ms] ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-md before:content-[''] before:absolute before:inset-0 before:bg-[image:var(--gradient-card)] before:pointer-events-none"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative z-[1] flex items-center justify-center w-[52px] h-[52px] mb-5 text-accent bg-[rgba(139,92,246,0.12)] rounded-lg border border-[rgba(139,92,246,0.22)] transition-[background,transform,box-shadow] duration-250 group-hover:bg-[rgba(139,92,246,0.2)] group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] [&_svg]:w-6 [&_svg]:h-6">
        {icons[feature.icon]}
      </div>
      <h3 className="relative z-[1] font-body text-[17px] font-bold mb-2.5 text-text">{feature.title}</h3>
      <p className="relative z-[1] text-sm text-text-muted leading-[1.75]">{feature.description}</p>
    </article>
  )
}
