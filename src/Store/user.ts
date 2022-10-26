import { IGetInfo } from 'Api/public/response'
import { atom } from 'recoil'

export const userInfoState = atom<IGetInfo | undefined>({
  key: 'user/userInfoState',
  default: undefined
})
