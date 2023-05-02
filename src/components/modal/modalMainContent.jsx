import ModalStats from './modalStats'
import ModalGeneralInfo from './generalInfo/modalGeneralInfo'
import ModalEvolutions from './evolutions/modalEvolutions'

export default function ModalMainContent ({
  activeCategory,
  color,
  stats,
  genera,
  baseHappiness,
  abilities,
  habitat,
  generation,
  growthRate,
  eggGroup,
  evolutionChain
}) {
  return (
    <div className='mainContent'>
      <ModalGeneralInfo
        identifier='generalInfo'
        activeCategory={activeCategory}
        genera={genera}
        baseHappiness={baseHappiness}
        habitat={habitat}
        generation={generation}
        abilities={abilities}
        growthRate={growthRate}
        eggGroup={eggGroup}
        color={color}
      />
      <ModalStats identifier='stats' activeCategory={activeCategory} stats={stats} />
      <ModalEvolutions
        identifier='evolutions'
        activeCategory={activeCategory}
        evolutionChain={evolutionChain}
      />
    </div>
  )
}
