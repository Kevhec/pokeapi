import { useData } from '../../../hooks/useData'
import { useRandomFact } from '../../../hooks/useRandomFact'
import { Loader } from '../../loader'

export function CardFront ({ name, image, imageLoading, handleImageLoad, pokemonId }) {
  const {
    data: {
      textInfo,
      colorName
    },
    dataLoading
  } = useData({ pokemonId })

  const { randomFact } = useRandomFact({ textInfo })

  return (
    <div
      className='card__front'
      style={{ backgroundImage: `linear-gradient(to bottom, ${colorName || '#1b1b1b'} 35%, #afafaf 35%)` }}
    >
      <h3 className={`card__name ${['white', 'yellow', 'pink'].some(color => colorName === color) ? 'card__name--black' : ''}`}>{name}</h3>
      <figure
        className='card__sprite'
        style={{
          width: '150px',
          aspectRatio: '1/1'
        }}
      >
        {imageLoading || dataLoading ? <Loader /> : ''}
        <img
          src={image || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'}
          alt='' onLoad={handleImageLoad} style={{ display: imageLoading || dataLoading ? 'none' : 'block' }}
        />
      </figure>
      <div
        className='card__frontContent'
        style={{ display: imageLoading || dataLoading ? 'none' : 'block' }}
      >
        <p className='card__fact'>{randomFact || ''}</p>
      </div>
    </div>
  )
}
