import { type Movie } from '@/app/common-typesmovie-catalog'

export interface MoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

interface NameAndId {
  name: string
  id: number
}

export interface MovieResponse extends Movie {
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: NameAndId[]
  homepage: string
  imdb_id: string
  production_companies: Array<
    NameAndId & {
      logo_path: string
      origin_country: string
    }
  >
  production_countries: Array<{
    iso_3166_1: string
    name: string
  }>
  revenue: number
  runtime: number
  spoken_languages: Array<{
    english_name: string
    iso_639_1: string
    name: string
  }>
  status: string
  tagline: string
}
