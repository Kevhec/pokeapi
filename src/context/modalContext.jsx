import { createContext, useState, useEffect } from 'react'

const ModalOpennerContext = createContext(false)

function ModalOpennerProvider ({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  return (
    <ModalOpennerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalOpennerContext.Provider>
  )
}

export { ModalOpennerProvider, ModalOpennerContext }
