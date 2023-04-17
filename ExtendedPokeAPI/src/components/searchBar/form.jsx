import { InputText } from './inputText.jsx'
import { TypesSelect } from './typesSelect.jsx'
// eslint-disable-next-line import/no-absolute-path
import searchBarIcon from '/src/assets/pokeball.png'

export default function SearchBar ({ getPokemonName }) {
  function handleSubmit (evt) {
    evt.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='searchBar__form'>
      <InputText />
      <TypesSelect id='mainTypeSelect' type='Main Type' />
      <button type='submit' className='searchBar__submit'><img src={searchBarIcon} alt='' /></button>
    </form>
  )
}
