import { useQuery } from '@tanstack/react-query'
import charactersService from './characters.service'
import {
  CharacterComicsParameters,
  CharactersParameters,
} from './characters.types'

export function useCharacters(params?: CharactersParameters) {
  return useQuery({
    queryKey: ['characters', params],
    queryFn: () => charactersService.list(params),
  })
}

export function useCharacter(params: CharacterComicsParameters) {
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
