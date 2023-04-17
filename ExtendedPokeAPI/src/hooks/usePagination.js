import { useCallback, useEffect, useState } from 'react'

export function usePagination ({ maxElements, updateOffset, currentPage, onPageChange, debouncedChange }) {
  const [pages, setPages] = useState(0)
  const [buttonsPages, setButtonsPages] = useState([])
  useEffect(() => {
    setPages(Math.ceil(maxElements / 20))
  }, [maxElements])

  const handlePaginationChange = useCallback((page) => {
    onPageChange(page)
    updateOffset(page)
  }, [updateOffset])

  const generateLinks = useCallback(() => {
    const MAX_BUTTONS = 5
    const links = []
    let startPage = 1
    let endPage = pages

    if (currentPage > Math.floor(MAX_BUTTONS / 2)) {
      startPage = Math.max(currentPage - Math.floor(MAX_BUTTONS / 2), 1)
      endPage = Math.min(startPage + MAX_BUTTONS - 1, pages)
    } else {
      endPage = Math.min(MAX_BUTTONS, pages)
    }

    for (let i = startPage; i <= endPage; i++) {
      links.push(i)
      /* links.push(
        React.createElement('button', {
          key: i,
          className: 'pagination__link pagination__link--'.concat(i, ' ').concat(i === currentPage ? 'pagination__link--current' : ''),
          onClick: function () {
            return handlePaginationChange(i)
          }
        }, i)
      ) */
    }
    return links
  }, [pages, handlePaginationChange])

  useEffect(() => {
    const links = generateLinks()
    setButtonsPages(links)
  }, [generateLinks])

  return {
    buttonsPages,
    pages,
    currentPage,
    handlePaginationChange
  }
}
