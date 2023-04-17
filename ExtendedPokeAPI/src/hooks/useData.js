import { useEffect, useState } from 'react'
import { getInfo } from '../services/getInfo'

export function useData ({ pokemonId }) {
  const [dataLoading, setDataLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        if (!pokemonId) return
        setDataLoading(true)
        const { textInfo, colorName } = await getInfo(pokemonId)
        const newInfo = {
          textInfo,
          colorName
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
