import { Stat } from './stat.jsx'
import { TypesImages } from './types.jsx'

const Card = ({ pokemon }) => {
  if (!pokemon) return
  const {
    name,
    types,
    sprites: { front_default: frontDefault },
    stats
  } = pokemon

  return (

    <main className='card'>
      <div className='card__meta'>
        <h1 className='card__name'>{name}</h1>
        <TypesImages types={types} />
      </div>
      <figure className='card__image'>
        <img src={frontDefault} alt={`Image of ${name}`} />
      </figure>
      <ul className='card__stats'>{
        stats.map(stat => {
          const {
            base_stat: baseStat,
            stat: { name }
          } = stat
          return (
            <Stat name={name} baseStat={baseStat} key={name} />
          )
        })
      }
      </ul>
    </main>
  )
}

export default Card
