import { useCallback, useState } from 'react'
import { fetchFromUrl } from '../services/fetchFromUrl'

export default function usePokemon () {
  const [pokemonLoading, setPokemonLoading] = useState(false)
  const [pokemon, setPokemon] = useState({})

  const fetchPokemon = useCallback(
    async ({ url }) => {
      try {
        setPokemonLoading(true)
        const newPokemon = await fetchFromUrl({ url })
        setPokemon(newPokemon)
      } catch (error) {
        console.error(error)
      } finally {
        setPokemonLoading(false)
      }
    }, [])

  return { pokemon, pokemonLoading, fetchPokemon }
}
