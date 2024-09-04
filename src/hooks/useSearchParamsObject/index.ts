import { useSearchParams } from 'react-router-dom'
import { CharactersParameters } from '../../domains/characters/characters.types'

interface SearchParamsProps extends CharactersParameters {
  onlyFavorites?: string
}

export function useSearchParamsObject(): SearchParamsProps {
  const [searchParams] = useSearchParams()

  return Object.fromEntries(searchParams.entries())
}
