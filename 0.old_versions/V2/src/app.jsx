import { useState, useEffect } from 'react'
import getPokemon from './services/getPokemon.js'
import SearchBar from './components/searchBar.jsx'
import Card from './components/card.jsx'

export default function App () {
  const [name, setName] = useState(1)
  const [pokemon, setPokemon] = useState(null)

  const getPokemonName = (newName) => {
    setName(newName)
  }

  const updatePokemon = () => {
    getPokemon(name).then(newPokemon => setPokemon(newPokemon))
  }

  useEffect(updatePokemon, [name])

  return (
    <>
      <SearchBar getPokemonName={getPokemonName} />
      <Card pokemon={pokemon} />
    </>
  )
}
