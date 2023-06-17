import MovieCard from './movie-card'
import { type MovieCardDetails } from './types'

export default function Page(props: MovieCardDetails) {
  return <MovieCard {...props} />
}
