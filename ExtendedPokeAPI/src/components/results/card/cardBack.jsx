import { Stat } from '../stat'

export function CardBack ({ stats }) {
  return (
    <div className='card__back'>
      <ul className='card__stats'>
        {stats.map(stat => {
          const {
            base_stat: baseStat,
            stat: { name: statName }
          } = stat
          return (
            <Stat name={statName} baseStat={baseStat} key={statName} />
          )
        })}
      </ul>
    </div>
  )
}
