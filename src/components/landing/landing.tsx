'use client'

import { getTopRatedMoviesList } from '@/app/api/moviesmovie-catalog'
import { IconButton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { type Movie } from '@/app/api/movies/typesmovie-catalog'
import { useDebounce } from '@/app/util/hooks/useDebouncemovie-catalog'
import {
  StyledContainer,
  StyledInputBase,
  StyledMovieCardsContainer,
  StyledSearchBar,
} from './styles'
import MovieCard from '../movie-card/movie-card'
import Loading from './loading'

export default function Landing() {
  const page = useRef(1)
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const debounce = useDebounce()
  const lastCard = useRef<HTMLDivElement>(null)

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
    if (lastCard.current === null) return
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
    cardObserver.observe(lastCard.current)
  }, [movies])

  useEffect(() => {
    if (results.length > 0) {
      setMovies((prevMovies) => [...prevMovies, ...results])
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
        {filteredMovies.map(
          (
            {
              title,
              release_date: releaseDate,
              backdrop_path: backdropPath,
              id,
            },
            index
          ) => (
            <div
              key={`${index}-${id}-${title}`}
              ref={index + 1 === movies.length ? lastCard : null}
            >
              <MovieCard
                title={title}
                releaseDate={releaseDate}
                imgPath={backdropPath}
                id={id}
              />
            </div>
          )
        )}
        {isLoadingMoreMovies && <Loading />}
      </StyledMovieCardsContainer>
    </>
  )
}
