const TEMPLATE = {
  textInfo: [{
    flavor_text: 'Sin datos',
    language: {
      name: 'es'
    }
  }],
  colorName: '#1b1b1b'
}

export async function searchInfo (id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

    const json = await res.json()

    if (res.ok) {
      return { json }
    }

    throw new Error('No info found')
  } catch (error) {
    return { response: TEMPLATE }
  }
}
