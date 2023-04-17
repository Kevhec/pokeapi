import { useEffect, useState } from 'react'

export function useOptions () {
  const [options, setOptions] = useState([])

  const getTypes = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/type')
      const { results } = await res.json()
      return results
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTypes()
      .then(res => setOptions(res))
  }, [])

  return { options }
}
