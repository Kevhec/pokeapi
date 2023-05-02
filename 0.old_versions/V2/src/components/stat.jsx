export function Stat ({ name, baseStat }) {
  const statIconUrl = new URL(`../assets/stats/stat__${name}.png`, import.meta.url).href
  return (
    <li className='stat' key={name}>
      <img className='stat__image' src={statIconUrl} />
      <p className='stat__name'>{name}</p>
      <p className='stat__value'>{baseStat}</p>
    </li>
  )
}