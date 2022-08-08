import axios, { AxiosPromise, AxiosError, AxiosResponse } from 'axios'

import { ErrorHandle } from './service'
import { Response, FailResponse } from './response'
import { TOKEN } from 'router/utils'
import Toast from 'components/Toast'

const API_ROOT = `${import.meta.env.VITE_BASE_URL}`

export const createRequest = (root?: string) => {
  return axios.create({
    baseURL: API_ROOT + (root ?? ''),
    headers: {
      'Content-type': 'application/json'
    },
    timeout: 30000,
    timeoutErrorMessage: '当前网络信号较差，请稍后再试'
  })
}

type requestFactory = () => AxiosPromise<any>

export const wrapperSend = async <T = any>(
  request: requestFactory,
  errorHandle?: ErrorHandle
): Promise<Response<T> | FailResponse> => {
  try {
    const res = await request()

    return handleResponse(res)
  } catch (error) {
    const e = error as AxiosError
    const errResponse = errorHandle?.(e)
    return (
      errResponse || {
        success: false,
        errCode: 500,
        errMsg: '当前网络信号较差，请稍后再试'
      }
    )
  }
}

export const handleResponse = (
  res: AxiosResponse<any, any>
): Response<any> | FailResponse => {
  if (res.config.baseURL?.includes('mock')) {
    return {
      success: true,
      data: res.data
    }
  }
  const success = res.data.code === 200
  if (success) {
    const data = res.data.data
    return {
      success,
      data
    }
  }

  if (res.data.code === 403) {
    localStorage.removeItem(TOKEN)
    Toast.warning('登录已超时，请重新登录')
  }

  const errMsg = res.data.errMes
  const errCode = res.data.code
  return {
    success,
    errMsg,
    errCode
  }
}
