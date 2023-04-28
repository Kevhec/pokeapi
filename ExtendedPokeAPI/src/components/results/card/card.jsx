import Loader from '../../loader.jsx'
import usePokemon from '../../../hooks/usePokemon.js'
import CardContainer from './cardContainer.jsx'
import { useEffect, useState } from 'react'
import { useData } from '../../../hooks/useData.js'
import { toSoftColor } from '../../../utils/toSoftColor.js'
import Figure from '../figure.jsx'
import PokemonImage from '../pokemonImage.jsx'
import TypesContainer from '../pokemonTypes/typesContainer.jsx'

export default function Card ({ url }) {
  const {
    pokemon,
    pokemon: {
      id,
      name,
      sprites: {
        other: {
          'official-artwork': { front_default: image } = {}
        } = {}
      } = {},
      types
    },
    loading,
    fetchPokemon
  } = usePokemon()

  useEffect(() => {
    fetchPokemon({ url })
  }, [url])

  const lowContrastColors = ['white', 'yellow', 'pink']
  const [imageLoading, setImageLoading] = useState(true)
  const {
    data: {
      colorName = '',
      json: species
    },
    dataLoading,
    getInfo
  } = useData()

  useEffect(() => {
    getInfo({ id })
  }, [id])

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const color = toSoftColor(colorName)

  return (
    loading || name === ''
      ? <Loader />
      : <CardContainer
          color={color}
          url={url}
          pokemon={pokemon}
          species={species}
        >
        <div
          className={`card ${color === 'white' ? 'card--blackBG' : ''}`}
          style={{
            backgroundImage: `url(/types/forBackground/type-${types ? types[0].type.name : 'normal'}.svg)`
          }}
        >
          <div className={
                `card__header ${lowContrastColors.some(color => colorName === color)
                  ? 'card__header--dark'
                  : ''
                }`
              }
          >
            <h3 className='card__name'>
              {name}
            </h3>
            <TypesContainer types={types} />
          </div>
          <Figure>
            {imageLoading || dataLoading ? <Loader /> : ''}
            <PokemonImage
              src={image}
              name={name}
              handleImageLoad={handleImageLoad}
              dataLoading={dataLoading}
              imageLoading={imageLoading}
            />
          </Figure>
        </div>
        {/* eslint-disable-next-line react/jsx-closing-tag-location */}
      </CardContainer>
  )
}
