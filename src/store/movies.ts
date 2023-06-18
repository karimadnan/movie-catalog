import { type Movie } from '@/app/common-typesmovie-catalog'
import { create } from 'zustand'

export interface MoviesStore {
  movies: Movie[]
  setMovies: (movies: Movie[]) => void
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  movies: [],
  setMovies: (movies: Movie[]) => {
    set((state) => ({ movies: [...state.movies, ...movies] }))
  },
}))
