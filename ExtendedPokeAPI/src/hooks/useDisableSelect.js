import { useEffect, useState } from 'react'

export function useDiableSelect ({ limit, selectedTypes, name }) {
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    let condition

    if (limit && !selectedTypes.some(type => type === name)) {
      condition = true
    } else {
      condition = false
    }

    setIsDisabled(condition)
  }, [limit])

  return { isDisabled }
}
