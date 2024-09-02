import { Character } from '../../../../domains/characters/characters.types'
import FavoriteToogle from '../../../shared/favorite-toogle'
import s from './hero-details.module.scss'

interface HeroDetailsProps {
  character: Character
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ character }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo_wrapper}>
        <img src="/logo_menor.svg" alt="Logotipo Marvel Search heros" />
      </div>
      <div key={character.id} className={s.character_details}>
        <div>
          <div className={s.title_wrapper}>
            <h2>{character.name}</h2>
            <FavoriteToogle characterId={String(character.id)} />
          </div>
          <div className={s.description}>{character.description}</div>
          <div className={s.infos}>
            <div className={s.comics}>{character.comics?.available}</div>
            <div className={s.films}>{character.series?.available}</div>
          </div>
          <div className={s.rating}></div>
          <div className={s.last_comic}></div>
        </div>
      </div>
    </div>
  )
}
export default HeroDetails
