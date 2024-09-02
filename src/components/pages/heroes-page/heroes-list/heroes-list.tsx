import s from './heroes-list.module.scss'

const HeroesList: React.FC = () => {
  const data = [
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746.jpg',
      title: 'Spider-Man (1602)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/520d1ad3e543f.jpg',
      title: 'Spider-Man (2099)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4fce7a4d900f4.jpg',
      title: 'Spider-Man (Ai Apaec)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5317717bed6fe.jpg',
      title: 'Spider-Man (Ben Reilly)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/5317718f0a2e7.jpg',
      title: 'Spider-Man (House of M)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/5/03/5239c4d095611.jpg',
      title: 'Spider-Man (LEGO Marvel Super Heroes)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/531772716d0ac.jpg',
      title: 'Spider-Man (Marvel Zombies)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/9/03/5239b59f49020.jpg',
      title: 'Spider-Man (Marvel: Avengers Alliance)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/537bcfa1eed73.jpg',
      title: 'Spider-Man (Miles Morales)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/531771a14fcf6.jpg',
      title: 'Spider-Man (Noir)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
      title: 'Spider-Man (Peter Parker)',
    },
    {
      src: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/4be86ad8ada17.jpg',
      title: 'Spider-Man (Takuya Yamashiro)',
    },
  ]

  return (
    <div className={s.wrapper}>
      {data.map((character) => (
        <div key={character.title}>
          <div className={s.image_wrapper}>
            <img src={character.src} alt={character.title} />
          </div>
          <div className={s.title_wrapper}>
            <div className={s.tooltip}>
              <h4 className={s.title}>{character.title}</h4>
              <span className={s.tooltiptext}>{character.title}</span>
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
  )
}
export default HeroesList
