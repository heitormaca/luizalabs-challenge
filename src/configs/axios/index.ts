import axios from 'axios'
import { marvelInstanceInterceptors } from './interceptors'

export const marvelInstance = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
})

marvelInstanceInterceptors(marvelInstance)
