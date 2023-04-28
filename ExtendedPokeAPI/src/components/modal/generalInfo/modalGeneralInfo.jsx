// genera
// generation (url)
// habitat (url)
// base happiness
// eggs group
// growth rate
import { useEffect } from 'react'
import translateGrowthRate from '../../../utils/translateGrowthRate'
import GeneralData from './generalData'
import useAditionalInfo from '../../../hooks/useAditionalInfo'
import langFilter from '../../../utils/langFilter'
import Ability from './ability'

export default function ModalGeneralInfo ({
  identifier,
  activeCategory,
  genera,
  baseHappiness,
  abilities,
  habitat,
  generation,
  growthRate,
  eggGroup,
  color
}) {
  const {
    generationResponse,
    habitatResponse,
    getGeneration,
    getHabitat
  } = useAditionalInfo()

  useEffect(() => {
    const { url: generationUrl } = generation || {}
    const { url: habitatUrl } = habitat || {}

    getGeneration({ generationUrl })
    getHabitat({ habitatUrl })
  }, [generation, habitat])

  const {
    genus
  } = langFilter(genera, 'es') ? langFilter(genera, 'es')[0] || '' : {}
  const {
    name: habitatName
  } = langFilter(habitatResponse?.names, 'es') ? langFilter(habitatResponse?.names, 'es')[0] : {}
  const {
    name: generationName
  } = langFilter(generationResponse?.names, 'es') ? langFilter(generationResponse?.names, 'es')[0] : {}

  return (
    <div
      className='mainContent__Box mainContent__Box--generalInfo'
      style={{ zIndex: activeCategory === identifier ? 1 : 'auto' }}
    >
      <GeneralData content={generationName} />
      <GeneralData heading='Género' content={genus} />
      <GeneralData heading='Felicidad Base' content={baseHappiness} />
      <GeneralData heading='Hábitat' content={habitatName} />
      <GeneralData heading='Tasa de crecimiento:' content={translateGrowthRate(growthRate?.name)} />
      {
        abilities?.map((ability, index) => {
          const { ability: { url } } = ability
          return (
            <Ability key={index} url={url} />
          )
        })
      }
    </div>
  )
}
