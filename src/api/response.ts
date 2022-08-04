export interface Response<T> {
  success: true
  data: T
}

export interface FailResponse {
  success: false
  errCode: number
  errMsg: string
}
