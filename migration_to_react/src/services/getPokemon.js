import { useEffect, useState } from 'react'

const BASE_URL = 'https://pokeapi.co/api/v2/'

export default function getPokemon (name) {
  const [response, setResponse] = useState()

  useEffect(() => {
    async function fetchPokemon () {
      const res = await fetch(BASE_URL + 'pokemon/' + name + '/')
      const resJSON = await res.json()
      setResponse(resJSON)
    }

    fetchPokemon()
  }, [])

  return response
}
