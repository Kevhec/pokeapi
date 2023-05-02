import searchBarIcon from '../assets/pokeball.png'

export default function SearchBar ({ getPokemonName }) {
  function handleSubmit (evt) {
    evt.preventDefault()
    const newName = document.getElementById('pokemon').value.trim().toLowerCase()
    getPokemonName(newName)
  }

  return (

    <form onSubmit={handleSubmit} className='app__form'>
      <input type='text' name='pokemon' id='pokemon' className='app__input' placeholder='Pokémon' />
      <button type='submit' className='app__submit'><img src={searchBarIcon} alt='' /></button>
    </form>
  )
}
