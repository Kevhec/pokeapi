import { useState, useEffect } from 'react'
import SearchBar from './components/searchBar.jsx'
import Card from './components/card.jsx'
import getPokemon from './services/getPokemon.js'

export default function App () {
  const [name, setName] = useState(1)
  const [pokemon, setPokemon] = useState()

  const getPokemonName = (name) => {
    const newName = name
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
