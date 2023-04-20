import { useEffect, useRef, useState } from 'react'

export default function CardFact ({ children, imageLoading, dataLoading }) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [animate, setAnimate] = useState(false)
  const textRef = useRef(null)

  const classes = `card__fact ${animate ? 'card__fact--overflow' : ''}`

  const hasOverflow = () => {
    return textRef.current.parentElement.clientHeight - 5 < textRef.current.clientHeight
  }

  const handleSelection = () => {
    if (!shouldAnimate) return
    setAnimate(true)
  }

  const handleDeselection = () => {
    if (!shouldAnimate) return
    setAnimate(false)
  }

  useEffect(() => {
    if (!children || !hasOverflow()) return
    setShouldAnimate(true)
  }, [children])

  return (
    <div
      className='card__frontContent'
      style={{ opacity: imageLoading || dataLoading ? '0' : '1' }}
      onMouseEnter={handleSelection}
      onMouseLeave={handleDeselection}
    >
      <p
        className={classes}
        ref={textRef}
        tabIndex={0}
        onFocus={handleSelection}
        onBlur={handleDeselection}
      >
        {children}
      </p>
    </div>
  )
}
