import { useEffect, useRef, useState } from 'react'
import CardFactButton from './cardFactButton'

export default function CardFact ({ children, imageLoading, dataLoading, getRandomEntry, textInfo }) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [animate, setAnimate] = useState(false)
  const textRef = useRef(null)

  const classes = `fact__text ${animate ? 'fact__text--overflow' : ''}`

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

  const handleNewFact = (evt) => {
    evt.stopPropagation()
    getRandomEntry({ textInfo })
  }

  return (
    <div
      className='fact'
      style={{ opacity: imageLoading || dataLoading ? '0' : '1' }}
      onMouseEnter={handleSelection}
      onMouseLeave={handleDeselection}
    >
      <CardFactButton position='topRight' onClick={handleNewFact}>
        ↻
      </CardFactButton>
      <p
        className={classes}
        ref={textRef}
        tabIndex={0}
        onFocus={handleSelection}
        onBlur={handleDeselection}
      >
        {children}
      </p>
      {
        (shouldAnimate) &&
          <div className='fact__buttonsContainer'>
            <CardFactButton onClickFunction={setAnimate}>
              ↑
            </CardFactButton>
            <CardFactButton onClickFunction={setAnimate}>
              ↓
            </CardFactButton>
          </div>
      }
    </div>
  )
}
