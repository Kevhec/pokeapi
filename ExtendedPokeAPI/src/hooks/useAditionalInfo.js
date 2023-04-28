import { useCallback, useState } from 'react'
import { fetchFromUrl } from '../services/fetchFromUrl'

export default function useAditionalInfo () {
  const [generationResponse, setGenerationResponse] = useState({})
  const [habitatResponse, setHabitatResponse] = useState({})

  const getGeneration = useCallback(async ({ generationUrl }) => {
    try {
      const generationData = await fetchFromUrl({ url: generationUrl || '' })

      setGenerationResponse(generationData)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const getHabitat = useCallback(async ({ habitatUrl }) => {
    try {
      const habitatData = await fetchFromUrl({ url: habitatUrl || '' })

      setHabitatResponse(habitatData)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return { getGeneration, getHabitat, generationResponse, habitatResponse }
}
