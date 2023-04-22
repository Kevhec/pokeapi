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

    const {
      flavor_text_entries: resTextInfo,
      color: { name: resColorName }
    } = await res.json()

    const responseToExport = { ...TEMPLATE }

    if (res.ok) {
      if (resTextInfo.length !== 0) {
        responseToExport.textInfo = resTextInfo
      }
      responseToExport.colorName = resColorName
    }

    return { responseToExport }
  } catch (error) {
    console.log(error)
    return { responseToExport: TEMPLATE }
  }
}
