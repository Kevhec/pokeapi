export default function CardImage ({ src, name, handleImageLoad, imageLoading, dataLoading }) {
  return (
    <img
      src={src || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'}
      alt={`Picture of ${name}`}
      onLoad={handleImageLoad}
      style={{ display: imageLoading || dataLoading ? 'none' : 'block' }}
    />
  )
}
