import { useCallback, useMemo, useState } from 'react'
import { useFavorites } from '../../../../contexts/favorites-context/favorites-context-hook'
import { Character } from '../../../../domains/characters/characters.types'
import Pagination from './pagination'
import s from './heroes-list.module.scss'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface HeroesListProps {
  data?: Character[]
  offset?: number
  limit?: number
  total?: number
  isPending: boolean
}

interface TooltipMessageProps {
  message: string
  characterId: string
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

  const { favorites, isFavorite, handleFavoriteClick } = useFavorites()

  const [tooltipMessage, setTooltipMessage] = useState<TooltipMessageProps>({
    message: '',
    characterId: '',
  })

  const [isHovered, setIsHovered] = useState(false)

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

  const handleToggleFavorite = useCallback(
    (characterId: string) => {
      const result = handleFavoriteClick(characterId)
      if (typeof result === 'string') {
        setTooltipMessage({ message: result, characterId })
      }
    },
    [handleFavoriteClick]
  )

  const handleCharacterClick = (characterId: string) => {
    navigate(`/heroes/${characterId}`)
  }

  const isTooltipVisible = (characterId: string) =>
    tooltipMessage.characterId === characterId &&
    tooltipMessage.message &&
    isHovered

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
          if (!character.id) return null
          const hasFavorite = isFavorite(String(character.id))

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
                {hasFavorite ? (
                  <img
                    src="/favorito_01.svg"
                    alt="Ícone de coração preenchido"
                    width={24}
                    height={24}
                    className={s.favorite}
                    onClick={() => handleToggleFavorite(String(character.id))}
                  />
                ) : (
                  <div
                    className={s.tooltip_image}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                      setIsHovered(false)
                      setTooltipMessage({ message: '', characterId: '' })
                    }}
                  >
                    <img
                      src="/favorito_02.svg"
                      alt="Ícone de coração não preenchido"
                      width={24}
                      height={24}
                      className={s.unfavorite}
                      onClick={() => handleToggleFavorite(String(character.id))}
                    />
                    {isTooltipVisible(String(character.id)) && (
                      <span className={s.tooltiptext}>
                        {tooltipMessage.message}
                      </span>
                    )}
                  </div>
                )}
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
