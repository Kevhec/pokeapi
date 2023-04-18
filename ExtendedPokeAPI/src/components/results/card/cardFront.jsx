import { useState } from 'react'
import { useData } from '../../../hooks/useData'
import { useRandomFact } from '../../../hooks/useRandomFact'
import { toSoftColor } from '../../../utils/toSoftColor'
import Loader from '../../loader'
import CardFact from './cardFact'
import CardFigure from './cardFigure'
import CardImage from './cardImage'

export default function CardFront ({ name, types, image, pokemonId }) {
  const lowContrastColors = ['white', 'yellow', 'pink']
  const [imageLoading, setImageLoading] = useState(true)
  const {
    data: {
      textInfo = '',
      colorName = ''
    },
    dataLoading
  } = useData({ pokemonId })

  const { randomFact } = useRandomFact({ textInfo })

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const color = toSoftColor(colorName)

  return (
    <div
      className='card__front'
      style={{ backgroundImage: `linear-gradient(to bottom, ${color || '#1b1b1b'} 35%, #afafaf 35%)` }}
    >
      <div className='card__header'>
        <h3
          className={
            `card__name ${lowContrastColors.some(color => colorName === color)
              ? 'card__name--black'
              : ''
            }`
          }
        >
          {name}
        </h3>
        <div
          className={`card__types ${lowContrastColors.some(color => colorName === color)
              ? 'card__types--black'
              : ''
            }`}
        >
          {types.map(type => {
            const { type: { name } } = type
            return (
              <figure className={`type type--${name}`} key={name}>
                <img
                  src={`/types/type-${name}.svg`}
                  alt={`Type ${name}`}
                />
              </figure>
            )
          })}
        </div>
      </div>
      <CardFigure>
        {imageLoading || dataLoading ? <Loader /> : ''}
        <CardImage
          src={image}
          name={name}
          handleImageLoad={handleImageLoad}
          dataLoading={dataLoading}
          imageLoading={imageLoading}
        />
      </CardFigure>

      <CardFact imageLoading={imageLoading} dataLoading={dataLoading}>
        {randomFact || ''}
      </CardFact>
    </div>
  )
}
