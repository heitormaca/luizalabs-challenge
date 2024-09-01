import CryptoJS from 'crypto-js'

const privateKey = import.meta.env.VITE_PRIVATE_KEY
const publicKey = import.meta.env.VITE_PUBLIC_KEY

export function getHash(ts: string) {
  const stringToHash = ts + privateKey + publicKey
  return CryptoJS.MD5(stringToHash).toString()
}
