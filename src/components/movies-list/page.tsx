'use client'

import { useRouter } from 'next/navigation'
import MovieCard from '@/ui/movie-card/pagemovie-catalog'
import { type MoviesListProps } from './types'

export default function MoviesList({ movies, lastCardRef }: MoviesListProps) {
  const router = useRouter()

  return movies.map(
    (
      { title, release_date: releaseDate, backdrop_path: backdropPath, id },
      index
    ) => (
      <div
        key={`${index}-${id}-${title}`}
        ref={index + 1 === movies.length ? lastCardRef : null}
        role="button"
        tabIndex={index}
        onClick={() => {
          router.push(`/movie-details/${id}`)
        }}
      >
        <MovieCard
          title={title}
          releaseDate={releaseDate}
          imgPath={backdropPath}
        />
      </div>
    )
  )
}
