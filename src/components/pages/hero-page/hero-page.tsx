import { useParams } from 'react-router-dom'
import {
  useCharacter,
  useCharacterComics,
} from '../../../domains/characters/characters.hooks'
import HeroDetails from './hero-details'
import HeroLastComics from './hero-last-comics'
import s from './hero-page.module.scss'

const HeroPage: React.FC = () => {
  const { heroId } = useParams<{ heroId: string }>()

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

  const { results: characterResults } = characterDetails?.data || {}
  const { results: characterComicsResults } = characterComicsDetails?.data || {}

  const characterData = characterResults?.[0]

  const lastCharacterComicsData = characterComicsResults?.[0].dates?.[0].date

  if (isPendingCharacterDetails || isPendingCharacterComicsDetails)
    return <div>Carregando...</div>

  console.log(characterComicsDetails)

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo_wrapper}>
          <img src="/logo_menor.svg" alt="Logotipo Marvel Search heros" />
        </div>
        {characterData && (
          <HeroDetails
            character={characterData}
            lastComicsDate={lastCharacterComicsData}
          />
        )}
        <HeroLastComics />
      </div>
    </div>
  )
}
export default HeroPage
