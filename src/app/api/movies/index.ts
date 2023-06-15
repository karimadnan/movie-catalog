import { type AxiosResponse } from 'axios'
import axios from '@/app/util/axiosmovie-catalog'
import { type MoviesResponse } from './types'
import { topRatedMoviesURL } from './constant'

export const getTopRatedMoviesList = async (
  page: number
): Promise<AxiosResponse<MoviesResponse>> => {
  const url = `${topRatedMoviesURL}?language=en-US&page=${page}`
  const response = await axios.get(url)
  return response
}
