import { useDiableSelect } from '../../hooks/useDisableSelect'

export function TypesSelectOption ({ name, handleChange, limit, selectedTypes }) {
  const { isDisabled } = useDiableSelect({ limit, selectedTypes, name })

  return (
    <label htmlFor={`type-${name}`} className={`checkbox__label ${isDisabled && 'checkbox__label--disabled'}`}>
      <input
        type='checkbox'
        name='type'
        id={`type-${name}`}
        value={name}
        className='checkbox'
        onChange={(evt) => handleChange(evt.target.value)}
        disabled={isDisabled}
      />
      {name}
    </label>
  )
}
