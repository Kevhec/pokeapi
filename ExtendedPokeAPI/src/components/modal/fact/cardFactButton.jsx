export default function CardFactButton ({ children, position, onClick }) {
  const classes = `fact__button ${position ? `fact__button--${position}` : ''}`

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  )
}
