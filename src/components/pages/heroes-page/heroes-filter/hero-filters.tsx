import OrderByFavorites from './order-by-favorites'
import OrderByName from './order-by-name'
import s from './hero-filters.module.scss'

const HeroesFilter: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.total}>Entrados 20 heróis</div>
      <div className={s.filters}>
        <OrderByName />
        <OrderByFavorites />
      </div>
    </div>
  )
}
export default HeroesFilter
