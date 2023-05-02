import { useContext, useEffect, useState } from 'react'
import { fetchFromUrl } from '../../../services/fetchFromUrl'
import { toSoftColor } from '../../../utils/toSoftColor'
import Figure from '../../results/figure'
import PokemonImage from '../../results/pokemonImage'
import { PokemonContext } from '../../../context/pokemonContext'
import { translate } from '../../../utils/manualTranslations'
import Variant from './variant'
import Acordeon from '../acordeon/acordeon'

export default function Evolution ({ speciesUrl, evolutionDetails }) {
  const [color, setColor] = useState('#e0e0e0')
  const [evolutionData, setEvolutionData] = useState({})
  const [newEvolutionPokemon, setNewEvolutionPokemon] = useState({})
  const [, setPokemon] = useContext(PokemonContext)

  const getEvolutionInfo = async () => {
    const evolutionSpecies = await fetchFromUrl({ url: speciesUrl })
    const { varieties } = evolutionSpecies || {}

    const evolutionPokemon = await fetchFromUrl({ url: varieties?.[0].pokemon.url })
    const {
      name,
      sprites: {
        other: { 'official-artwork': { front_default: image } = {} } = {}
      } = {}
    } = evolutionPokemon || {}

    const evolutionVariants = []
    let trigger
    let evolvesFrom
    evolutionDetails?.forEach(evolutionVariant => {
      if (Object.keys(evolutionVariant)?.length === 0) return
      const validKeys = Object.keys(evolutionVariant).filter(condition => evolutionVariant?.[condition] && condition !== 'trigger')

      const evolutionOption = {}
      const validConditions = validKeys.map(key => {
        return {
          name: key, description: evolutionVariant[key]
        }
      })

      evolutionOption.validConditions = validConditions
      trigger = evolutionVariant?.trigger?.name
      if (evolutionSpecies.evolves_from_species) {
        const {
          evolves_from_species: { name: evolvesFromName }
        } = evolutionSpecies
        evolvesFrom = evolvesFromName
      }

      evolutionVariants.push(evolutionOption)
    })

    const fullEvoData = {
      variants: evolutionVariants,
      trigger,
      evolvesFrom
    }

    setEvolutionData({ name, image, fullEvoData })
    setColor(toSoftColor(evolutionSpecies?.color?.name))
    setNewEvolutionPokemon({ pokemon: evolutionPokemon, species: evolutionSpecies })
  }

  useEffect(() => {
    getEvolutionInfo()
  }, [speciesUrl, evolutionDetails])

  const handleClick = () => {
    setPokemon(newEvolutionPokemon)
  }
  return (
    <li
      className='evolution'
    >
      <div className='evolution__content'>
        <div className='evolution__header'>
          <p className='evolution__name'>{evolutionData?.name}</p>
          {
            evolutionData?.fullEvoData?.evolvesFrom?.length > 0 &&
              <p className='evolution__comesFrom'>
                A partir de&nbsp;
                <span className='capitalized italic'>{evolutionData?.fullEvoData?.evolvesFrom}</span>
              </p>
          }
        </div>
        <Figure onClick={handleClick} modifier='cursorPointer'>
          <PokemonImage
            src={evolutionData?.image}
            name={evolutionData.name}
            backgroundColor={color}
            modifier='evolution'
            parent='evolution'
          />
        </Figure>
      </div>
      {
        evolutionData?.fullEvoData?.variants?.length > 0 &&
          <Acordeon heading='Detalles' modifier='evolution' headingOptions='centered' color={color}>
            <div className='evolution__conditions'>
              <div className='condition'>
                <div className='condition__body'>
                  <div className='condition__row'>
                    <h4 className='condition__heading'>Desencadena</h4>
                    <p className='condition__content'>{translate(evolutionData?.fullEvoData?.trigger)}</p>
                  </div>
                  <div className='condition__row'>
                    <h4 className='condition__heading'>
                      {
                        evolutionData?.fullEvoData?.variants?.length !== 1
                          ? 'Opciones'
                          : 'Opción'
                      }
                    </h4>
                    <ol className='condition__variantList'>
                      {
                        evolutionData?.fullEvoData?.variants?.map((variant, index) => {
                          if (variant?.validConditions?.length === 0) return null
                          return (
                            <Variant key={index} variant={variant} />
                          )
                        })
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </Acordeon>
        }
    </li>
  )
}
