import { Stat } from '../results/stat'

export default function ModalStats ({ identifier, activeCategory, stats }) {
  return (
    <ul
      className='mainContent__Box mainContent__Box--stats'
      style={{ zIndex: activeCategory === identifier ? 1 : 'auto' }}
    >
      {stats?.map(stat => {
        const { base_stat: baseStat, stat: { name } } = stat
        return (
          <Stat key={name} name={name} baseStat={baseStat} />
        )
      })}
    </ul>
  )
}
