import SkeletonCard from '@/app/ui/loading/skeleton-cardmovie-catalog'

export default function Loading() {
  return Array(20).fill(<SkeletonCard />)
}
