import { useEffect, useState } from 'react'
import { getRandomInt } from '../utils/getRandomInt'

export function useRandomFact ({ textInfo }) {
  const [randomFact, setRandomFact] = useState('')

  useEffect(() => {
    if (!textInfo) return
    let newRandomFact
    const langFilter = textInfo.filter(data => data.language.name === 'es')
    if (langFilter.length) {
      let randomIndex = getRandomInt(1, (langFilter.length - 1))
      if (randomIndex < 0) randomIndex = 0
      newRandomFact = langFilter[randomIndex].flavor_text
    } else {
      newRandomFact = 'Sin datos'
    }

    setRandomFact(newRandomFact)
  }, [textInfo])

  return { randomFact }
}
