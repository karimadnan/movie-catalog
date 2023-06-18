import getQueryClient from '@/util/react-query/query-clientmovie-catalog'
import { Hydrate, dehydrate } from '@tanstack/react-query'
import { getMovieDetails } from '@/api/moviesmovie-catalog'
import Movie from '@/components/movie/moviemovie-catalog'
import { type MovieDetailsProps } from './types'

export default async function Page(props: MovieDetailsProps) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['movie-details'], () =>
    // Pre-fetch movie details on server and pass down to client
    getMovieDetails(props.params.movieId)
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Movie {...props} />
    </Hydrate>
  )
}
