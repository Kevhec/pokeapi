export default function PokemonImage ({ src, name, handleImageLoad, imageLoading, dataLoading, modifier, backgroundColor }) {
  return (
    <img
      className={`sprite__image ${modifier ? `sprite__image--${modifier}` : ''}`}
      src={src || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'}
      alt={`Picture of ${name}`}
      onLoad={handleImageLoad}
      style={{
        display: imageLoading || dataLoading ? 'none' : 'block',
        minWidth: modifier === 'evolution' ? '100px' : '150px',
        aspectRatio: '1/1',
        backgroundColor: backgroundColor || 'unset'
      }}
    />
  )
}
