export default function GeneralData ({ heading, content, color }) {
  return (
    <div className='generalData' style={{ '--pokemonColorLowOpacity': color?.concat('3f') }}>
      {
        heading
          ? <p className='generalData__heading'>{heading}</p>
          : ''
      }
      <p className='generalData__content'>{content}</p>
    </div>
  )
}
