import { useCallback, useState, useContext, useEffect } from 'react'
import { searchInfo } from '../services/searchInfo'
import { ColorContext } from '../context/colorContext'
import { toSoftColor } from '../utils/toSoftColor'

export function useData () {
  const [dataLoading, setDataLoading] = useState(false)
  const [data, setData] = useState({})
  const { setColor } = useContext(ColorContext)

  useEffect(() => {
    setColor(toSoftColor(data?.color?.name))
  }, [data])

  const getInfo = useCallback(
    async ({ id }) => {
      try {
        if (!id) return
        setDataLoading(true)

        // TODO: Handle fetch 404 error
        const { json } = await searchInfo(id)

        setDataLoading(false)
        setData(json)
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
