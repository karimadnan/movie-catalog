import { type Movie } from '@/app/common-typesmovie-catalog'

export interface MoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
