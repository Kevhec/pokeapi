import { usePagination } from '../../hooks/usePagination'
import { PaginationButton } from './paginationButton'

export function Pagination ({ maxElements, updateOffset, onPageChange, currentPage }) {
  const {
    buttonsPages,
    pages,
    handlePaginationChange
  } = usePagination({ maxElements, updateOffset, currentPage, onPageChange })

  return (
    <nav className='pagination'>
      {
        /* Previous page button */
        Boolean(currentPage - 1) &&
          <PaginationButton
            name='prev'
            pointingPage={currentPage - 1}
            handlePaginationChange={handlePaginationChange}
          >
            <svg fill='none' stroke='currentColor' strokeWidth='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </PaginationButton>
      }
      {/* Pagination buttons */}
      {buttonsPages.map(button => {
        return (
          <PaginationButton
            name={button}
            pointingPage={button}
            key={button}
            currentPage={currentPage}
            handlePaginationChange={handlePaginationChange}
          >
            {button}
          </PaginationButton>
        )
      })}
      {
        /* Next page button */
        Boolean(currentPage !== pages) &&
          <PaginationButton
            name='next'
            pointingPage={currentPage + 1}
            handlePaginationChange={handlePaginationChange}
          >
            <svg fill='none' stroke='currentColor' strokeWidth='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </PaginationButton>
      }
    </nav>
  )
}
