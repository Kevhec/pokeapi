import { useEffect, useState } from 'react'
import { useData } from '../../../../hooks/useData'
import { toSoftColor } from '../../../../utils/toSoftColor'
import Loader from '../../../loader'
import CardFigure from '../../figure'
import CardImage from '../../pokemonImage'

export default function CardFront ({ name, types, image, pokemonId }) {
  const lowContrastColors = ['white', 'yellow', 'pink']
  const [imageLoading, setImageLoading] = useState(true)
  const {
    data: {
      colorName = ''
    },
    dataLoading,
    getInfo
  } = useData({ pokemonId })

  useEffect(() => {
    getInfo({ pokemonId })
  }, [pokemonId])

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const color = toSoftColor(colorName)

  return (
    <div
      className={`card__front ${color === 'white' ? 'card__front--blackBG' : ''}`}
      style={{ backgroundColor: color || '#1b1b1b' }}
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
              <figure
                className={`type type--${name}`}
                style={{ minWidth: '28px', aspectRatio: '1 / 1' }}
                key={name}
              >
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
    </div>
  )
}
