import OrderByFavorites from './order-by-favorites'
import OrderByName from './order-by-name'
import s from './hero-filters.module.scss'

interface HeroesFilterProps {
  total?: number
  isLoading: boolean
}

const HeroesFilter: React.FC<HeroesFilterProps> = ({ total, isLoading }) => {
  const showFoundedItemsText = !isLoading && typeof total === 'number'

  const handleWord = (singular: string, plural: string) => {
    if (total === 1) {
      return singular
    }
    return plural
  }

  return (
    <div className={s.wrapper}>
      <div className={s.total}>
        {showFoundedItemsText &&
          `${handleWord('Encontrado', 'Encontrados')} ${total} ${handleWord('herói', 'heróis')}`}
      </div>
      <div className={s.filters}>
        <OrderByName />
        <OrderByFavorites />
      </div>
    </div>
  )
}
export default HeroesFilter
