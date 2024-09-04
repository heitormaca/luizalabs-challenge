import { useNavigate, useParams } from 'react-router-dom'
import {
  useCharacter,
  useCharacterComics,
} from '../../../domains/characters/characters.hooks'
import HeroDetails from './hero-details'
import HeroLastComics from './hero-last-comics'
import s from './hero-page.module.scss'

const HeroPage: React.FC = () => {
  const { heroId } = useParams<{ heroId: string }>()

  const navigate = useNavigate()

  const { data: characterDetails, isPending: isPendingCharacterDetails } =
    useCharacter({ characterId: heroId ? Number(heroId) : -1 })

  const {
    data: characterComicsDetails,
    isPending: isPendingCharacterComicsDetails,
  } = useCharacterComics({
    characterId: heroId ? Number(heroId) : -1,
    orderBy: '-onsaleDate',
    limit: 10,
  })

  const currentDate = new Date().toISOString().split('T')[0]
  const startDate = '1900-01-01'
  const dateRange = `${startDate},${currentDate}`

  const {
    data: characterComicsDetailsDate,
    isPending: isPendingCharacterComicsDetailsDate,
  } = useCharacterComics({
    characterId: heroId ? Number(heroId) : -1,
    orderBy: '-onsaleDate',
    limit: 1,
    dateRange: dateRange,
  })

  const { results: characterResults } = characterDetails?.data || {}
  const { results: characterComicsResults } = characterComicsDetails?.data || {}
  const { results: characterComicsDateResults } =
    characterComicsDetailsDate?.data || {}

  const characterData = characterResults?.[0]

  const lastCharacterComicsData =
    characterComicsDateResults?.[0]?.dates?.[0]?.date

  const handleRedirect = () => {
    navigate(`/heroes`)
  }

  if (
    isPendingCharacterDetails ||
    isPendingCharacterComicsDetails ||
    isPendingCharacterComicsDetailsDate
  )
    return <div>Carregando...</div>

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo_wrapper}>
          <img
            src="/logo_menor.svg"
            alt="Logotipo Marvel Search heros"
            onClick={handleRedirect}
          />
        </div>
        {characterData && (
          <HeroDetails
            character={characterData}
            lastComicsDate={lastCharacterComicsData}
          />
        )}
        {characterComicsResults && (
          <HeroLastComics characterComics={characterComicsResults} />
        )}
      </div>
    </div>
  )
}
export default HeroPage
