export default function AcordeonHeader ({ heading, headingOptions, hasDropdown, setHasDropdown }) {
  return (
    <button
      className='acordeon__header'
      onClick={() => setHasDropdown(!hasDropdown)}
    >
      <h3 className={`acordeon__heading ${headingOptions ? `acordeon__heading--${headingOptions}` : ''}`}>
        {heading}
      </h3>
      <img
        className={`acordeon__dropdownIcon ${hasDropdown ? 'acordeon__dropdownIcon--hasDropdown' : ''}`}
        src='/assets/menu-down.svg' style={{ minWidth: '10px' }}
      />
    </button>
  )
}
