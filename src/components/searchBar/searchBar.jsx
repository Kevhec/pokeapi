import { useContext } from 'react'
import { fetchFromUrl } from '../../services/fetchFromUrl.js'
import { Container } from '../container.jsx'
import { InputText } from './inputText.jsx'
/* import { TypesSelect } from './typesSelect.jsx' */
// eslint-disable-next-line import/no-absolute-path
import searchBarIcon from '/src/assets/pokeball.png'
import { PokemonContext } from '../../context/pokemonContext.jsx'
import { ModalOpennerContext } from '../../context/modalContext.jsx'

export default function SearchBar () {
  const { setPokemon } = useContext(PokemonContext)
  const { setIsOpen } = useContext(ModalOpennerContext)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const fields = Object.fromEntries(new FormData(evt.target))
    const pokemonQuery = fields.pokemon.trim().toLowerCase().replace(' ', '-')
    try {
      const pokemon = await fetchFromUrl({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonQuery}` })
      const species = await fetchFromUrl({ url: pokemon?.species?.url })
      const newModalPokemon = {
        pokemon,
        species
      }
      setPokemon(newModalPokemon)
    } catch (error) {
      console.error(error)
    } finally {
      setIsOpen(true)
    }
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
