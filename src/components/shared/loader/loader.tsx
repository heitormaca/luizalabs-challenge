import s from './loader.module.scss'

interface LoaderProps {
  variant?: 'red' | 'white'
}

const Loader: React.FC<LoaderProps> = ({ variant = 'red' }) => {
  return <span data-variant={variant} className={s.loader}></span>
}
export default Loader
