import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import s from './select.module.scss'

interface Option {
  value: number
  label: string
}

interface Select {
  total: number
}

const Select: React.FC<Select> = ({ total }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedValue, setSelectedValue] = useState<number>(
    Number(searchParams.get('limit') || '20')
  )

  const options: Option[] = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value
    setSelectedValue(Number(newLimit))
    searchParams.set('limit', String(newLimit))
    setSearchParams(searchParams)
  }

  const getOptionsWithDisabledStatus = () => {
    return options.map((option) => ({
      ...option,
      disabled: total < option.value,
    }))
  }

  const optionsWithDisabledStatus = getOptionsWithDisabledStatus()

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className={s.select}
      >
        {optionsWithDisabledStatus.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}
export default Select
