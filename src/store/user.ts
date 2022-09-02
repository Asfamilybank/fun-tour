import { IGetInfo } from 'api/public/response'
import { atom } from 'recoil'

export const userInfoState = atom<IGetInfo | undefined>({
  key: 'user/userInfoState',
  default: undefined
})
