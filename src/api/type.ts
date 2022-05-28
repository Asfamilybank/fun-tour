export interface IResponse<T> {
  success: true
  data: T
}

export interface IFailResponse {
  success: false
  errMsg: string
}
