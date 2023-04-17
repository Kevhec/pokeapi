export function PaginationButton ({ children, name, pointingPage, currentPage, handlePaginationChange }) {
  return (
    <button
      className={`pagination__link pagination__link--${name} ${pointingPage === currentPage ? 'pagination__link--current' : ''}`}
      onClick={() => handlePaginationChange(pointingPage)}
    >
      {children}
    </button>
  )
}
