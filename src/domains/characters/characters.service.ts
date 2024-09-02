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

  async details(params: CharacterComicsParameters) {
    const result = await marvelInstance.get<DataWrapper<Comic>>(
      `${URL_CONTROLLER}/${params.characterId}/comics`,
      {
        params: { ...params },
      }
    )

    return result.data
  },
}
