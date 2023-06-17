import initAxiosInstance from './axios'

const axios = initAxiosInstance(process.env.API_BASE_URL ?? '')

export default axios
