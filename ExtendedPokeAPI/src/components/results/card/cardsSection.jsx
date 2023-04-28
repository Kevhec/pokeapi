import { useContext } from 'react'
import Card from './card'
import { ModalOpennerContext } from '../../../context/modalContext'

export default function CardsSection ({ pokemonList }) {
  const [isOpen] = useContext(ModalOpennerContext)
  if (!pokemonList) return

  return (
    <section className='results__container' style={{ overflowY: isOpen && 'hidden' }}>
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
