'use client'

import { getTopRatedMoviesList } from '@/api/moviesmovie-catalog'
import { IconButton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useDebounce } from '@/util/hooks/useDebouncemovie-catalog'
import { remapMoviesData } from '@/util/configmovie-catalog'
import MoviesListSkeleton from '@/ui/loading/movies-list-skeletonmovie-catalog'
import MoviesList from '@/ui/movies-list/pagemovie-catalog'
import { useMoviesStore } from '@/store/moviesmovie-catalog'
import styles from '../../ui/common/global.module.css'
import { StyledInputBase, StyledSearchBar } from './styles'

export default function TopRatedMovies() {
  const [searchQuery, setSearchQuery] = useState('')
  const debounce = useDebounce()
  const lastCardRef = useRef<HTMLDivElement>(null)

  const movies = useMoviesStore((state) => state.movies)
  const setMovies = useMoviesStore((state) => state.setMovies)

  const pagesLoaded = useMoviesStore((state) => state.pagesLoaded)
  const setPagesLoaded = useMoviesStore((state) => state.setPagesLoaded)

  // Last page loaded or fallback to first one
  const page = useRef(pagesLoaded[pagesLoaded.length - 1] ?? 1)

  const {
    data,
    isLoading: isMoviesLoading,
    isRefetching: isMoviesRefetching,
    refetch: refetchMovies,
  } = useQuery({
    queryKey: ['top-rated-movies'],
    queryFn: () => getTopRatedMoviesList(page.current),
  })

  const isLoadingMoreMovies = isMoviesLoading || isMoviesRefetching

  const {
    results = [],
    total_results: totalMovies = 0,
    page: currentPage = 1,
  } = data ?? {}

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
      setPagesLoaded(currentPage)
      /* 
        Keep track of loaded pages, 
        to avoid duplicating pages with pre-fetching method
      */
      if (!pagesLoaded.includes(currentPage)) {
        const newMovies = remapMoviesData(results)
        setMovies(newMovies)
      }
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
      <div className={styles.searchContainer}>
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
      </div>
      <MoviesList movies={filteredMovies} lastCardRef={lastCardRef} />
      {isLoadingMoreMovies && <MoviesListSkeleton />}
    </>
  )
}
