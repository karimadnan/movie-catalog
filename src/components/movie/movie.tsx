'use client'

import { getMovieDetails } from '@/api/moviesmovie-catalog'
import { type MovieDetailsProps } from '@/app/movie/[movieId]/typesmovie-catalog'
import { useQuery } from '@tanstack/react-query'

export default function Movie({ params }: MovieDetailsProps) {
  const {
    data,
    isLoading: isMovieLoading,
    isRefetching: isMovieRefetching,
  } = useQuery({
    queryKey: ['movie-details'],
    queryFn: () => getMovieDetails(params.movieId),
  })

  console.log(data, 'data')
  return <h1>Movie</h1>
}
