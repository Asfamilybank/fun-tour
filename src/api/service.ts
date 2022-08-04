import { AxiosInstance } from 'axios'
import { sleep } from 'utils'

import { wrapperSend, createRequest } from './request'
import { Response, FailResponse } from './response'

export type Callback = () => void

export type ErrorHandle = (status: number, data: any) => void

export class ApiBaseOptions {
  token = ''
  // userID = 0
  version = 0
  env?: string
  onError?: ErrorHandle
  beforeSend?: Callback
  afterSend?: Callback

  setCredentials({
    token,
    // userID,
    version
  }: {
    token: string
    userID?: number
    version: number
  }) {
    this.token = token
    // this.userID = userID
    this.version = version
  }

  setEnv(env?: string) {
    this.env = env
  }

  removeCredentials() {
    this.token = ''
    // this.userID = 0
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

  protected post = async <T = any>(
    url = '',
    body: any = {},
    options?: RequestOptions
  ) => {
    options = {
      ...defaultRequestOptions,
      ...(options || {})
    }

    if (options.loading && this.options?.beforeSend) {
      this.options.beforeSend()
    }

    const encrypt = body

    if (options.encrypt && this.options?.env === 'production') {
      // encrypt = rsaEncrypt(body)
    }

    const mockURL = `${options?.mock ? import.meta.env.VITE_MOCK_BASE_URL : ''}`

    const [res] = await Promise.all([
      wrapperSend(
        () =>
          this.request.post(mockURL + url, encrypt, {
            headers: {
              token: `${this.options.token}`
              // userid: this.options.userID.toString(),
              // version: this.options.version.toString()
            }
          }),
        this.options?.onError
      ),
      sleep(500)
    ])
    if (options.loading && this.options?.afterSend) {
      this.options.afterSend()
    }

    if (res.success) {
      return res as Response<T>
    } else {
      return res as FailResponse
    }
  }

  protected get = async <T = any>(
    url = '',
    search: any = {},
    options?: RequestOptions
  ) => {
    options = {
      ...defaultRequestOptions,
      ...(options || {})
    }

    if (options.loading && this.options?.beforeSend) {
      this.options.beforeSend()
    }

    const mockURL = `${options?.mock ? import.meta.env.VITE_MOCK_BASE_URL : ''}`

    const [res] = await Promise.all([
      wrapperSend(
        () =>
          this.request.get(mockURL + url, {
            headers: {
              token: `${this.options.token}`
              // userid: this.options.userID.toString(),
              // version: this.options.version.toString()
            },
            params: search
          }),
        this.options?.onError
      ),
      sleep(500)
    ])
    if (options.loading && this.options?.afterSend) {
      this.options.afterSend()
    }

    if (res.success) {
      return res as Response<T>
    } else {
      return res as FailResponse
    }
  }

  protected upload = async <T = any>(
    url = '',
    body: any = {},
    options?: RequestOptions
  ) => {
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
