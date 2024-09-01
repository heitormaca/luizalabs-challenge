import { AxiosInterceptorManager, AxiosRequestConfig } from 'axios'
import { getHash } from '../../../utils/getHash'

const requestMarvelInterceptor = (
  request: AxiosInterceptorManager<AxiosRequestConfig>
) => {
  request.use((config: AxiosRequestConfig) => {
    const ts = Date.now().toString()
    const hash = getHash(ts)

    config.params = {
      ...config.params,
      ts: ts,
      apikey: import.meta.env.VITE_PUBLIC_KEY,
      hash: hash,
    }

    return config
  })
}

export { requestMarvelInterceptor }
