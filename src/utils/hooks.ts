import { FailResponse, Response } from 'api/response'
import Toast from 'components/Toast'
import { useState, useCallback } from 'react'
import { useEffectOnce } from 'react-use'

export const useData = <T>(apiFn: () => Promise<FailResponse | Response<T>>, defaultData?: T) => {
  const [data, setData] = useState<T>()

  const handleError = useCallback((err: string, defaultData: T | undefined) => {
    if (defaultData) {
      setData(defaultData)
    } else {
      Toast.error(err || '网络出错了请稍后重试！')
      setData(undefined)
    }
  }, [])

  const fetchData = useCallback(
    async (fetch: () => Promise<FailResponse | Response<T>>, defaultData: T | undefined) => {
      setData(undefined)
      try {
        const res = await fetch()

        if (res.success) {
          setData(res.data)
        } else {
          handleError(res.errMsg, defaultData)
        }
      } catch (error) {
        handleError(error as string, defaultData)
      }
    },
    [handleError]
  )

  useEffectOnce(() => {
    fetchData(apiFn, defaultData)
  })

  return { data, reFetchData: () => fetchData(apiFn, defaultData), setData }
}
