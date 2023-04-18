export function Container ({ children, parent }) {
  return (
    <div className={`${parent}__container`}>
      {children}
    </div>
  )
}
