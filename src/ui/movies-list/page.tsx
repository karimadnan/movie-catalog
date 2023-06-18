'use client'

import { useRouter } from 'next/navigation'
import MovieCard from '@/ui/movie-card/pagemovie-catalog'
import { type MoviesListProps } from './types'
import styles from '../common/global.module.css'

export default function MoviesList({ movies, lastCardRef }: MoviesListProps) {
  const router = useRouter()

  return (
    <div className={styles.moviesListGrid}>
      {movies.map(
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
              router.push(`/movie/${id}`)
            }}
          >
            <MovieCard
              title={title}
              releaseDate={releaseDate}
              imgPath={backdropPath}
            />
          </div>
        )
      )}
    </div>
  )
}
