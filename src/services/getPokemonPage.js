export async function getPokemonPage (offset, limit) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    const json = await res.json()
    return json
  } catch (error) {
    console.error(error)
  }
}
