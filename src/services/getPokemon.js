const BASE_URL = 'https://pokeapi.co/api/v2/'

export default async function getPokemon (name) {
  const res = await fetch(BASE_URL + 'pokemon/' + name + '/')
  const resJSON = await res.json()

  return resJSON
}
