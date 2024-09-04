import axios from 'axios'
import { marvelInstanceInterceptors } from './interceptors'

export const marvelInstance = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_API,
})

marvelInstanceInterceptors(marvelInstance)
