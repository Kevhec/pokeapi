export default function AcordeonBody ({ hasDropdown, content }) {
  return (
    <div className={`acordeon__body ${hasDropdown ? 'acordeon__body--hasDropdown' : ''}`}>
      <div className='acordeon__content'>
        {content}
      </div>
    </div>
  )
}
