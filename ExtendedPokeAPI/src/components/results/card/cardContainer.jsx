export default function CardContainer ({ children, flip, setFlip }) {
  const handleKeyDown = (evt) => {
    if (evt.keyCode === 32) {
      setFlip(!flip)
    }
  }

  return (
    <div
      className='card__container'
      onClick={() => setFlip(!flip)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  )
}
