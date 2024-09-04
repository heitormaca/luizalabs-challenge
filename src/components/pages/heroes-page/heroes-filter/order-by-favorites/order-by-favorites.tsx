import { useSearchParams } from 'react-router-dom'
import { useSearchParamsObject } from '../../../../../hooks/useSearchParamsObject'
import s from './order-by-favorites.module.scss'

const OrderByFavorites: React.FC = () => {
  const [, setSearchParams] = useSearchParams()
  const searchParamsObject = useSearchParamsObject()

  const isOnlyFavorites = searchParamsObject.onlyFavorites === 'true'

  const toggleFavorite = () => {
    setSearchParams((params) => {
      params.set('onlyFavorites', String(!isOnlyFavorites))
      return params
    })
  }

  return (
    <div className={s.wrapper}>
      <div className={s.icon} onClick={toggleFavorite}>
        {isOnlyFavorites ? (
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
