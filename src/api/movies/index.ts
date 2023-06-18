import { type AxiosResponse } from 'axios'
import axios from '@/util/axiosmovie-catalog'
import { type MoviesResponse, type MovieResponse } from './types'
import { movieDetailsURL, topRatedMoviesURL } from './constant'

export const getTopRatedMoviesList = async (
  page: number
): Promise<MoviesResponse> => {
  const url = `${topRatedMoviesURL}?language=en-US&page=${page}`
  const response: AxiosResponse<MoviesResponse> = await axios.get(url)
  return response.data
}

export const getMovieDetails = async (id: number): Promise<MovieResponse> => {
  const url = `${movieDetailsURL}/${id}`
  const response: AxiosResponse<MovieResponse> = await axios.get(url)
  return response.data
}
