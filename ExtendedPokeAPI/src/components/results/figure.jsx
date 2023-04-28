export default function Figure ({ children, parent }) {
  return (
    <figure
      className={`sprite ${parent ? `sprite--${parent}` : ''}`}
      style={{
        minWidth: '150px',
        aspectRatio: '1/1'
      }}
    >
      {children}
    </figure>
  )
}
