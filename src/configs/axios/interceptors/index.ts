import { AxiosInstance } from 'axios'
import { requestMarvelInterceptor } from './request'

const marvelInstanceInterceptors = (instance: AxiosInstance) => {
  requestMarvelInterceptor(instance.interceptors.request)
}

export { marvelInstanceInterceptors }
