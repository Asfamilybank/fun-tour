import { useState, useCallback } from 'react'
import { useEffectOnce } from 'react-use'

export const useData = <T>(apiFn: () => Promise<T>, defaultData?: T) => {
  const [data, setData] = useState<T>()

  const fetchData = useCallback(async (fetch: () => Promise<T>, defaultData?: T) => {
    setData(undefined)
    try {
      const res = await fetch()
      setData(Object.keys(res)?.length !== 0 ? res : defaultData)
    } catch (error) {
      setData(defaultData ? defaultData : ({} as T))
    }
  }, [])

  useEffectOnce(() => {
    fetchData(apiFn, defaultData)
  })

  return { data, reFetchData: () => fetchData(apiFn, defaultData), setData }
}
