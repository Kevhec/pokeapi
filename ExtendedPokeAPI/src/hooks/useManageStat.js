import { useEffect, useState } from 'react'

export function useManageStat ({ name, baseStat }) {
  const [maxValue, setMaxValue] = useState(0)
  const [barLength, setBarLength] = useState(0)

  let newMaxValue
  useEffect(() => {
    if (baseStat === 1) {
      newMaxValue = 1
    } else if (name === 'hp') {
      newMaxValue = Math.floor(2 * baseStat + 204)
    } else {
      newMaxValue = Math.floor((2 * baseStat + 99) * 1.1)
    }
    const newBarLength = (baseStat / newMaxValue) * 100

    setMaxValue(newMaxValue)
    setBarLength(newBarLength)
  }, [name])

  return { maxValue, barLength }
}
