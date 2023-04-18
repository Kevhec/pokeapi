import { useState } from 'react'
import Loader from '../../loader.jsx'
import usePokemon from '../../../hooks/usePokemon.js'
import CardContainer from './cardContainer.jsx'
import CardFront from './cardFront.jsx'
import CardBack from './cardBack.jsx'

export default function Card ({ url }) {
  const [flip, setFlip] = useState(false)
  const {
    loading,
    id,
    name,
    image,
    stats,
    types
  } = usePokemon({ url })

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
            types={types}
            image={image}
            pokemonId={id}
          />
          <CardBack stats={stats} />
        </div>
        {/* eslint-disable-next-line react/jsx-closing-tag-location */}
      </CardContainer>
  )
}
