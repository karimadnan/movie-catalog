import { dehydrate } from '@tanstack/query-core'
import { getTopRatedMoviesList } from '@/app/api/moviesmovie-catalog'
import getQueryClient from '@/app/util/react-query/query-clientmovie-catalog'
import { Hydrate } from '@tanstack/react-query'
import Landing from '@/components/landing/landingmovie-catalog'

export default async function Hydation() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['hydrate-users'], () =>
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
