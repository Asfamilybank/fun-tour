export interface ILogin {
  token: string
}

export interface IGetInfo {
  image: string
  sex: string
  icon: string
  sign: string
  updateTime: string
  isMember: string
  userId: string
  password: string
  createTime: string
  phone: string
  regionId: string
  extra: string
  name: string
  prohibitReason: string
  id: number
  age: number
  email: string
  isProhibit: string
}

export interface IRegister {
  token: string
}

export interface IUploadFileV2 {
  url: string
}
