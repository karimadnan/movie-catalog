import { type MovieDetailsProps } from './types'

export default function Page({ params }: MovieDetailsProps) {
  return <h1>movie-details of {params.movieId}</h1>
}
