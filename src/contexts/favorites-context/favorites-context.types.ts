import { ReactNode } from 'react'

export interface FavoritesContextParams {
  favorites: string[]
  handleFavoriteClick: (characterId: string) => string | undefined
  isFavorite: (characterId: string) => boolean
}

export interface FavoritesProviderProps {
  children: ReactNode
}
