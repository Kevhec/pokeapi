import { Container } from '../container.jsx'
import { InputText } from './inputText.jsx'
/* import { TypesSelect } from './typesSelect.jsx' */
// eslint-disable-next-line import/no-absolute-path
import searchBarIcon from '/src/assets/pokeball.png'

export default function SearchBar () {
  function handleSubmit (evt) {
    evt.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='searchBar'>
      <Container parent='searchBar'>
        <InputText />
        {/* <TypesSelect id='mainTypeSelect' type='Main Type' /> */}
        <button type='submit' className='searchBar__submit'><img src={searchBarIcon} alt='' /></button>
      </Container>
    </form>
  )
}
