import { useEffect, useState } from 'react'
import { getInfo } from '../services/getInfo'

const TEMPLATE = {
  data: {
    textInfo: '',
    colorName: ''
  }
}

export function useData ({ pokemonId }) {
  const [dataLoading, setDataLoading] = useState(false)
  const [data, setData] = useState(TEMPLATE)

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        if (!pokemonId) return
        let newInfo = TEMPLATE
        setDataLoading(true)
        const {
          json: {
            flavor_text_entries: textInfo,
            color: { name: colorName }
          }
        } = await getInfo(pokemonId)
        if (!textInfo) {
          newInfo = {
            textInfo: '',
            colorName
          }
        } else {
          newInfo = {
            textInfo,
            colorName
          }
        }
        setDataLoading(false)
        setData(newInfo)
      } catch (error) {
        console.error(error)
      }
    }
    fetchInfo()
  }, [pokemonId])
  return {
    data,
    dataLoading
  }
}
