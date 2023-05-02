import { usePagination } from '../../hooks/usePagination'
import { PaginationButton } from './paginationButton'

export default function Pagination ({ maxElements, updateOffset, onPageChange, currentPage }) {
  const {
    buttonsPages,
    pages,
    handlePaginationChange
  } = usePagination({ maxElements, updateOffset, currentPage, onPageChange })

  return (
    <nav className='pagination'>
      {
        currentPage - 10 > 0 &&
          <PaginationButton
            name='goBack10'
            pointingPage={currentPage - 10}
            handlePaginationChange={handlePaginationChange}
            aditionalClasses='pagination__link--small pagination__link--flex'
          >
            <img src='/assets/ChevronDoubleLeft.svg' alt='' />
            10
          </PaginationButton>
      }
      {
        /* Previous page button */
        currentPage - 1 > 0 &&
          <PaginationButton
            name='prev'
            pointingPage={currentPage - 1}
            handlePaginationChange={handlePaginationChange}
            aditionalClasses='pagination__link--small'
          >
            <img src='/assets/singleLeftArrow.svg' alt='' />
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
            aditionalClasses='pagination__link--small'
          >
            <img src='/assets/singleRightArrow.svg' alt='' />
          </PaginationButton>
      }
      {
        currentPage + 10 <= pages &&
          <PaginationButton
            name='goBack10'
            pointingPage={currentPage + 10}
            handlePaginationChange={handlePaginationChange}
            aditionalClasses='pagination__link--small pagination__link--flex'
          >
            10
            <img src='/assets/ChevronDoubleRight.svg' alt='' />
          </PaginationButton>
      }
    </nav>
  )
}
