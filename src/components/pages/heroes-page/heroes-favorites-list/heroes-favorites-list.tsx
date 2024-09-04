import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavoritesCharacters } from '../../../../domains/characters/characters.hooks'
import { useSearchParamsObject } from '../../../../hooks/useSearchParamsObject'
import { FavoriteToogle } from '../../../shared'
import Pagination from '../heroes-list/pagination'
import s from './heroes-favorites-list.module.scss'

interface HeroesFavoritesListProps {
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const HeroesFavoritesList: React.FC<HeroesFavoritesListProps> = ({
  setTotal,
  setIsLoading,
}) => {
  const searchParamsObject = useSearchParamsObject()
  const isOnlyFavorites = searchParamsObject.onlyFavorites === 'true'

  const { data, isLoading } = useFavoritesCharacters(isOnlyFavorites)

  const navigate = useNavigate()

  const handleCharacterClick = (characterId: string) => {
    navigate(`/heroes/${characterId}`)
  }

  const filterItems = useMemo(
    () =>
      (data || [])
        .filter((character) => {
          return character.name?.includes(
            searchParamsObject.nameStartsWith || ''
          )
        })
        .sort((a, b) => {
          if (searchParamsObject.orderBy === '-name') {
            return (b.name || '')?.localeCompare(a.name || '')
          }
          return (a.name || '')?.localeCompare(b.name || '')
        }),
    [data, searchParamsObject.nameStartsWith, searchParamsObject.orderBy]
  )

  const total = filterItems.length

  useEffect(() => {
    setTotal(filterItems.length)
  }, [filterItems.length])

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading])

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!data?.length) {
    return <div>Sem dados.</div>
  }

  return (
    <section>
      <div className={s.wrapper}>
        {filterItems.map((character) => {
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
      <Pagination offset={0} limit={20} total={total} />
    </section>
  )
}
export default HeroesFavoritesList
