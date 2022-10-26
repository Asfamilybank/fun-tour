import useSWR from 'swr'
import { SWRConfiguration } from 'swr/dist/types'

import { RequestOptions } from './service'
import { FailResponse, Response } from './response'

export type IRequestResponse<T> = FailResponse | Response<T>
export type IApiConfig<T> = SWRConfiguration<IRequestResponse<T>>

type PostType = <T = any>(url?: string, body?: any, options?: RequestOptions | undefined) => Promise<FailResponse | Response<T>>

const useRequest = <T = any, D = any>(url: string, post: PostType, options?: RequestOptions) => {
  const useMySWR = (params?: D, config?: SWRConfiguration<IRequestResponse<T>>, isRequest = true) => {
    const { data: response, error, isValidating, mutate } = useSWR<IRequestResponse<T>>(isRequest ? [url, params, options] : null, post, config)

    let data: T | undefined

    if (response?.success) {
      data = response.data
    }

    return {
      data,
      error,
      isLoading: isValidating,
      mutate
    }
  }

  return useMySWR
}

export default useRequest
