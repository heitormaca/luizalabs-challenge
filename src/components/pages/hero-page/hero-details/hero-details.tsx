import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Character } from '../../../../domains/characters/characters.types'
import { FavoriteToogle } from '../../../shared'
import HeroImage from './hero-image'
import s from './hero-details.module.scss'

interface HeroDetailsProps {
  character: Character
  lastComicsDate?: string
}

const HeroDetails: React.FC<HeroDetailsProps> = ({
  character,
  lastComicsDate,
}) => {
  const characterImage = `${character.thumbnail?.path}.${character.thumbnail?.extension}`

  let formattedDate: string | undefined

  if (lastComicsDate) {
    const date = parseISO(lastComicsDate)
    formattedDate = format(date, 'dd MMM. yyyy', { locale: ptBR })
  }

  return (
    <div className={s.wrapper}>
      <div key={character.id} className={s.character_details}>
        <div className={s.title_wrapper}>
          <h2 className="no_margin">{character.name}</h2>
          <div className={s.toogle}>
            <FavoriteToogle characterId={String(character.id)} />
          </div>
        </div>
        <div className={s.description}>{character.description}</div>
        <div className={s.infos}>
          <div className={s.comics}>
            <h5>Quadrinhos</h5>
            <div className={s.comics_image_wrapper}>
              <img src="/ic_quadrinhos.svg" alt="Ícone de quadrinhos" />
              <span>{character.comics?.available}</span>
            </div>
          </div>
          <div className={s.films}>
            <h5>Filmes</h5>
            <div className={s.films_image_wrapper}>
              <img src="/ic_trailer.svg" alt="Ícone de trailer de filmes" />
              <span>{character.series?.available}</span>
            </div>
          </div>
        </div>
        <div className={s.rating}>
          <p>Rating:</p>
          <div className={s.rating_image_wrapper}>
            <img src="/avaliacao_on.svg" alt="Ícone de estrela" />
            <img src="/avaliacao_on.svg" alt="Ícone de estrela" />
            <img src="/avaliacao_on.svg" alt="Ícone de estrela" />
            <img src="/avaliacao_on.svg" alt="Ícone de estrela" />
            <img src="/avaliacao_on.svg" alt="Ícone de estrela" />
          </div>
        </div>
        {formattedDate && (
          <div className={s.last_comic}>
            <p>
              Último quadrinho: <span>{formattedDate}</span>
            </p>
          </div>
        )}
      </div>
      <HeroImage src={characterImage} />
    </div>
  )
}
export default HeroDetails
