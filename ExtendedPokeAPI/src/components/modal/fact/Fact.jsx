import { useEffect, useRef, useState } from 'react'
import CardFactButton from './cardFactButton'

export default function Fact ({ children, imageLoading, dataLoading, getRandomEntry, textInfo, lang, color }) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [animate, setAnimate] = useState(false)
  const textRef = useRef(null)

  const classes = `fact__text ${animate ? 'fact__text--overflow' : ''}`

  const hasOverflow = () => {
    return textRef.current.parentElement.clientHeight < textRef.current.clientHeight
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
    getRandomEntry({ textInfo, lang })
  }

  return (
    <div className='fact__container'>
      <CardFactButton position='topRight' onClick={handleNewFact}>
        ↻
      </CardFactButton>
      <div
        className='fact'
        style={{
          opacity: imageLoading || dataLoading ? '0' : '1',
          backgroundColor: color?.concat('3f')
        }}
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
          {children || 'hello there'}
        </p>
      </div>
    </div>
  )
}
