import { useEffect, useRef, useState } from 'react'
import { useDisableSelect } from '../../hooks/useDisableSelect'

export function TypesSelectOption ({ name, handleChange, limit, selectedTypes, hasDropdown }) {
  const { isDisabled } = useDisableSelect({ limit, selectedTypes, name })
  const [isSelected, setIsSelected] = useState(false)
  const input = useRef(null)

  // Allow keyboard users to check input pressing spacebar on label
  const handleKeyDown = (evt) => {
    if (evt.keyCode === 32) {
      handleChange(input.current.value)
      input.current.checked = !input.current.checked
    }
  }

  useEffect(() => {
    setIsSelected(input.current.checked)
  }, [handleKeyDown])

  return (
    <label
      htmlFor={`type-${name}`}
      className={`checkbox__label ${isDisabled ? 'checkbox__label--disabled' : ''}`}
      tabIndex={isDisabled || !hasDropdown ? -1 : 0}
      onKeyDown={handleKeyDown}
      role='option'
    >
      <input
        type='checkbox'
        name='type'
        id={`type-${name}`}
        value={name}
        className='checkbox'
        onChange={(evt) => handleChange(evt.target.value)}
        disabled={isDisabled}
        ref={input}
        tabIndex={-1}
        aria-selected={isSelected}
      />
      {name}
    </label>
  )
}
