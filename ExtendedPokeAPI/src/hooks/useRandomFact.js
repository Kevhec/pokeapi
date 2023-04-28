import { useCallback, useState } from 'react'
import { getRandomInt } from '../utils/getRandomInt'
import langFilter from '../utils/langFilter'

export function useRandomFact () {
  const [randomFact, setRandomFact] = useState('')

  const getRandomEntry = useCallback(
    ({ textInfo, lang }) => {
      if (!textInfo?.length) return

      const filtered = langFilter(textInfo, lang)

      let randomIndex = getRandomInt(0, (filtered.length - 1))
      if (randomIndex < 0 || textInfo.length === 1) randomIndex = 0

      const newRandomFact = filtered[randomIndex].flavor_text
      setRandomFact(newRandomFact)
    }, [])
  return { randomFact, getRandomEntry }
}
