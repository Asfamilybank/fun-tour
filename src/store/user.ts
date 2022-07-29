import { IGetInfo } from 'api/public/response'
import { atom } from 'recoil'

export const userInfo = atom<IGetInfo | undefined>({
  key: 'user/userInfo',
  default: undefined
})
