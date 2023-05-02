import { useEffect } from 'react'
import Results from './components/results/results.jsx'
import SearchBar from './components/searchBar/searchBar.jsx'
import Modal from './components/modal/modal.jsx'
import { ModalOpennerProvider } from './context/modalContext.jsx'
import { PokemonProvider } from './context/pokemonContext.jsx'

export function App () {
  // Prevent spacebar scroll down
  useEffect(() => {
    function handleKeyDown (evt) {
      if (evt.keyCode === 32 & evt.target === document.body) {
        evt.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <PokemonProvider>
      <ModalOpennerProvider>
        <header>
          <SearchBar />
        </header>
        <main>
          <Results />
        </main>
        <footer>
          <p style={{ textAlign: 'center', color: 'White' }}>
            Pokedex - KevHec
          </p>
        </footer>
        <Modal />
      </ModalOpennerProvider>
    </PokemonProvider>
  )
}
