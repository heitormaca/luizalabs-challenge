import { useCallback, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import s from './search-bar.module.scss'

interface SearchBarProps {
  variant?: 'heros' | 'hero'
}

const SearchBar: React.FC<SearchBarProps> = ({ variant = 'heros' }) => {
  const { register, setValue } = useFormContext()

  const debounceRef = useRef<number | null>(null)

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = window.setTimeout(() => {
        setValue('search', value)
      }, 500)
    },
    [setValue]
  )

  return (
    <div className={s.wrapper} data-variant={variant}>
      <img
        src="/ic_busca_menor.svg"
        alt="Ícone de busca"
        className={s.search_icon_small}
      />
      <img src="/ic_busca.svg" alt="Ícone de busca" className={s.search_icon} />
      <input
        {...register('search')}
        placeholder="Procure por heróis"
        onChange={handleOnChange}
      />
    </div>
  )
}
export default SearchBar
