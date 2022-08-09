export interface ILogin {
  account: string
  password: string
}

export interface IRegister {
  age: number
  createTime: string
  email: string
  extra: string
  icon: string
  id: number
  image: string
  isMember: string
  isProhibit: string
  name: string
  password: string
  phone: string
  prohibitReason: string
  regionId: string
  sex: string
  sign: string
  token: string
  trend1: string
  trend2: string
  trend3: string
  updateTime: string
  userId: string
}

export interface IUploadFileV2 extends FormData {}
