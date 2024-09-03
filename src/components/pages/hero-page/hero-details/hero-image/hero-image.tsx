import { useState } from 'react'
import { IconArrowsMaximize, IconArrowsMinimize } from '@tabler/icons-react'
import classNames from '../../../../../utils/classNames'
import { ButtonIcon } from '../../../../shared'
import s from './hero-image.module.scss'

interface HeroImageProps {
  src: string
}

const HeroImage: React.FC<HeroImageProps> = ({ src }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={classNames(s.wrapper, !!isExpanded && s.expanded)}>
      <img src={src} alt="Imagem do Herói" />
      <button onClick={handleExpandToggle} className={s.expand_button}>
        {isExpanded ? (
          <ButtonIcon>
            <IconArrowsMaximize size={18} color="red" />
          </ButtonIcon>
        ) : (
          <ButtonIcon>
            <IconArrowsMinimize size={18} color="red" />
          </ButtonIcon>
        )}
      </button>
    </div>
  )
}
export default HeroImage
