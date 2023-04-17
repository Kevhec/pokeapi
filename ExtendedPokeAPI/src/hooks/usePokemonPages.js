import { useEffect, useRef, useState } from 'react'
import { getPokemonPage } from '../services/getPokemonPage'

export function usePokemonPages ({ currentPage }) {
  const [pokemonPage, setPokemonPage] = useState({})
  const [offset, setOffset] = useState(0)
  const previousPage = useRef(currentPage)

  const onPageChange = () => {
    const fetchPages = async () => {
      if (previousPage.current === currentPage) return
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
    previousPage.current = page - 1
    setOffset(newOffset)
  }

  useEffect(onPageChange, [offset])

  return { pokemonPage, updateOffset }
}
