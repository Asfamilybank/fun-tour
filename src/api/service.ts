import { AxiosError, AxiosInstance, Method } from 'axios'
import { TOKEN, USER_ID } from 'router/utils'
import { sleep } from 'utils'

import { wrapperSend, createRequest } from './request'
import { FailResponse } from './response'

export type Callback = () => void

export type ErrorHandle = (e: AxiosError<any>) => FailResponse

export class ApiBaseOptions {
  token = ''
  userId = ''
  version = 0
  env?: string
  onError?: ErrorHandle
  beforeSend?: Callback
  afterSend?: Callback

  setCredentials({ token, userId, version }: { token: string; userId: string; version: number }) {
    this.token = token
    this.userId = userId
    this.version = version
  }

  setEnv(env?: string) {
    this.env = env
  }

  removeCredentials() {
    this.token = ''
    this.userId = ''
    // this.version = 0
  }

  setOnError(onError: ErrorHandle) {
    this.onError = onError
  }

  setOnBeforeSend(onBeforeSend: Callback) {
    this.beforeSend = onBeforeSend
  }

  setOnAfterSend(onAfterSend: Callback) {
    this.afterSend = onAfterSend
  }
}

export type RequestOptions = {
  loading?: boolean
  encrypt?: boolean
  mock?: boolean
  [TOKEN]?: string
  [USER_ID]?: string
  onUploadProgress?: (progress: number, ev: ProgressEvent) => void
}

const defaultRequestOptions: RequestOptions = {
  loading: false,
  encrypt: true,
  mock: false
}

export default class ApiBase {
  protected request: AxiosInstance
  protected options: ApiBaseOptions

  constructor(options: ApiBaseOptions, root?: string) {
    this.request = createRequest(root)
    this.options = options
  }

  protected fetch = async <T = any>({ url = '', data = {}, method, options }: { url?: string; data?: any; method: Method; options?: RequestOptions }) => {
    options = {
      ...defaultRequestOptions,
      ...(options || {})
    }

    if (options.loading && this.options?.beforeSend) {
      this.options.beforeSend()
    }

    const encrypt = data

    if (options.encrypt && this.options?.env === 'production') {
      // encrypt = rsaEncrypt(body)
    }

    const mockURL = `${options?.mock ? import.meta.env.VITE_MOCK_BASE_URL : ''}`

    const res = await wrapperSend<T>(
      () =>
        this.request({
          url: mockURL + url,
          data: encrypt,
          method,
          headers: {
            [TOKEN]: options?.[TOKEN] ?? this.options.token,
            [USER_ID]: options?.[USER_ID] ?? this.options.userId
            // version: this.options.version.toString()
          },
          onUploadProgress: (progressEvent: ProgressEvent) => {
            if (progressEvent.lengthComputable) {
              options?.onUploadProgress?.(progressEvent.loaded / progressEvent.total, progressEvent)
            }
          }
        }),
      this.options?.onError
    )
    if (options.loading && this.options?.afterSend) {
      this.options.afterSend()
    }

    return res
  }

  protected post = async <T = any>(url = '', data: any = {}, options?: RequestOptions) => {
    return this.fetch<T>({ url, data, method: 'POST', options })
  }

  protected get = async <T = any>(url = '', data: any = {}, options?: RequestOptions) => {
    return this.fetch<T>({ url, data, method: 'GET', options })
  }

  protected put = async <T = any>(url = '', data: any = {}, options?: RequestOptions) => {
    return this.fetch<T>({ url, data, method: 'PUT', options })
  }

  protected delete = async <T = any>(url = '', data: any = {}, options?: RequestOptions) => {
    return this.fetch<T>({ url, data, method: 'DELETE', options })
  }

  protected upload = async <T = any>(url = '', body: any = {}, options?: RequestOptions) => {
    if (!options) {
      options = defaultRequestOptions
    }
    if (options.loading && this.options?.beforeSend) {
      this.options.beforeSend()
    }
    const [res] = await Promise.all([
      wrapperSend(async () => {
        return this.request.post(url, body)
      }, this.options?.onError),
      sleep(500)
    ])
    if (options.loading && this.options?.afterSend) {
      this.options.afterSend()
    }
    return res as unknown as T
  }
}
