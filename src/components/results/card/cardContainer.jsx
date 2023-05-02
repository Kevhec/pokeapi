import { useContext } from 'react'
import { ModalOpennerContext } from '../../../context/modalContext'
import { PokemonContext } from '../../../context/pokemonContext'

export default function CardContainer ({ children, color, url, pokemon, species }) {
  const [isOpen, setIsOpen] = useContext(ModalOpennerContext)
  const [, setPokemon] = useContext(PokemonContext)

  const newPokemon = {
    pokemon,
    species
  }

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 32) {
      setIsOpen(!isOpen)
      setPokemon(newPokemon)
    }
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
    setPokemon(newPokemon)
  }

  return (
    <div
      className='card__container'
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ backgroundColor: color || '#1b1b1b' }}
    >
      {children}
    </div>
  )
}
