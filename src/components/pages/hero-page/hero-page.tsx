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
  })

  const { results } = characterDetails?.data || {}

  const characterData = results?.[0]

  if (isPendingCharacterDetails || isPendingCharacterComicsDetails)
    return <div>Carregando...</div>

  console.log(characterComicsDetails)

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {characterData && <HeroDetails character={characterData} />}
        <HeroLastComics />
      </div>
    </div>
  )
}
export default HeroPage
