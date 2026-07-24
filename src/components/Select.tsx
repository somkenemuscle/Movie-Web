interface SelectOption {
  label: string
  value: string
}

interface SelectProps {
  id: string
  label: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  className?: string
}

export const SELECT_LABEL_CLASSES = 'text-xs font-semibold text-text-muted tracking-[0.06em] uppercase'

export const SELECT_FIELD_CLASSES =
  'w-full py-3 px-4 text-sm font-body text-text bg-[rgba(139,92,246,0.05)] border-[1.5px] border-border-strong rounded-md outline-none ' +
  'transition-[border-color,box-shadow,background] duration-[250ms] ' +
  'hover:border-[rgba(139,92,246,0.4)] hover:bg-[rgba(139,92,246,0.08)] ' +
  'focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-glow)] focus:bg-[rgba(139,92,246,0.1)]'

export function Select({ id, label, value, options, onChange, className = '' }: SelectProps) {
  return (
    <div className={`flex flex-col gap-[7px] ${className}`.trim()}>
      <label htmlFor={id} className={SELECT_LABEL_CLASSES}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`${SELECT_FIELD_CLASSES} pr-10 appearance-none cursor-pointer [&>option]:bg-surface [&>option]:text-text`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-subtle pointer-events-none [&_svg]:w-4 [&_svg]:h-4"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </div>
  )
}
