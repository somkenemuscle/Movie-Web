export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[100svh] bg-bg" role="status" aria-label="Loading">
      <span className="w-9 h-9 border-[3px] border-border-strong border-t-accent rounded-full animate-spin-slow" />
    </div>
  )
}
