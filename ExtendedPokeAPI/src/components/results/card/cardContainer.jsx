export function CardContainer ({ children, flip, setFlip }) {
  return (
    <div
      className='card__container'
      onClick={() => setFlip(!flip)}
    >
      {children}
    </div>
  )
}
