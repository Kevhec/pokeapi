import { useRef, useState } from 'react'
import { useOptions } from '../../hooks/useOptions'
import { useClickOutside } from '../../hooks/useClickOutside'
import { TypesSelectOption } from './typesSelectOptions.jsx'

export function TypesSelect () {
  const [active, setActive] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [limit, setLimit] = useState(false)
  const { options } = useOptions()
  const dropdownRef = useRef(null)

  const handleChange = (newType) => {
    let newSelectedTypes

    if (selectedTypes.length && selectedTypes.some(type => newType === type)) {
      newSelectedTypes = selectedTypes.filter(type => type !== newType)
    } else {
      newSelectedTypes = [...selectedTypes, newType]
    }

    if (newSelectedTypes.length === 3) {
      setLimit(true)
    } else {
      setLimit(false)
    }

    setSelectedTypes(newSelectedTypes)
  }

  useClickOutside(dropdownRef, () => {
    if (!active) return
    setActive(!active)
  })

  return (
    <div className='types-dropdown'>
      <h3
        onClick={() => setActive(!active)}
        className='types-dropdown__heading'
        tabIndex={0}
        aria-label='Dropdown types'
      >
        Types
      </h3>
      <div
        ref={dropdownRef}
        className={`types-dropdown__select ${active ? 'types-dropdown__select--active' : ''}`}
      >
        {
          options.map(option => {
            const { name } = option
            return (
              <TypesSelectOption
                name={name}
                handleChange={handleChange}
                limit={limit}
                selectedTypes={selectedTypes}
                key={name}
              />
            )
          })
        }
      </div>
    </div>
  )
}
