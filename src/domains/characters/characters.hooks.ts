import { useQuery } from '@tanstack/react-query'
import {
  CharacterComicsParameters,
  CharactersParameters,
} from './characters.types'
import charactersService from './characters.service'

export function useCharacters(params?: CharactersParameters) {
  return useQuery({
    queryKey: ['characters', params],
    queryFn: () => charactersService.list(params),
  })
}

export function useCharacterComics(params: CharacterComicsParameters) {
  return useQuery({
    queryKey: ['characterComics', params],
    queryFn: () => charactersService.details(params),
  })
}
