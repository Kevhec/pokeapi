import { useEffect } from 'react'
import Results from './components/results/results.jsx'
import SearchBar from './components/searchBar/searchBar.jsx'

export function App () {
  // Prevent spacebar scroll down
  useEffect(() => {
    function handleKeyDown (evt) {
      if (evt.keyCode === 32) {
        evt.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
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
    </>
  )
}
