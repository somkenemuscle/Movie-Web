import './Input.css'

interface InputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  autoComplete?: string
}

export function Input({
  id,
  label,
  type = 'text',
  placeholder,
  autoComplete,
}: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="input-field"
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  )
}
