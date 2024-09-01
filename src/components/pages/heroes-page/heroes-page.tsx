import { FormProvider, useForm } from 'react-hook-form'
import SearchBar from '../../shared/search-bar'
import HeroesFilter from './heroes-filter'
import HeroesList from './heroes-list'
import s from './heroes-page.module.scss'

const HeroesPage: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      search: '',
      orderBy: true,
      onlyFavorites: false,
    },
  })

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
          <HeroesFilter />
          <HeroesList />
        </FormProvider>
      </div>
    </div>
  )
}
export default HeroesPage
