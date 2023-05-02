import { useContext, useEffect, useRef, useState } from 'react'
import CardFactButton from './cardFactButton'
import { ModalOpennerContext } from '../../../context/modalContext'

export default function Fact ({ children, imageLoading, dataLoading, getRandomEntry, textInfo, lang, color }) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [isOpen] = useContext(ModalOpennerContext)
  const [animate, setAnimate] = useState(false)
  const textRef = useRef(null)

  const classes = `fact__text ${animate ? 'fact__text--overflow' : ''}`

  const hasOverflow = () => {
    return textRef.current.parentElement.clientHeight < textRef.current.clientHeight + 5
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
    if (!children) return
    setShouldAnimate(hasOverflow())
  }, [children])

  useEffect(() => {
    setShouldAnimate(false)
  }, [isOpen])

  const handleNewFact = (evt) => {
    evt.stopPropagation()
    getRandomEntry({ textInfo, lang })
  }

  return (
    <div className='fact__container'>
      <CardFactButton position='topRight' onClick={handleNewFact}>
        <img src='/assets/reload.svg' width='14px' />
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
