import { createContext, useState } from 'react'

const ColorContext = createContext('#1b1b1b')

function ColorProvider ({ children }) {
  const [color, setColor] = useState('#1b1b1b')

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export { ColorProvider, ColorContext }
