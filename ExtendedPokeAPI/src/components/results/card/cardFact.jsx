export default function CardFact ({ children, imageLoading, dataLoading }) {
  return (
    <div
      className='card__frontContent'
      style={{ display: imageLoading || dataLoading ? 'none' : 'block' }}
    >
      <p className='card__fact'>
        {children}
      </p>
    </div>
  )
}
