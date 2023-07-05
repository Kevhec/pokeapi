import { useContext } from 'react'
import { ModalOpennerContext } from '../../../context/modalContext'
import { PokemonContext } from '../../../context/pokemonContext'
import { ColorContext } from '../../../context/colorContext'

export default function CardContainer ({ children, url, pokemon, species, pokemonLoading, speciesLoading }) {
  const { setIsOpen } = useContext(ModalOpennerContext)
  const { setPokemon } = useContext(PokemonContext)
  const { color } = useContext(ColorContext)

  const newPokemon = {
    pokemon,
    species
  }

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 32) {
      setIsOpen(true)
      setPokemon(newPokemon)
    }
  }

  const handleClick = () => {
    if (pokemonLoading || speciesLoading) return
    setIsOpen(true)
    setPokemon(newPokemon)
  }

  return (
    <div
      className='card__container'
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ '--pokemonColor': color || '#1b1b1b' }}
    >
      {children}
    </div>
  )
}
