import { Card } from './card'

export function CardsSection ({ pokemonList }) {
  if (!pokemonList) return

  return (
    <section className='results__container'>
      {
        pokemonList.map((pokemon) => {
          const { url, name } = pokemon
          return (
            <Card
              url={url}
              key={name}
            />
          )
        })
      }
    </section>
  )
}
