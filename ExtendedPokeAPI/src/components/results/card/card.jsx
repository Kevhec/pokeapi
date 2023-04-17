import { useState } from 'react'
import { Loader } from '../../loader.jsx'
import { usePokemon } from '../../../hooks/usePokemon.js'
import { CardContainer } from './cardContainer.jsx'
import { CardFront } from './cardFront.jsx'
import { CardBack } from './cardBack.jsx'

export function Card ({ url }) {
  const [imageLoading, setImageLoading] = useState(true)
  const [flip, setFlip] = useState(false)
  const {
    loading,
    id,
    name,
    image,
    stats
  } = usePokemon({ url })

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    loading || name === ''
      ? <Loader />
      : <CardContainer
          flip={flip}
          setFlip={setFlip}
        >
        <div className={`card ${flip ? 'card--flip' : ''}`}>
          <CardFront
            name={name}
            image={image}
            imageLoading={imageLoading}
            handleImageLoad={handleImageLoad}
            pokemonId={id}
          />
          <CardBack stats={stats} />
        </div>
        {/* eslint-disable-next-line react/jsx-closing-tag-location */}
      </CardContainer>
  )
}
