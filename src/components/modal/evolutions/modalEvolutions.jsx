import { useEffect, useState } from 'react'
import { fetchFromUrl } from '../../../services/fetchFromUrl'
import Evolution from './evolution'

export default function ModalEvolutions ({ identifier, activeCategory, evolutionChain }) {
  const [evolutionsData, setEvolutionsData] = useState([])

  const getEvolutionLinks = async () => {
    const consultedChain = await fetchFromUrl({ url: evolutionChain?.url })
    const resultChain = iterateChain(consultedChain?.chain)
    setEvolutionsData(resultChain)
  }

  const iterateChain = (consultedChain) => {
    if (!consultedChain) return
    const { species, evolution_details: evolutionDetails } = consultedChain
    if (Object.keys(consultedChain?.evolves_to)?.length > 0) {
      return [{ species, evolutionDetails },
        ...consultedChain.evolves_to.map((e, i) => iterateChain(consultedChain.evolves_to[i]))
      ].flat()
    } else {
      return [{ species, evolutionDetails }]
    }
  }

  useEffect(() => {
    getEvolutionLinks()
  }, [evolutionChain])
  return (
    <ul
      className='mainContent__Box mainContent__Box--evolutions'
      style={{ zIndex: activeCategory === identifier ? 100 : 'auto' }}
    >
      {
        evolutionsData?.map((set, index) => {
          const {
            species: { url } = {},
            evolutionDetails
          } = set || {}
          return (
            <Evolution speciesUrl={url} evolutionDetails={evolutionDetails} key={index} />
          )
        })
      }
    </ul>
  )
}
