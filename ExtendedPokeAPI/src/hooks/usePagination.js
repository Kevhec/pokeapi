import { useCallback, useEffect, useState } from 'react'

export function usePagination ({ maxElements, updateOffset, currentPage, onPageChange }) {
  const [pages, setPages] = useState(0)
  const [buttonsPages, setButtonsPages] = useState([])
  useEffect(() => {
    setPages(Math.ceil(maxElements / 20))
  }, [maxElements])

  const handlePaginationChange = useCallback((page) => {
    onPageChange(page)
    updateOffset(page)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [updateOffset])

  const generateLinks = useCallback(() => {
    const MAX_BUTTONS = 5
    const links = []
    let startPage = 1
    let endPage = pages

    if (currentPage >= (pages - Math.floor(MAX_BUTTONS / 2))) {
      startPage = pages - MAX_BUTTONS + 1
      endPage = pages
    } else if (currentPage > MAX_BUTTONS / 2) {
      startPage = currentPage - Math.floor(MAX_BUTTONS / 2)
      endPage = currentPage + Math.floor(MAX_BUTTONS / 2)
    } else {
      endPage = MAX_BUTTONS
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
