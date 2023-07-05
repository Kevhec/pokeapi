import { useEffect, useState } from 'react'
import { useManageStat } from '../../hooks/useManageStat'
import { fetchFromUrl } from '../../services/fetchFromUrl'
import langFilter from '../../utils/langFilter'

export function Stat ({ name, baseStat, url }) {
  const { maxValue, barLength } = useManageStat({ name, baseStat })
  const [processedName, setProcessedName] = useState('')

  const handleName = async () => {
    try {
      const statInfo = await fetchFromUrl({ url })
      const { names } = statInfo || {}
      setProcessedName(langFilter(names, 'es')?.[0]?.name)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleName()
  }, [url])

  return (
    <li className='stat'>
      <p className='stat__name'>
        <span>Base</span>
        {processedName}
        <span>Max</span>
      </p>
      <div className='stat__bar-content'>
        <p className='stat__base-value'>{baseStat}</p>
        <div className='stat__bar-container'>
          <span
            className={`stat__bar stat__bar--${name}`}
            style={{
              width: barLength.toFixed(1) + '%'
            }}
          />
        </div>
        <p className='stat__max-value'>{maxValue}</p>
      </div>
    </li>
  )
}
