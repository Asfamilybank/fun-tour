import { ApiBaseOptions } from './service'
import UserApi from './user'

export const apiOptions = new ApiBaseOptions()
export const userApi = new UserApi(apiOptions)
