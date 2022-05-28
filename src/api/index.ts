import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_ROOT, ContentType, RequestTimeout } from 'config/api'
import { TOKEN_KEY } from 'config/local-storage'
import { IResponse } from './type'

class ApiRequest {
  private _instance: AxiosInstance
  private _requestConfig?: AxiosRequestConfig
  static _service: ApiRequest

  constructor() {
    this.initConfig()
    this._instance = axios.create(this._requestConfig)
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private initConfig() {
    this._requestConfig = {
      baseURL: API_ROOT,
      timeout: RequestTimeout,
      headers: {
        'Content-Type': ContentType
      }
    }
  }

  private interceptorsRequest() {
    this._instance.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN_KEY)
      if (token) {
        if (config.headers) {
          config.headers[TOKEN_KEY] = token
        }
      }
      return config
    })
  }

  private interceptorsResponse() {
    this._instance.interceptors.response.use(
      (response) => {
        return this.handleResponse(response)
      },
      (error) => {
        const { response } = error
        if (response === undefined) {
          return Promise.reject(new Error(error))
        }
        return this.handleResponse(response)
      }
    )
  }

  private handleResponse(response: AxiosResponse) {
    response.data.success = response.data.code === '200'
    if (!response.data.success) {
      response.data.errMsg = response.data.errMes
      return response
    }
    delete response.data.code
    delete response.data.errMes
    return response
  }

  public async post<T = any>(url = '', body: any = {}, options?: any) {
    const res = await this._instance.post<IResponse<T>>(url, body)
    return res.data
  }

  public static getInstance() {
    if (!this._service) this._service = new ApiRequest()
    return this._service
  }
}

export default ApiRequest.getInstance()
