'use client'

import { getTopRatedMoviesList } from '@/app/api/moviesmovie-catalog'
import { IconButton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { StyledContainer, StyledInputBase, StyledSearchBar } from './styles'

export default function Landing() {
  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['fetch-movies'],
    queryFn: () => getTopRatedMoviesList(page),
  })

  console.log(data?.data.results.length, 'ffff')

  return (
    <>
      <StyledContainer>
        <StyledSearchBar>
          <IconButton type="button">
            <SearchIcon color="secondary" />
          </IconButton>
          <StyledInputBase placeholder="Search by movie title..." />
        </StyledSearchBar>
      </StyledContainer>
      <h1>cards</h1>
    </>
  )
}
