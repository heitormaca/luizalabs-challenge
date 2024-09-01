import { useFormContext } from 'react-hook-form'
import s from './order-by-name.module.scss'

const OrderByName: React.FC = () => {
  const { register, setValue, watch } = useFormContext()

  const isChecked = watch('orderBy')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('orderBy', e.target.checked)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.switch_label}>
        <img src="/ic_heroi.svg" alt="Ícone de herói" />
        <span>Ordenar por nome - A/Z</span>
      </div>
      <label className={s.switch}>
        <input
          {...register('orderBy')}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={s.slider}></span>
      </label>
    </div>
  )
}
export default OrderByName
