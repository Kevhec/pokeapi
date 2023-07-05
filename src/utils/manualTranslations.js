const translationsMap = {
  // For evolution trigger names
  'level-up': 'Subir nivel',
  trade: 'Intercambio',
  'use-item': 'Usar item',
  shed: 'Muda de piel',
  spin: 'Giro',
  'tower-of-darkness': 'Torre de la oscuridad',
  'tower-of-waters': 'Torre de las aguas',
  'three-critical-hits': 'Tres golpes críticos',
  'take-damage': 'Recibir daño',
  other: 'Otro',
  'agile-style-move': 'Movimiento ágil',
  'strong-style-move': 'Movimiento fuerte',
  'recoil-damage': 'Daño por retroceso',

  // For evolution condition names
  gender: 'Género',
  held_item: 'Sostener item',
  item: 'Item',
  known_move: 'Conocer movimiento',
  known_move_type: 'Conocer tipo de movimiento',
  location: 'Ubicación',
  min_affection: 'Afecto mínimo',
  min_beauty: 'Belleza mínima',
  min_happiness: 'Felicidad mínima',
  min_level: 'Nivel mínimo',
  needs_overworld_rain: 'Lluvia',
  party_species: 'Especies en el equipo',
  party_type: 'Tipo en el equipo',
  relative_physical_stats: 'Estadísticas físicas relativas',
  time_of_day: 'Hora',
  trade_species: 'Intercambiar por especie',

  // For growth rate
  slow: 'Lenta',
  medium: 'Media',
  fast: 'Rápida',
  'medium-slow': 'Medianamente lenta',
  'slow-then-very-fast': 'Lenta, luego muy rápida',
  'fast-then-very-slow': 'Rápida, luego muy lenta'
}

export function translate (string) {
  return translationsMap[string] || 'Sin datos'
}
