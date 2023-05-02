import { translate } from '../../../utils/manualTranslations'

export default function Variant ({ variant }) {
  const handleDescription = (evDescription) => {
    if (typeof evDescription === 'object') {
      return evDescription.name
    } else {
      return evDescription
    }
  }

  const {
    validConditions
  } = variant || {}

  return (
    <>
      <li className='variant'>
        {
          validConditions?.map((condition, index) => {
            const { name, description } = condition
            return (
              <p className='variant__name' key={index}>{translate(name)}:
                <span className='variant__description'>{handleDescription(description)}</span>
              </p>
            )
          })
        }
      </li>
    </>
  )
}
