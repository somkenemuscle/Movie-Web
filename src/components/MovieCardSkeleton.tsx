export const SHIMMER_CLASSES =
  "relative overflow-hidden bg-surface rounded-md after:content-[''] after:absolute after:inset-0 " +
  'after:bg-[linear-gradient(90deg,transparent_0%,rgba(139,92,246,0.12)_50%,transparent_100%)] ' +
  'after:bg-[length:200%_100%] after:animate-shimmer'

export function MovieCardSkeleton() {
  return (
    <div
      className="flex flex-col bg-surface border border-border rounded-xl overflow-hidden shadow-card"
      aria-hidden="true"
    >
      <div className={`${SHIMMER_CLASSES} h-[260px] rounded-none`} />
      <div className="p-[18px] flex flex-col gap-2.5">
        <div className={`${SHIMMER_CLASSES} h-[15px] w-4/5 rounded-sm`} />
        <div className={`${SHIMMER_CLASSES} h-3 w-1/2 rounded-sm`} />
      </div>
    </div>
  )
}

interface MovieCardSkeletonGridProps {
  count?: number
}

export function MovieCardSkeletonGrid({ count = 8 }: MovieCardSkeletonGridProps) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </>
  )
}
