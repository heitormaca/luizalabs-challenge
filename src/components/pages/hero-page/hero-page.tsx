import { useParams } from 'react-router-dom'

const HeroPage: React.FC = () => {
  const { heroId } = useParams<{ heroId: string }>()

  console.log(heroId)

  return (
    <>
      <div>HeroPage</div>
    </>
  )
}
export default HeroPage
