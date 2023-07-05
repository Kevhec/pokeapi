import { useContext } from 'react'
import Card from './card'
import { ModalOpennerContext } from '../../../context/modalContext'
import { ColorProvider } from '../../../context/colorContext'

export default function CardsSection ({ pokemonList }) {
  const { isOpen } = useContext(ModalOpennerContext)
  if (!pokemonList) return

  return (
    <section className='results__container' style={{ overflowY: isOpen && 'hidden' }}>
      {
        pokemonList.map((pokemon) => {
          const { url, name } = pokemon
          return (
            <ColorProvider key={name}>
              <Card
                url={url}
              />
            </ColorProvider>
          )
        })
      }
    </section>
  )
}
