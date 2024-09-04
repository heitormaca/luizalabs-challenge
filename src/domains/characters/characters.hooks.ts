import { useQuery } from '@tanstack/react-query'
import charactersService from './characters.service'
import {
  CharacterComicsParameters,
  CharacterParameters,
  CharactersParameters,
} from './characters.types'
import { useFavorites } from '../../contexts/favorites-context/favorites-context-hook'

export function useCharacters(params?: CharactersParameters, enabled = true) {
  return useQuery({
    queryKey: ['characters', params],
    queryFn: () => charactersService.list({ ...params }),
    enabled: enabled,
  })
}

export function useFavoritesCharacters(enabled = true) {
  const { favorites } = useFavorites()

  return useQuery({
    queryKey: ['heroes/favorites', { favorites }],
    queryFn: () => charactersService.listFavorites(favorites),
    enabled: enabled,
  })
}

export function useCharacter(params: CharacterParameters) {
  const { characterId } = params

  return useQuery({
    queryKey: ['character', params],
    queryFn: () => charactersService.details(params),
    enabled: characterId !== -1,
  })
}

export function useCharacterComics(params: CharacterComicsParameters) {
  const { characterId } = params

  return useQuery({
    queryKey: ['characterComics', params],
    queryFn: () => charactersService.detailsComics(params),
    enabled: characterId !== -1,
  })
}
