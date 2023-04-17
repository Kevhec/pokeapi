import { Header } from './components/header.jsx'
import { Results } from './components/results/results.jsx'
import SearchBar from './components/searchBar/form.jsx'
import { Main } from './main.jsx'

export function App () {
  return (
    <>
      <Header>
        <SearchBar />
      </Header>
      <Main>
        <Results />
      </Main>
    </>
  )
}
