import { type AxiosResponse } from 'axios'
import axios from '@/util/axiosmovie-catalog'
import { type MoviesResponse } from './types'
import { topRatedMoviesURL } from './constant'

export const getTopRatedMoviesList = async (
  page: number
): Promise<MoviesResponse> => {
  const url = `${topRatedMoviesURL}?language=en-US&page=${page}`
  const response: AxiosResponse<MoviesResponse> = await axios.get(url)
  return response.data
}
