export async function getInfo (id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const json = await res.json()
    return { json }
  } catch (error) {
    throw new Error('Error getting info')
  }
}
