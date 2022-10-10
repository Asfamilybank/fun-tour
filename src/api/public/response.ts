export interface ILogin {
  token: string
  user: IGetInfo
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
  birthday: string
  email: string
  isProhibit: string
}

export interface IRegister {
  token: string
}

export interface IUploadFileV2 {
  url: string
}
