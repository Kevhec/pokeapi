import Loader from '../../loader.jsx'
import usePokemon from '../../../hooks/usePokemon.js'
import CardContainer from './cardContainer.jsx'
import { useEffect, useState, useContext } from 'react'
import { useData } from '../../../hooks/useData.js'
import Figure from '../figure.jsx'
import PokemonImage from '../pokemonImage.jsx'
import TypesContainer from '../pokemonTypes/typesContainer.jsx'
import { ColorContext } from '../../../context/colorContext.jsx'

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
    pokemonLoading,
    fetchPokemon
  } = usePokemon()
  const { color } = useContext(ColorContext)

  useEffect(() => {
    fetchPokemon({ url })
  }, [url])

  const lowContrastColors = ['white', 'yellow', 'pink']
  const [imageLoading, setImageLoading] = useState(true)
  const {
    data: species,
    dataLoading,
    getInfo
  } = useData()

  useEffect(() => {
    getInfo({ id })
  }, [id])

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    pokemonLoading || name === ''
      ? <Loader />
      : <CardContainer
          url={url}
          pokemon={pokemon}
          species={species}
          pokemonLoading={pokemonLoading}
          speciesLoading={dataLoading}
        >
        <div
          className={`card ${color === 'white' ? 'card--blackBG' : ''}`}
          style={{
            backgroundImage: `url(/types/forBackground/type-${types ? types[0].type.name : 'normal'}.svg)`
          }}
        >
          <div className={
                `card__header ${lowContrastColors.some(c => color === c)
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
