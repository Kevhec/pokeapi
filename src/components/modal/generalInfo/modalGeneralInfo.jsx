import { useEffect } from 'react'
import GeneralData from './generalData'
import useAditionalInfo from '../../../hooks/useAditionalInfo'
import langFilter from '../../../utils/langFilter'
import Ability from './ability'
import Loader from '../../loader'
import { translate } from '../../../utils/manualTranslations'

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
    getHabitat,
    aditionalLoading
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
      style={{ '--GI_zindex': activeCategory === identifier ? 100 : 'auto' }}
    >
      {aditionalLoading && <Loader mode='dark' modifier='fullContainer' />}
      <div className='generalData__container'>
        <GeneralData heading={generationName || 'Generation'} color={color} />
        <GeneralData heading='Género' content={genus} color={color} />
        <GeneralData heading='Felicidad Base' content={baseHappiness} color={color} />
        <GeneralData heading='Hábitat' content={habitatName} color={color} />
        <GeneralData heading='Tasa de crecimiento:' content={translate(growthRate?.name)} color={color} />
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
