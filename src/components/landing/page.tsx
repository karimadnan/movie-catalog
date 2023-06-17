import { dehydrate } from '@tanstack/query-core'
import { getTopRatedMoviesList } from '@/api/moviesmovie-catalog'
import getQueryClient from '@/util/react-query/query-clientmovie-catalog'
import { Hydrate } from '@tanstack/react-query'
import Landing from '@/components/landing/landingmovie-catalog'

export default async function Hydation() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['fetch-movies'], () =>
    // Pre-fetch first page on the server
    getTopRatedMoviesList(1)
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Landing />
    </Hydrate>
  )
}
