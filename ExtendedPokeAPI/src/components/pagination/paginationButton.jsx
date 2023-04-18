import { useRef } from 'react'

export function PaginationButton ({ children, name, pointingPage, currentPage, handlePaginationChange }) {
  const upperNavButton = useRef(null)

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 32) {
      handlePaginationChange(pointingPage)
      upperNavButton.current = document.querySelector(`.pagination__link--${name}`)
      upperNavButton.current.focus()
    }
  }

  return (
    <button
      className={`pagination__link pagination__link--${name} ${pointingPage === currentPage ? 'pagination__link--current' : ''}`}
      onClick={() => handlePaginationChange(pointingPage)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  )
}
