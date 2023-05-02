import { useContext, useEffect, useState } from 'react'
import Figure from '../results/figure'
import PokemonImage from '../results/pokemonImage'
import TypesContainer from '../results/pokemonTypes/typesContainer'
import BasicData from './basicData'
import ModalCategory from './modalCategory'
import ModalMainContent from './modalMainContent'
import { ModalOpennerContext } from '../../context/modalContext'
import { PokemonContext } from '../../context/pokemonContext'
import { useRandomFact } from '../../hooks/useRandomFact'
import { toSoftColor } from '../../utils/toSoftColor'
import Loader from '../loader'
import Fact from './fact/Fact'

export default function Modal () {
  const [activeCategory, setActiveCategory] = useState('generalInfo')
  const [imageLoading, setImageLoading] = useState(true)
  const [isOpen, setIsOpen] = useContext(ModalOpennerContext)
  const [pokemon] = useContext(PokemonContext)

  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.classList.add('no-overflowY')
    } else {
      body.classList.remove('no-overflowY')
    }
  }, [isOpen])

  const {
    pokemon: {
      id,
      name,
      sprites: {
        other: {
          'official-artwork': { front_default: frontDefault } = {}
        } = {}
      } = {},
      types,
      base_experience: baseExperience,
      weight,
      height,
      stats,
      abilities
    } = {},
    species: {
      flavor_text_entries: textInfo,
      color: { name: colorName } = {},
      genera,
      base_happiness: baseHappiness,
      egg_groups: eggGroup,
      growth_rate: growthRate,
      generation,
      habitat,
      evolution_chain: evolutionChain
    } = {}
  } = pokemon || {}

  const { randomFact, getRandomEntry } = useRandomFact()

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleCloseButton = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setActiveCategory('generalInfo')
  }, [isOpen, pokemon])

  useEffect(() => {
    getRandomEntry({ textInfo, lang: 'es' })
  }, [textInfo])

  const basicInfo = { weight, height, baseExperience }

  const color = toSoftColor(colorName)

  const loadingConditions = imageLoading

  return (
    <>
      <article className={`modal ${!isOpen ? 'modal--closed' : ''} ${loadingConditions ? 'modal--loading' : ''}`}>
        {loadingConditions ? <Loader mode='dark' /> : <></>}
        <header className='modal__header' style={{ display: loadingConditions && 'none' }}>
          <h1 className='modal__heading'>{name} <span className='modal__id'>#{id}</span></h1>
          <button
            className='modal__closeButton'
            onClick={handleCloseButton}
            style={{
              backgroundColor: color?.concat('3f')
            }}
          >
            <img src='/assets/close-thick.svg' />
          </button>
        </header>
        <aside className='modal__sideBar' style={{ display: loadingConditions && 'none' }}>
          <Figure parent='modal'>
            <PokemonImage
              src={frontDefault}
              name={name}
              handleImageLoad={handleImageLoad}
              modifier='modal'
            />
          </Figure>
          <TypesContainer types={types} modifier='modal' />
          <div className='modal__basicInfo'>
            {
              Object.keys(basicInfo).map(data => {
                return (
                  <BasicData key={data} dataName={data} dataValue={basicInfo[data]} />
                )
              })
            }
          </div>
          <Fact color={color} getRandomEntry={getRandomEntry} textInfo={textInfo} lang='es'>
            {randomFact}
          </Fact>
        </aside>
        <main className='modal__main' style={{ display: loadingConditions && 'none' }}>
          <nav className='modal__categories'>
            <ModalCategory
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
              id='generalInfo'
              color={color}
            >
              Resumen
            </ModalCategory>
            <ModalCategory
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
              id='stats'
              color={color}
            >
              Estadísticas
            </ModalCategory>
            <ModalCategory
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
              id='evolutions'
              color={color}
            >
              Evoluciones
            </ModalCategory>
          </nav>
          <ModalMainContent
            activeCategory={activeCategory}
            color={color}
            stats={stats}
            genera={genera}
            baseHappiness={baseHappiness}
            abilities={abilities}
            habitat={habitat}
            generation={generation}
            growthRate={growthRate}
            eggGroup={eggGroup}
            evolutionChain={evolutionChain}
          />
        </main>
      </article>
      <div
        className={`modal__overlay ${!isOpen ? 'modal__overlay--closed' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <svg>
        <defs>
          <clipPath id='categoryClipPath'>
            <path d='M 0 100 L 15 5 C 16 0 20 0 20 0 L 80 0 C 84 0 85 5 85 5 L 100 100 Z  ' />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}
