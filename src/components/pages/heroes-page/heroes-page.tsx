import { useState } from 'react'
import { SearchBar } from '../../shared'
import HeroesFavoritesList from './heroes-favorites-list'
import { useSearchParamsObject } from '../../../hooks/useSearchParamsObject'
import HeroesList from './heroes-list'
import HeroesFilter from './heroes-filter/hero-filters'
import s from './heroes-page.module.scss'

export interface CharactersFormParameters {
  search: string
  orderBy: boolean
  onlyFavorites: boolean
}

const HeroesPage: React.FC = () => {
  const [total, setTotal] = useState(0)

  const searchParamsObject = useSearchParamsObject()
  const isOnlyFavorites = searchParamsObject.onlyFavorites === 'true'

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo_wrapper}>
          <img src="/logo.svg" alt="Logotipo Marvel Search heros" />
        </div>
        <h1 className={s.title}>Explore o universo</h1>
        <p className={s.description}>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e arqueles que você descobrirá em breve!
        </p>

        <div className={s.search_bar}>
          <SearchBar />
        </div>
        <HeroesFilter total={total} />
        {isOnlyFavorites ? (
          <HeroesFavoritesList setTotal={setTotal} />
        ) : (
          <HeroesList setTotal={setTotal} />
        )}
      </div>
    </div>
  )
}
export default HeroesPage
