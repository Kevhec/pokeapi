import { useState } from 'react'

export default function SearchBar ({ getPokemonName }) {
  const [name, setName] = useState()

  function handleSubmit (evt) {
    evt.preventDefault()
    const newName = document.getElementById('pokemon').value.trim().toLowerCase()
    setName(newName)
    getPokemonName(name)
  }

  return (

    <form onSubmit={handleSubmit} className='app__form'>
      <input type='text' name='pokemon' id='pokemon' className='app__input' placeholder='Pokémon' />
      <button type='submit' className='app__submit'><img src='./src/assets/pokeball.png' alt='' /></button>
    </form>
  )
}
