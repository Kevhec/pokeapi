import { createContext, useState } from 'react'

const PokemonContext = createContext({})

function PokemonProvider ({ children }) {
  const [pokemon, setPokemon] = useState(null)

  /*   useEffect(() => {
      async function getPokemonTemplate (url) {
        const contextPokemon = await fetchFromUrl({ url })
        const { json: contextSpecies } = await searchInfo(1)

        const {
          generation: { url: generationUrl } = {},
          habitat: { url: habitatUrl } = {}
        } = contextSpecies || {}

        const contextGeneration = await fetchFromUrl({ url: generationUrl })
        const contextHabitat = await fetchFromUrl({ url: habitatUrl })
        const { abilities } = contextPokemon
        const getAbility = await fetchFromUrl({ url: abilities[0].ability.url })
        const contextAbilities = [{
          name: getAbility.names[0].name,
          description: getAbility.flavor_text_entries[0].flavor_text
        }]
        setPokemon({ contextPokemon, contextSpecies, contextGeneration, contextHabitat, contextAbilities })
      }
      getPokemonTemplate('https://pokeapi.co/api/v2/pokemon/1/')
    }, []) */

  return (
    <PokemonContext.Provider value={[pokemon, setPokemon]}>
      {children}
    </PokemonContext.Provider>
  )
}

export { PokemonProvider, PokemonContext }
