import { useFormContext } from 'react-hook-form'
import s from './search-bar.module.scss'

interface SearchBarProps {
  variant?: 'heros' | 'hero'
}

const SearchBar: React.FC<SearchBarProps> = ({ variant = 'heros' }) => {
  const { register } = useFormContext()

  return (
    <div className={s.wrapper} data-variant={variant}>
      <img
        src="/ic_busca_menor.svg"
        alt="Ícone de busca"
        className={s.search_icon_small}
      />
      <img src="/ic_busca.svg" alt="Ícone de busca" className={s.search_icon} />
      <input {...register('search')} placeholder="Procure por heróis" />
    </div>
  )
}
export default SearchBar
