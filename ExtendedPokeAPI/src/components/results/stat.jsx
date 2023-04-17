import { useManageStat } from '../../hooks/useManageStat'

export function Stat ({ name, baseStat }) {
  const { maxValue, barLength } = useManageStat({ name, baseStat })
  return (
    <li className='stat'>
      <p className='stat__name'>
        <span>Base</span>
        {name}
        <span>Max</span>
      </p>
      <div className='stat__bar-content'>
        <p className='stat__base-value'>{baseStat}</p>
        <div className='stat__bar-container'>
          <span
            className={`stat__bar stat__bar--${name}`}
            style={{
              width: barLength + '%'
            }}
          />
        </div>
        <p className='stat__max-value'>{maxValue}</p>
      </div>
    </li>
  )
}
