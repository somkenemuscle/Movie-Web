interface ChipProps {
  label: string
  onClick: () => void
  onRemove?: () => void
}

export function Chip({ label, onClick, onRemove }: ChipProps) {
  return (
    <span className="group inline-flex items-center gap-0.5 bg-[rgba(139,92,246,0.08)] border border-border-strong rounded-full overflow-hidden transition-colors duration-150 hover:bg-[rgba(139,92,246,0.16)] hover:border-accent">
      <button
        type="button"
        className="py-2 px-3.5 text-[13px] font-medium text-text-muted transition-colors duration-150 group-hover:text-text"
        onClick={onClick}
      >
        {label}
      </button>
      {onRemove && (
        <button
          type="button"
          className="flex items-center justify-center w-6 h-6 mr-1.5 text-text-subtle rounded-full transition-colors duration-150 hover:text-pink hover:bg-[rgba(236,72,153,0.12)] [&_svg]:w-3 [&_svg]:h-3"
          onClick={onRemove}
          aria-label={`Remove ${label} from recent searches`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </span>
  )
}
