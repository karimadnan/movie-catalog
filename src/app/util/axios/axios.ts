import axios, { type AxiosInstance } from 'axios'

const initAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL })
  instance.defaults.headers.common.Authorization = `Bearer ${process.env.API_KEY}`

  return instance
}

export default initAxiosInstance
