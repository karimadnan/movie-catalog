import { type Metadata } from 'next'
import { type MovieDetailsProps } from './types'

export const metadata: Metadata = {
  title: 'Movie-Catalog',
  description: 'Top rated movies catalog!',
}

export default function Page({ params }: MovieDetailsProps) {
  return <h1>movie-details of {params.movieId}</h1>
}
