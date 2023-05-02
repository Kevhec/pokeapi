export default function Figure ({ children, onClick, modifier }) {
  return (
    <figure
      className={`sprite ${modifier ? `sprite--${modifier}` : ''}`}
      onClick={onClick}
    >
      {children}
    </figure>
  )
}
