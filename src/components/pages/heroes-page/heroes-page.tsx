import { FormProvider, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { CharactersParameters } from '../../../domains/characters/characters.types'
import { useCharacters } from '../../../domains/characters/characters.hooks'
import parseQueryString from '../../../utils/parseQueryString'
import SearchBar from '../../shared/search-bar'
import HeroesFilter from './heroes-filter'
import HeroesList from './heroes-list'
import s from './heroes-page.module.scss'

export interface CharactersFormParameters {
  search?: string
  orderBy?: boolean
  onlyFavorites: boolean
}

const HeroesPage: React.FC = () => {
  const methods = useForm<CharactersFormParameters>({
    defaultValues: {
      onlyFavorites: false,
      orderBy: true,
      search: '',
    },
  })

  const location = useLocation()
  const queryParams = parseQueryString(String(location.search))

  const name = methods.watch('search')
  const orderBy = methods.watch('orderBy')

  const requestParams: CharactersParameters = {
    nameStartsWith: name?.length ? name : undefined,
    orderBy: orderBy ? 'name' : '-name',
    offset: Number(queryParams.offset || 0),
    limit: Number(queryParams.limit || 20),
  }

  const { data, isPending } = useCharacters({ ...requestParams })

  const { offset, limit, total, results } = data?.data || {}

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

        <FormProvider {...methods}>
          <div className={s.search_bar}>
            <SearchBar />
          </div>
          <HeroesFilter total={total} />
          <HeroesList
            data={results}
            offset={offset}
            limit={limit}
            total={total}
            isPending={isPending}
          />
        </FormProvider>
      </div>
    </div>
  )
}
export default HeroesPage
