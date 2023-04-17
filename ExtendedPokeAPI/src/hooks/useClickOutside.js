import { useEffect } from 'react'

export function useClickOutside (ref, handler) {
  useEffect(() => {
    const listener = (evt) => {
      if (ref.current && !ref.current.contains(evt.target) && evt.target !== ref.current.parentElement.children[0]) {
        handler()
      }
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
