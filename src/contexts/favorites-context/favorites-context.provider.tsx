import { createContext, useEffect, useState } from 'react'
import {
  FavoritesContextParams,
  FavoritesProviderProps,
} from './favorites-context.types'

export const FavoritesContext = createContext({} as FavoritesContextParams)

export function FavoritesProvider(props: FavoritesProviderProps) {
  const LOCAL_STORAGE_KEY = 'favorites'

  const [favorites, setFavorites] = useState<string[]>(() => {
    const fav = localStorage.getItem(LOCAL_STORAGE_KEY)
    return fav ? (JSON.parse(fav) as string[]) : []
  })

  function updateFavorites(character: string) {
    let updatedFavorites: string[]

    if (favorites.includes(character)) {
      updatedFavorites = favorites.filter((fav) => fav !== character)
    } else if (favorites.length < 5) {
      updatedFavorites = [...favorites, character]
    } else {
      return 'A capacidade máxima de personagem favoritos foi atingida.'
    }
    setFavorites(updatedFavorites)
  }

  function getFavorite(characterId: string): boolean {
    return favorites.includes(characterId)
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoritesContext.Provider
      value={{ favorites, handleFavoriteClick: updateFavorites, getFavorite }}
    >
      {props.children}
    </FavoritesContext.Provider>
  )
}
