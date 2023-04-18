import { useState } from 'react'
import { useData } from '../../../hooks/useData'
import { useRandomFact } from '../../../hooks/useRandomFact'
import { toSoftColor } from '../../../utils/toSoftColor'
import Loader from '../../loader'
import CardFact from './cardFact'
import CardFigure from './cardFigure'
import CardImage from './cardImage'

export default function CardFront ({ name, image, pokemonId }) {
  const lowContrastColors = ['white', 'yellow', 'pink']
  const [imageLoading, setImageLoading] = useState(true)
  const {
    data: {
      textInfo,
      colorName
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
