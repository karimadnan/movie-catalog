import getQueryClient from '@/util/react-query/query-clientmovie-catalog'
import { Hydrate, dehydrate } from '@tanstack/react-query'
import { getTopRatedMoviesList } from '@/api/moviesmovie-catalog'
import TopRatedMovies from '@/components/landing/top-rated-moviesmovie-catalog'

export default async function Movies() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['top-rated-movies-1'], () =>
    // Pre-fetch first movies page on server and pass down to client
    getTopRatedMoviesList(1)
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <TopRatedMovies />
    </Hydrate>
  )
}
