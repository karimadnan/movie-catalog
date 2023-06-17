import SkeletonCard from '@/app/ui/loading/skeleton-cardmovie-catalog'

export default function Loading() {
  return Array.from({ length: 20 }, (_, index) => <SkeletonCard key={index} />)
}
