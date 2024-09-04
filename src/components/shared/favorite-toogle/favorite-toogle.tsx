import { useState } from 'react'
import { useFavorites } from '../../../contexts/favorites-context/favorites-context-hook'
import s from './favorite-toogle.module.scss'

interface FavoriteToogleProps extends React.HTMLAttributes<HTMLDivElement> {
  characterId: string
}

interface TooltipMessageProps {
  message: string
  characterId: string
}

const FavoriteToogle: React.FC<FavoriteToogleProps> = ({
  characterId,
  ...props
}) => {
  const { getFavorite, handleFavoriteClick } = useFavorites()

  const [tooltipMessage, setTooltipMessage] = useState<TooltipMessageProps>({
    message: '',
    characterId: '',
  })

  const [isHovered, setIsHovered] = useState(false)

  const isFavorite = getFavorite(characterId)

  const handleToggleFavorite = () => {
    const result = handleFavoriteClick(characterId)
    if (typeof result === 'string') {
      setTooltipMessage({ message: result, characterId })
    }
  }

  const isTooltipVisible =
    tooltipMessage.characterId === characterId &&
    !!tooltipMessage.message &&
    isHovered

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => {
    setIsHovered(true)
    setTooltipMessage({ message: '', characterId: '' })
  }

  return (
    <div className={s.wrapper} {...props}>
      {isFavorite ? (
        <img
          src="/favorito_01.svg"
          alt="Ícone de coração preenchido"
          width={24}
          height={24}
          className={s.favorite}
          onClick={handleToggleFavorite}
        />
      ) : (
        <div
          className={s.tooltip}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <img
            src="/favorito_02.svg"
            alt="Ícone de coração não preenchido"
            width={24}
            height={24}
            className={s.unfavorite}
            onClick={handleToggleFavorite}
          />
          {isTooltipVisible && (
            <span className={s.tooltiptext}>{tooltipMessage.message}</span>
          )}
        </div>
      )}
    </div>
  )
}

export default FavoriteToogle
