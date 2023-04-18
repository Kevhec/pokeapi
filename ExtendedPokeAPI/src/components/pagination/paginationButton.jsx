import { useRef } from 'react'

export function PaginationButton ({ children, name, pointingPage, currentPage, handlePaginationChange, aditionalClasses }) {
  const upperNavButton = useRef(null)

  const buttonClasses = `pagination__link pagination__link--${name} ${pointingPage === currentPage ? 'pagination__link--current' : ''}`.concat(aditionalClasses || '')

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 32) {
      handlePaginationChange(pointingPage)
      upperNavButton.current = document.querySelector(`.pagination__link--${name}`)
      upperNavButton.current.focus()
    }
  }

  return (
    <button
      className={buttonClasses}
      onClick={() => handlePaginationChange(pointingPage)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  )
}
