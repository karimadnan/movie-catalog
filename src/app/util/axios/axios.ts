import axios, { type AxiosInstance } from 'axios'

const initAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL })

  return instance
}

export default initAxiosInstance
