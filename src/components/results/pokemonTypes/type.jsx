export default function Type ({ name }) {
  return (
    <figure
      className={`types__type types__type--${name}`}
      key={name}
    >
      <img
        src={`/types/type-${name}.svg`}
        alt={`Type ${name}`}
        style={{ minWidth: '16px', aspectRatio: '1 / 1' }}
      />
    </figure>
  )
}
