import { useEffect } from 'react'

export function useClickOutside (ref, active, handler) {
  useEffect(() => {
    const listener = (evt) => {
      if (ref.current &&
        !ref.current.parentElement.contains(evt.target) &&
        active === true &&
        !ref.current.contains(evt.relatedTarget)) {
        handler()
      }
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
