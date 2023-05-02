import { useEffect, useState } from 'react'
import { usePokemonPages } from '../../hooks/usePokemonPages'
import Pagination from '../pagination/pagination'
import CardsSection from './card/cardsSection'

export default function Results () {
  const [currentPage, setCurrentPage] = useState(1)

  const {
    pokemonPage: {
      results,
      count
    },
    updateOffset
  } = usePokemonPages({ currentPage })

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(updateOffset, [currentPage])

  return (
    <>
      <Pagination
        updateOffset={updateOffset}
        maxElements={count}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <CardsSection pokemonList={results} />
      <Pagination
        updateOffset={updateOffset}
        maxElements={count}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}
