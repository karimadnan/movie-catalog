import { type RefObject } from 'react'
import { type Movie } from '@/app/common-typesmovie-catalog'

export interface MoviesListProps {
  movies: Movie[]
  // Used for infinite scroll loading
  lastCardRef: RefObject<HTMLDivElement>
}
