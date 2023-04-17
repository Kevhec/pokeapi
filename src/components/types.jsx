export function TypesImages ({ types }) {
  return (
    <figure className='card__types'>
      {
        types.map((type) => {
          const {
            type: { name }
          } = type
          const typeImageUrl = `types/type__${name}.png`
          return (
            <img src={typeImageUrl} alt={`type ${name}`} className='card__type' key={name} />
          )
        })
      }
    </figure>
  )
}