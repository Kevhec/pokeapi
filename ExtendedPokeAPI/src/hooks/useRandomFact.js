import { useEffect, useState } from 'react'
import { getRandomInt } from '../services/getRandomInt'

export function useRandomFact ({ textInfo }) {
  const [randomFact, setRandomFact] = useState('')

  useEffect(() => {
    if (!textInfo) return
    const langFilter = textInfo.filter(data => data.language.name === 'es')
    let randomIndex = getRandomInt(1, (langFilter.length - 1))
    if (randomIndex < 0) randomIndex++
    const newRandomFact = langFilter[randomIndex].flavor_text

    setRandomFact(newRandomFact)
  }, [textInfo])

  return { randomFact }
}
