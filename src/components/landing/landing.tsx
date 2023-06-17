'use client'

import { getTopRatedMoviesList } from '@/api/moviesmovie-catalog'
import { IconButton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useDebounce } from '@/util/hooks/useDebouncemovie-catalog'
import { type Movie } from '@/app/common-typesmovie-catalog'
import { remapMoviesData } from '@/util/configmovie-catalog'
import {
  StyledContainer,
  StyledInputBase,
  StyledMovieCardsContainer,
  StyledSearchBar,
} from './styles'
import Loading from './loading'
import MoviesList from '../movies-list/page'

export default function Landing() {
  const page = useRef(1)
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const debounce = useDebounce()
  const lastCardRef = useRef<HTMLDivElement>(null)

  const {
    data,
    isLoading: isMoviesLoading,
    isRefetching: isMoviesRefetching,
    refetch: refetchMovies,
  } = useQuery({
    queryKey: ['fetch-movies'],
    queryFn: () => getTopRatedMoviesList(page.current),
  })

  const isLoadingMoreMovies = isMoviesLoading || isMoviesRefetching

  const { data: { results = [], total_results: totalMovies = 0 } = {} } =
    data ?? {}

  useEffect(() => {
    /* 
      To avoid server side rendering errors, 
      declare browser APIs on component mount.
    */
    if (lastCardRef.current === null) return
    const cardObserver = new IntersectionObserver(
      ([movie]) => {
        /* 
          If user scrolls down to the last movie and at least 20% of the card is showing,
          icrement the page to load more movies if not all are loaded yet.
        */
        if (movie.isIntersecting && movies.length < totalMovies) {
          page.current += 1
          cardObserver.unobserve(movie.target)
          refetchMovies()
        }
      },
      {
        threshold: 0.2,
      }
    )
    cardObserver.observe(lastCardRef.current)
  }, [movies])

  useEffect(() => {
    if (results.length > 0) {
      const newMovies = remapMoviesData(results)
      setMovies((prevMovies) => [...prevMovies, ...newMovies])
    }
  }, [results])

  const onSearch = (query: string) => {
    debounce(() => {
      setSearchQuery(query)
    }, 500)
  }

  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, movies]
  )

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
            onChange={(event) => {
              const query = event.target.value
              onSearch(query)
            }}
          />
        </StyledSearchBar>
      </StyledContainer>
      <StyledMovieCardsContainer>
        <MoviesList movies={filteredMovies} lastCardRef={lastCardRef} />
        {isLoadingMoreMovies && <Loading />}
      </StyledMovieCardsContainer>
    </>
  )
}
