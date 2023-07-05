export default function GeneralData ({ heading, content, color }) {
  return (
    <div className='generalData' style={{ '--pokemonColorLowOpacity': color?.concat('3f') }}>
      {
        heading.length > 0
          ? <p className='generalData__heading'>{heading}</p>
          : 'Sin datos'
      }
      <p className='generalData__content'>{content || 'Sin datos'}</p>
    </div>
  )
}
