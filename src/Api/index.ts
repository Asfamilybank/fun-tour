import { ApiBaseOptions } from './service'
import PublicApi from './public'
import SightApi from './sight'
import FriendApi from './friend'

export const apiOptions = new ApiBaseOptions()
export const publicApi = new PublicApi(apiOptions, '/public')
export const sightApi = new SightApi(apiOptions, '/sight')
export const friendApi = new FriendApi(apiOptions, '/friend')
