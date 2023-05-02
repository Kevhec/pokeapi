import { useEffect, useState } from 'react'

export function useDisableSelect ({ limit, selectedTypes, name }) {
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    let condition

    // When limit's reached and input in not selected, disable
    if (limit && !selectedTypes.some(type => type === name)) {
      condition = true
    } else {
      condition = false
    }

    setIsDisabled(condition)
  }, [limit])

  return { isDisabled }
}
