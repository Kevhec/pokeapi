import { useState } from 'react'
import AcordeonBody from './acordeonBody'
import AcordeonHeader from './acordeonHeader'

export default function Acordeon ({ children, modifier, heading, headingOptions, color }) {
  const [hasDropdown, setHasDropdown] = useState(false)

  return (
    <div
      className={`acordeon ${modifier ? `acordeon--${modifier}` : ''}`}
      style={{
        '--color': color,
        '--lowOpacityColor': color?.concat('3f'),
        '--hoverColor': color?.concat('67')
      }}
    >
      <AcordeonHeader
        hasDropdown={hasDropdown}
        setHasDropdown={setHasDropdown}
        heading={heading}
        headingOptions={headingOptions}
      />
      <AcordeonBody content={children} hasDropdown={hasDropdown} />
    </div>
  )
}
