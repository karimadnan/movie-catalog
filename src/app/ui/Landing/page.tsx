'use client'

import { getTopRatedMoviesList } from '@/app/api/moviesmovie-catalog'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function Landing() {
  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['fetch-movies'],
    queryFn: () => getTopRatedMoviesList(page),
  })

  console.log(data, 'ffff')

  return <h1>landing</h1>
}
