import { useState } from 'react'
import { useSearchParamsObject } from '../../../hooks/useSearchParamsObject'
import { SearchBar } from '../../shared'
import HeroesFavoritesList from './heroes-favorites-list'
import HeroesFilter from './heroes-filter/hero-filters'
import HeroesList from './heroes-list'
import s from './heroes-page.module.scss'

export interface CharactersFormParameters {
  search: string
  orderBy: boolean
  onlyFavorites: boolean
}

const HeroesPage: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

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
        <HeroesFilter total={total} isLoading={isLoading} />
        {isOnlyFavorites ? (
          <HeroesFavoritesList
            setTotal={setTotal}
            setIsLoading={setIsLoading}
          />
        ) : (
          <HeroesList setTotal={setTotal} setIsLoading={setIsLoading} />
        )}
      </div>
    </div>
  )
}
export default HeroesPage
