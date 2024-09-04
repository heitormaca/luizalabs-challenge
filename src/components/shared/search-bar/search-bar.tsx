import { useCallback, useRef } from 'react'
import s from './search-bar.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useSearchParamsObject } from '../../../hooks/useSearchParamsObject'

interface SearchBarProps {
  variant?: 'heros' | 'hero'
}

const SearchBar: React.FC<SearchBarProps> = ({ variant = 'heros' }) => {
  const [, setSearchParams] = useSearchParams()
  const searchParamsObject = useSearchParamsObject()

  const debounceRef = useRef<number | null>(null)

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = window.setTimeout(() => {
        setSearchParams((params) => {
          params.set('nameStartsWith', value)
          return params
        })
      }, 500)
    },
    [setSearchParams]
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
        value={searchParamsObject.nameStartsWith}
        placeholder="Procure por heróis"
        onChange={handleOnChange}
      />
    </div>
  )
}
export default SearchBar
