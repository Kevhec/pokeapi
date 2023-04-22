import { useEffect, useState } from 'react'
import { getPokemon } from '../services/getPokemon'
const TEMPLATE = {
  id: 0,
  name: '',
  sprites: {
    other: {
      'official-artwork': { front_default: '' }
    }
  },
  stats: [],
  types: []
}

export default function usePokemon ({ url }) {
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState(TEMPLATE)

  useEffect(() => {
    const fetchPokemon = async ({ url }) => {
      try {
        setLoading(true)
        const newPokemon = await getPokemon({ url })
        setPokemon(newPokemon)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon({ url })
  }, [])

  return { pokemon, loading }
}
