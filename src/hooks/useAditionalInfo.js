import { useCallback, useState } from 'react'
import { fetchFromUrl } from '../services/fetchFromUrl'

export default function useAditionalInfo () {
  const [generationResponse, setGenerationResponse] = useState({})
  const [habitatResponse, setHabitatResponse] = useState({})
  const [aditionalLoading, setAditionalLoading] = useState(false)

  const getGeneration = useCallback(async ({ generationUrl }) => {
    setAditionalLoading(true)
    try {
      const generationData = await fetchFromUrl({ url: generationUrl || '' })

      setGenerationResponse(generationData)
    } catch (error) {
      console.error(error)
    } finally {
      setAditionalLoading(false)
    }
  }, [])

  const getHabitat = useCallback(async ({ habitatUrl }) => {
    setAditionalLoading(true)
    try {
      const habitatData = await fetchFromUrl({ url: habitatUrl || '' })

      setHabitatResponse(habitatData)
    } catch (error) {
      console.error(error)
    } finally {
      setAditionalLoading(false)
    }
  }, [])

  return { getGeneration, getHabitat, generationResponse, habitatResponse, aditionalLoading }
}
