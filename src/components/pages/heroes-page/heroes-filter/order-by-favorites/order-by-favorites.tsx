import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import s from './order-by-favorites.module.scss'

const OrderByFavorites: React.FC = () => {
  const { setValue, watch } = useFormContext()
  const [onlyFavorites, setOnlyFavorites] = useState(
    watch('onlyFavorites') || false
  )

  const toggleFavorite = () => {
    const newValue = !onlyFavorites
    setOnlyFavorites(newValue)
    setValue('onlyFavorites', newValue)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.icon} onClick={toggleFavorite}>
        {onlyFavorites ? (
          <img
            src="/favorito_01.svg"
            alt="Ícone de coração preenchido"
            width={24}
            height={24}
            className={s.favorite}
          />
        ) : (
          <img
            src="/favorito_02.svg"
            alt="Ícone de coração não preenchido"
            width={24}
            height={24}
            className={s.unfavorite}
          />
        )}
      </div>
      <span className={s.label}>Somente favoritos</span>
    </div>
  )
}
export default OrderByFavorites
