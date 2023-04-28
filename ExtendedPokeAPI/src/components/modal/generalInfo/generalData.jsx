export default function GeneralData ({ heading, content }) {
  return (
    <div className='generalData'>
      {
        heading
          ? <p className='generalData__heading'>{heading}</p>
          : ''
      }
      <p className='generalData__content'>{content}</p>
    </div>
  )
}
