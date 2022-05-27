export interface IResponse<T> {
  success: true
  data: T
}

export interface IFailResponse {
  success: false
  errMes: string
}
