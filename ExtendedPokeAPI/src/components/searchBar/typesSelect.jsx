import { useEffect, useRef, useState } from 'react'
import { useOptions } from '../../hooks/useOptions'
import { useClickOutside } from '../../hooks/useClickOutside'
import { TypesSelectOption } from './typesSelectOptions.jsx'

export function TypesSelect () {
  const [active, setActive] = useState(false)
  const [hasDropdown, setHasDropdown] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [limit, setLimit] = useState(false)
  const { options } = useOptions()
  const dropdownRef = useRef(null)

  useClickOutside(dropdownRef, active, () => {
    setActive(false)
  })

  const handleChange = (newType) => {
    // Allow selection of just three pokemon types and handle this limit
    let newSelectedTypes

    // If a selectedType is unchecked, remove it
    if (selectedTypes.length && selectedTypes.some(type => newType === type)) {
      newSelectedTypes = selectedTypes.filter(type => type !== newType)
    } else {
      newSelectedTypes = [...selectedTypes, newType]
    }

    if (newSelectedTypes.length === 2) {
      setLimit(true)
    } else {
      setLimit(false)
    }

    setSelectedTypes(newSelectedTypes)
  }

  const handleClick = () => {
    setActive(!active)
  }

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 32) {
      setActive(!active)
    }
  }

  useEffect(() => {
    let newHasDropdown
    if (!active) {
      newHasDropdown = false
    } else {
      newHasDropdown = true
    }

    setHasDropdown(newHasDropdown)
  }, [active])

  return (
    <div className='types-dropdown'>
      <h3
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className='types-dropdown__heading'
        tabIndex={0}
        aria-label='Dropdown types'
      >
        Types
      </h3>
      <div
        ref={dropdownRef}
        className={`types-dropdown__select ${active ? 'types-dropdown__select--active' : ''}`}
        role='listbox'
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
                hasDropdown={hasDropdown}
              />
            )
          })
        }
      </div>
    </div>
  )
}
