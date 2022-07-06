import axios, { AxiosPromise, AxiosError, AxiosResponse } from 'axios'

import { ErrorHandle } from './service'
import { Response, FailResponse } from './response'
import { TOKEN } from 'router/utils'
import { Snackbar } from '@mui/material'
import Toast from 'components/Toast'

const API_ROOT = `${import.meta.env.VITE_BASE_URL}`

export const createRequest = (root?: string) => {
  return axios.create({
    baseURL: root ? root : API_ROOT,
    headers: {
      'Content-type': 'application/json'
    },
    timeout: 30000,
    timeoutErrorMessage: '当前网络信号较差，请稍后再试'
  })
}

type requestFactory = () => AxiosPromise<any>

export const wrapperSend = async (
  request: requestFactory,
  errorHandle?: ErrorHandle
): Promise<Response<any> | FailResponse> => {
  try {
    const res = await request()

    return handleResponse(res)
  } catch (error) {
    const e = error as AxiosError
    if (e.response) {
      errorHandle?.(e.response.status, e.response.data)
      return e.response.data as FailResponse
    } else {
      return {
        success: false,
        errCode: 500,
        errMsg: '当前网络信号较差，请稍后再试'
      }
    }
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
    // Toast.success('身份信息已失效，请重新登录！')
  }

  const errMsg = res.data.errMes
  const errCode = res.data.code
  return {
    success,
    errMsg,
    errCode
  }
}
