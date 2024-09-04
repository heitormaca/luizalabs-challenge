import { marvelInstance } from '../../configs/axios'
import {
  Character,
  CharacterComicsParameters,
  CharactersParameters,
  Comic,
  DataWrapper,
} from './characters.types'

const URL_CONTROLLER = 'characters'

export default {
  async list(params?: CharactersParameters) {
    const result = await marvelInstance.get<DataWrapper<Character>>(
      `${URL_CONTROLLER}`,
      {
        params: { ...params },
      }
    )

    return result.data
  },

  async listFavorites(favorites: string[]) {
    let heroes: Character[] = []
    for (const characterId of favorites) {
      const result = await this.details({
        characterId: Number(characterId),
      })

      const { results } = result?.data || {}
      if (results) {
        heroes = [...heroes, ...results]
      }
    }

    return heroes
  },

  async details(params: CharacterComicsParameters) {
    const result = await marvelInstance.get<DataWrapper<Character>>(
      `${URL_CONTROLLER}/${params.characterId}`
    )

    return result.data
  },

  async detailsComics(params: CharacterComicsParameters) {
    const result = await marvelInstance.get<DataWrapper<Comic>>(
      `${URL_CONTROLLER}/${params.characterId}/comics`,
      {
        params: { ...params },
      }
    )

    return result.data
  },
}
