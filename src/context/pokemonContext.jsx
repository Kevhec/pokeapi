import { createContext, useState } from 'react'

const PokemonContext = createContext({})

function PokemonProvider ({ children }) {
  const [pokemon, setPokemon] = useState(null)

  return (
    <PokemonContext.Provider value={[pokemon, setPokemon]}>
      {children}
    </PokemonContext.Provider>
  )
}

export { PokemonProvider, PokemonContext }
