import { useSearchParams } from 'react-router-dom'
import { useSearchParamsObject } from '../../../../../hooks/useSearchParamsObject'
import s from './order-by-name.module.scss'

const OrderByName: React.FC = () => {
  const [, setSearchParams] = useSearchParams()
  const searchParamsObject = useSearchParamsObject()

  const isChecked = searchParamsObject.orderBy
    ? searchParamsObject.orderBy === 'name'
      ? true
      : false
    : true

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((params) => {
      params.set('orderBy', e.target.checked ? 'name' : '-name')
      return params
    })
  }

  return (
    <div className={s.wrapper}>
      <div className={s.switch_label}>
        <img src="/ic_heroi.svg" alt="Ícone de herói" />
        <span>Ordenar por nome - A/Z</span>
      </div>
      <label className={s.switch}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className={s.slider}></span>
      </label>
    </div>
  )
}
export default OrderByName
