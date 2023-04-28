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

    const responseToExport = { ...TEMPLATE }

    if (res.ok) {
      const {
        flavor_text_entries: resTextInfo,
        color: { name: resColorName }
      } = json

      if (resTextInfo.length !== 0) {
        responseToExport.textInfo = resTextInfo
      }
      responseToExport.colorName = resColorName
    }

    return { responseToExport, json }
  } catch (error) {
    console.error(error)
    return { responseToExport: TEMPLATE }
  }
}
