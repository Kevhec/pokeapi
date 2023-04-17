export async function getInfo (id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const {
      flavor_text_entries: textInfo,
      color: { name: colorName }
    } = await res.json()
    return { textInfo, colorName }
  } catch (error) {
    throw new Error('Error getting info')
  }
}
