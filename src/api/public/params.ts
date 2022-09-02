export interface ILogin {
  account: string
  password: string
}

export type IRegister = {
  name: string
  password: string
  email?: string
  phone?: string
}

export interface IUploadFileV2 extends FormData {}
