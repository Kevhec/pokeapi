import { useCallback, useState } from 'react'
import { getRandomInt } from '../utils/getRandomInt'

export function useRandomFact () {
  const [randomFact, setRandomFact] = useState('')

  const getRandomEntry = useCallback(
    ({ textInfo }) => {
      if (!textInfo?.length) return

      const langFilter = textInfo.filter(data => data.language.name === 'es')

      let randomIndex = getRandomInt(1, (langFilter.length - 1))
      if (randomIndex < 0 || textInfo.length === 1) randomIndex = 0

      const newRandomFact = langFilter[randomIndex].flavor_text
      setRandomFact(newRandomFact)
    }, [])
  return { randomFact, getRandomEntry }
}
