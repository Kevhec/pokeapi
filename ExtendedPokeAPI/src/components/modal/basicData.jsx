export default function BasicData ({ dataName, dataValue }) {
  let data
  switch (dataName) {
    case ('weight'):
      data = (dataValue * 0.1).toFixed(1) + 'kg'
      break
    case ('height'):
      data = (dataValue * 0.1).toFixed(2) + 'm'
      break
    case ('baseExperience'):
      data = dataValue + 'xp'
  }

  const spanishTitles = {
    weight: 'Peso',
    height: 'Estatura',
    baseExperience: 'Experiencia Base'
  }

  return (
    <div className='modal__basicData'>
      <img
        src={`/assets/${dataName || 'weight'}.svg`}
        style={{ width: '16px', aspectRatio: '1 / 1' }}
      />
      <p title={spanishTitles[dataName]} className='modal__pokeBaseExp'>
        {data}
      </p>
    </div>
  )
}
