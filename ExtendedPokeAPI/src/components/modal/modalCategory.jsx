export default function ModalCategory ({ children, setActiveCategory, activeCategory, id }) {
  const isCurrent = activeCategory === id
  return (
    <button
      className={`modal__category ${isCurrent ? 'modal__category--current' : ''}`}
      onClick={() => setActiveCategory(id)}
      id={id}
      disabled={isCurrent}
    >
      {children}
    </button>
  )
}
