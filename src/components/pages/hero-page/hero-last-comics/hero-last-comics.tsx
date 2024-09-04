import { Comic } from '../../../../domains/characters/characters.types'
import s from './hero-last-comics.module.scss'

interface HeroLastComicsProps {
  characterComics: Comic[]
}

const HeroLastComics: React.FC<HeroLastComicsProps> = ({ characterComics }) => {
  return (
    <div className={s.wrapper}>
      <h4>Últimos lançamentos</h4>
      <div className={s.last_comics}>
        {characterComics.map((comic) => {
          const comicImage = `${comic.thumbnail?.path}.${comic.thumbnail?.extension}`

          return (
            <div key={comic.id}>
              <div className={s.image_wrapper}>
                <img src={comicImage} alt={comic.title} />
              </div>
              <div className={s.tooltip}>
                <h5 className={s.title}>{comic.title}</h5>
                <span className={s.tooltiptext}>{comic.title}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HeroLastComics
