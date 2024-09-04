import { useContext } from 'react'
import { FavoritesContext } from './favorites-context.provider'
import { FavoritesContextParams } from './favorites-context.types'

export function useFavorites(): FavoritesContextParams {
  return useContext(FavoritesContext)
}
