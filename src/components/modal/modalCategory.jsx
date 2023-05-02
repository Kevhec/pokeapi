export default function ModalCategory ({ children, setActiveCategory, activeCategory, id, color }) {
  const isCurrent = activeCategory === id
  const handleClick = () => {
    setActiveCategory(id)
  }
  return (
    <button
      className={`modal__category ${isCurrent ? 'modal__category--current' : ''}`}
      style={{ '--pokemonColorLowOpacity': color?.concat('3f') }}
      onClick={handleClick}
      id={id}
      disabled={isCurrent}
    >
      {children}
    </button>
  )
}
