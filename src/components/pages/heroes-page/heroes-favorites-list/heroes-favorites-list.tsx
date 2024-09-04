import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../../../../contexts/favorites-context/favorites-context-hook'
import { FavoriteToogle } from '../../../shared'
import { useFavoritesCharacters } from '../../../../domains/characters/characters.hooks'
import { useSearchParamsObject } from '../../../../hooks/useSearchParamsObject'
import Pagination from '../heroes-list/pagination'
import s from './heroes-favorites-list.module.scss'

interface HeroesFavoritesListProps {
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

const HeroesFavoritesList: React.FC<HeroesFavoritesListProps> = ({
  setTotal,
}) => {
  const searchParamsObject = useSearchParamsObject()
  const isOnlyFavorites = searchParamsObject.onlyFavorites === 'true'

  const { data, isLoading } = useFavoritesCharacters(isOnlyFavorites)

  const navigate = useNavigate()

  const { favorites } = useFavorites()

  const total = favorites.length

  const handleCharacterClick = (characterId: string) => {
    navigate(`/heroes/${characterId}`)
  }

  const filterItens = useMemo(
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

  useEffect(() => {
    setTotal(favorites.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites.length])

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!data?.length) {
    return <div>Sem dados.</div>
  }

  return (
    <section>
      <div className={s.wrapper}>
        {filterItens.map((character) => {
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
