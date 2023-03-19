const Card = ({ pokemon }) => {
  console.log(pokemon)

  return (

    <main className='card'>
      <div className='card__meta'>
        <h1 className='card__name'></h1>
        <figure className='card__types'>

        </figure>
      </div>
      <figure className='card__image'>
        <img src='' alt='' />
      </figure>
      <ul className='card__stats'></ul>
    </main>
  )
}

export default Card
