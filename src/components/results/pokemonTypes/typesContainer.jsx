import Type from './type'

export default function TypesContainer ({ types, modifier }) {
  return (
    <div
      className={'types'.concat(modifier ? ` types--${modifier}` : '')}
    >
      {types?.map(type => {
        const { type: { name } } = type
        return (
          <Type name={name} key={name} />
        )
      })}
    </div>
  )
}
