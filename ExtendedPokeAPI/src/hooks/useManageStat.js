import { useEffect, useState } from 'react'
import { statsConstants as SC } from '../utils/constants.js'

export function useManageStat ({ name, baseStat }) {
  const [maxValue, setMaxValue] = useState(0)
  const [barLength, setBarLength] = useState(0)

  let newMaxValue
  useEffect(() => {
    if (baseStat === 1) {
      newMaxValue = 1
    } else if (name === 'hp') {
      newMaxValue = Math.floor(2 * baseStat + SC.ADD_FOR_HP + SC.ADD_FOR_IV + SC.ADD_FOR_EV)
    } else {
      newMaxValue = Math.floor((2 * baseStat + SC.ADD_FOR_STAT + SC.ADD_FOR_IV + SC.ADD_FOR_EV) * SC.MULTIPLIER_BY_NATURE)
    }
    const newBarLength = (baseStat / newMaxValue) * 100

    setMaxValue(newMaxValue)
    setBarLength(newBarLength)
  }, [name])

  return { maxValue, barLength }
}
