export default function CardFigure ({ children }) {
  return (
    <figure
      className='card__sprite'
      style={{
        width: '150px',
        aspectRatio: '1/1'
      }}
    >
      {children}
    </figure>
  )
}
