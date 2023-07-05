import { Stat } from '../results/stat'

export default function ModalStats ({ identifier, activeCategory, stats }) {
  return (
    <ul
      className='mainContent__Box mainContent__Box--stats'
      style={{ '--stats_zindex': activeCategory === identifier ? 100 : 'auto' }}
    >
      {stats?.map(stat => {
        const { base_stat: baseStat, stat: { name, url } } = stat
        return (
          <Stat key={name} name={name} url={url} baseStat={baseStat} />
        )
      })}
    </ul>
  )
}
