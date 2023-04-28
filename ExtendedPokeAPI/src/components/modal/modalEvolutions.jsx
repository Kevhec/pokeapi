export default function ModalEvolutions ({ identifier, activeCategory }) {
  return (
    <div
      className='mainContent__Box mainContent__Box--evolutions'
      style={{ zIndex: activeCategory === identifier ? 1 : 'auto' }}
    >
      <p>modal evolutions</p>
    </div>
  )
}
