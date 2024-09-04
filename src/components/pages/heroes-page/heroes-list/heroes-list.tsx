import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCharacters } from '../../../../domains/characters/characters.hooks'
import { CharactersParameters } from '../../../../domains/characters/characters.types'
import { useSearchParamsObject } from '../../../../hooks/useSearchParamsObject'
import { FavoriteToogle, Loader, NoData } from '../../../shared'
import Pagination from './pagination'
import s from './heroes-list.module.scss'

interface HeroesListProps {
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const HeroesList: React.FC<HeroesListProps> = ({ setTotal, setIsLoading }) => {
  const navigate = useNavigate()
  const searchParamsObject = useSearchParamsObject()

  const requestParams: CharactersParameters = {
    nameStartsWith: searchParamsObject.nameStartsWith,
    orderBy: searchParamsObject.orderBy || 'name',
    offset: searchParamsObject.offset || 0,
    limit: searchParamsObject.limit || 20,
  }

  const isOnlyFavorites = searchParamsObject.onlyFavorites === 'true'

  const { data, isLoading } = useCharacters(requestParams, !isOnlyFavorites)

  const { limit, offset, total, results } = data?.data || {}

  const showPagination =
    typeof offset === 'number' &&
    typeof limit === 'number' &&
    typeof total === 'number'

  const handleCharacterClick = (characterId: string) => {
    navigate(`/heroes/${characterId}`)
  }

  useEffect(() => {
    setTotal(total || 0)
  }, [total])

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading])

  if (isLoading) {
    return (
      <div className={s.loading_wrapper}>
        <Loader />
      </div>
    )
  }

  if (!results?.length) {
    return (
      <div className={s.no_data}>
        <NoData />
      </div>
    )
  }

  return (
    <section>
      <div className={s.wrapper}>
        {results.map((character) => {
          const characterImage = `${character.thumbnail?.path}.${character.thumbnail?.extension}`

          return (
            <div key={character.id}>
              <div
                className={s.image_wrapper}
                onClick={() => handleCharacterClick(String(character.id))}
              >
                <img src={characterImage} alt={character.name} />
              </div>
              <div className={s.title_wrapper}>
                <div className={s.tooltip}>
                  <h4 className={s.title}>{character.name}</h4>
                  <span className={s.tooltiptext}>{character.name}</span>
                </div>
                <FavoriteToogle characterId={String(character.id)} />
              </div>
            </div>
          )
        })}
      </div>
      {showPagination && (
        <Pagination offset={offset} limit={limit} total={total} />
      )}
    </section>
  )
}
export default HeroesList
