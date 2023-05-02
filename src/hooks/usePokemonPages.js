import { useEffect, useState } from 'react'
import { getPokemonPage } from '../services/getPokemonPage'

export function usePokemonPages () {
  const [pokemonPage, setPokemonPage] = useState({})
  const [offset, setOffset] = useState(0)

  const onPageChange = () => {
    if (offset === undefined || offset === null || isNaN(offset)) return
    const fetchPages = async () => {
      try {
        const newPage = await getPokemonPage(offset, 20)
        setPokemonPage(newPage)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPages()
  }

  const updateOffset = (page) => {
    const newOffset = (page - 1) * 20
    setOffset(newOffset)
  }

  useEffect(onPageChange, [offset])

  return { pokemonPage, updateOffset }
}
