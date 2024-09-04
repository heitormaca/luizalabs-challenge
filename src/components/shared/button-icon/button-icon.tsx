import { HTMLAttributes, ReactNode } from 'react'
import classNames from '../../../utils/classNames'
import s from './button-icon.module.scss'

interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  disabled?: boolean
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <div className={classNames(s.button, !!disabled && s.disabled)} {...props}>
      {children}
    </div>
  )
}

export default ButtonIcon
