'use client'

import { getTopRatedMoviesList } from '@/app/api/moviesmovie-catalog'
import { IconButton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {
  StyledContainer,
  StyledInputBase,
  StyledMovieCardsContainer,
  StyledSearchBar,
} from './styles'
import MovieCard from '../movie-card/movie-card'
import Loading from './loading'

export default function Landing() {
  const [page, setPage] = useState(1)

  const {
    data,
    isLoading: isMoviesLoading,
    error,
  } = useQuery({
    queryKey: ['fetch-movies'],
    queryFn: () => getTopRatedMoviesList(page),
  })

  return (
    <>
      <StyledContainer>
        <StyledSearchBar>
          <IconButton type="button">
            <SearchIcon color="secondary" />
          </IconButton>
          <StyledInputBase
            disabled={isMoviesLoading}
            placeholder="Search by movie title..."
          />
        </StyledSearchBar>
      </StyledContainer>
      <StyledMovieCardsContainer>
        {data?.data?.results.map(
          ({
            title,
            release_date: releaseDate,
            backdrop_path: backdropPath,
            id,
          }) => (
            <MovieCard
              title={title}
              releaseDate={releaseDate}
              imgPath={backdropPath}
              id={id}
            />
          )
        )}
        {isMoviesLoading && <Loading />}
      </StyledMovieCardsContainer>
    </>
  )
}
