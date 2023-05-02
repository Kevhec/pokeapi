import { useEffect, useState } from 'react'
import { fetchFromUrl } from '../../../services/fetchFromUrl'
import langFilter from '../../../utils/langFilter'
import { getRandomInt } from '../../../utils/getRandomInt'
import Acordeon from '../acordeon/acordeon.jsx'

export default function Ability ({ url, color }) {
  const [langFilteredName, setLangFilteredName] = useState('')
  const [randomDescription, setRandomDescription] = useState('')

  const fillAbility = async () => {
    try {
      const newAbilityData = await fetchFromUrl({ url })
      const newLangFilteredName =
      langFilter(newAbilityData?.names, 'es')
        ? langFilter(newAbilityData?.names, 'es')[0].name
        : ''

      const langFilteredDescriptions = langFilter(newAbilityData?.flavor_text_entries, 'es')
      const randomInt = getRandomInt(0, (langFilteredDescriptions?.length - 1))
      const newRandomDescription = langFilteredDescriptions ? langFilteredDescriptions[randomInt]?.flavor_text : ''
      setLangFilteredName(newLangFilteredName)
      setRandomDescription(newRandomDescription)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fillAbility()
  }, [url])

  return (
    <Acordeon heading={langFilteredName} color={color}>
      {randomDescription}
    </Acordeon>
  )
}
