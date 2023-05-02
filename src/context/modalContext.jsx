import { createContext, useState } from 'react'

const ModalOpennerContext = createContext(false)

function ModalOpennerProvider ({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalOpennerContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </ModalOpennerContext.Provider>
  )
}

export { ModalOpennerProvider, ModalOpennerContext }
