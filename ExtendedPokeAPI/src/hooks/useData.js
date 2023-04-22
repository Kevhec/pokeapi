import { useCallback, useState } from 'react'
import { searchInfo } from '../services/getInfo'

// Template of wanted data to avoid "undefined" bugs

export function useData () {
  const [dataLoading, setDataLoading] = useState(false)
  const [data, setData] = useState({})

  const getInfo = useCallback(
    async ({ pokemonId }) => {
      try {
        if (!pokemonId) return
        setDataLoading(true)

        // TODO: Handle fetch 404 error
        const response = await searchInfo(pokemonId)
        const {
          responseToExport: {
            textInfo,
            colorName
          }
        } = response

        const newInfo = {
          textInfo,
          colorName
        }

        setDataLoading(false)
        setData(newInfo)
      } catch (error) {
        console.error(error)
      }
    }, [])

  return {
    data,
    dataLoading,
    getInfo
  }
}
