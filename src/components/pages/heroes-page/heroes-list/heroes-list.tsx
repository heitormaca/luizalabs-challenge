import { Character } from '../../../../domains/characters/characters.types'
import s from './heroes-list.module.scss'
import Pagination from './pagination'

interface HeroesListProps {
  data?: Character[]
  offset?: number
  limit?: number
  total?: number
  isPending: boolean
}

const HeroesList: React.FC<HeroesListProps> = ({
  data,
  isPending,
  offset,
  limit,
  total,
}) => {
  const showPagination =
    typeof offset === 'number' &&
    typeof limit === 'number' &&
    typeof total === 'number'

  if (isPending) {
    return <div>Carregando...</div>
  }

  if (!data?.length) {
    return <div>Sem dados.</div>
  }

  return (
    <section>
      <div className={s.wrapper}>
        {data.map((character) => (
          <div key={character.id}>
            <div className={s.image_wrapper}>
              <img
                src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
                alt={character.name}
              />
            </div>
            <div className={s.title_wrapper}>
              <div className={s.tooltip}>
                <h4 className={s.title}>{character.name}</h4>
                <span className={s.tooltiptext}>{character.name}</span>
              </div>
              <img
                src="/favorito_02.svg"
                alt="Ícone de coração não preenchido"
                width={24}
                height={24}
                className={s.unfavorite}
              />
            </div>
          </div>
        ))}
      </div>
      {showPagination && (
        <Pagination offset={offset} limit={limit} total={total} />
      )}
    </section>
  )
}
export default HeroesList
