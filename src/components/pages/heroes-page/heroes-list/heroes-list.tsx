import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../../../../contexts/favorites-context/favorites-context-hook'
import { Character } from '../../../../domains/characters/characters.types'
import FavoriteToogle from '../../../shared/favorite-toogle'
import Pagination from './pagination'
import s from './heroes-list.module.scss'

interface HeroesListProps {
  data?: Character[]
  offset?: number
  limit?: number
  total?: number
  isPending: boolean
}

const HeroesList: React.FC<HeroesListProps> = ({
  data,
  isPending,
  offset,
  limit,
  total,
}) => {
  const navigate = useNavigate()

  const { watch } = useFormContext()

  const { favorites } = useFavorites()

  const onlyFavorites = watch('onlyFavorites')

  const filteredData = useMemo(() => {
    return onlyFavorites
      ? data?.filter((character) => favorites.includes(String(character.id)))
      : data
  }, [onlyFavorites, data, favorites])

  const showPagination =
    typeof offset === 'number' &&
    typeof limit === 'number' &&
    typeof total === 'number'

  const handleCharacterClick = (characterId: string) => {
    navigate(`/heroes/${characterId}`)
  }

  if (isPending) {
    return <div>Carregando...</div>
  }

  if (!filteredData?.length) {
    return <div>Sem dados.</div>
  }

  return (
    <section>
      <div className={s.wrapper}>
        {filteredData.map((character) => {
          return (
            <div key={character.id}>
              <div
                className={s.image_wrapper}
                onClick={() => handleCharacterClick(String(character.id))}
              >
                <img
                  src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
                  alt={character.name}
                />
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
