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
      style={{ zIndex: activeCategory === identifier ? 100 : 'auto' }}
    >
      <div className='generalData__container'>
        <GeneralData heading={generationName} color={color} />
        <GeneralData heading='Género' content={genus} color={color} />
        <GeneralData heading='Felicidad Base' content={baseHappiness} color={color} />
        <GeneralData heading='Hábitat' content={habitatName} color={color} />
        <GeneralData heading='Tasa de crecimiento:' content={translateGrowthRate(growthRate?.name)} color={color} />
      </div>
      <div className='mainContent__abilities'>
        <h3 className='mainContent__abilitiesHeading'>
          Habilidades
        </h3>
        {
          abilities?.map((ability, index) => {
            const { ability: { url } } = ability
            return (
              <Ability key={index} url={url} color={color} />
            )
          })
        }
      </div>
    </div>
  )
}
