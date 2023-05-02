export default function Type ({ name }) {
  return (
    <figure
      className={`types__type types__type--${name}`}
      style={{ minWidth: '28px', aspectRatio: '1 / 1' }}
      key={name}
    >
      <img
        src={`/types/type-${name}.svg`}
        alt={`Type ${name}`}
      />
    </figure>
  )
}
