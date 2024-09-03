import { ButtonHTMLAttributes, ReactNode } from 'react'
import s from './button-icon.module.scss'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ children, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  )
}
export default ButtonIcon
