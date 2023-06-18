import { type Movie } from '@/app/common-typesmovie-catalog'
import { create } from 'zustand'

export interface MoviesStore {
  movies: Movie[]
  setMovies: (movies: Movie[]) => void
  pagesLoaded: number[]
  setPagesLoaded: (page: number) => void
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  pagesLoaded: [],
  movies: [],
  setMovies: (newMovies: Movie[]) => {
    set((state) => ({ movies: [...state.movies, ...newMovies] }))
  },
  setPagesLoaded: (page: number) => {
    set((state) => ({ pagesLoaded: [...state.pagesLoaded, page] }))
  },
}))
