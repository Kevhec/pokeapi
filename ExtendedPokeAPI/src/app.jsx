import { useEffect } from 'react'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
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
      <Header>
        <SearchBar />
      </Header>
      <Main>
        <Results />
      </Main>
      <Footer>
        <p style={{ textAlign: 'center', color: 'White' }}>
          Pokedex - KevHec
        </p>
      </Footer>
    </>
  )
}
