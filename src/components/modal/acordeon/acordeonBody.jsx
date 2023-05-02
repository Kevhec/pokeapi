export default function AcordeonBody ({ hasDropdown, content }) {
  return (
    <div className={`acordeon__content ${hasDropdown ? 'acordeon__content--hasDropdown' : ''}`}>
      <p className='acordeon__description'>
        {content}
      </p>
    </div>
  )
}
