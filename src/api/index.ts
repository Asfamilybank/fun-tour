import { ApiBaseOptions } from './service'
import PublicApi from './public'

export const apiOptions = new ApiBaseOptions()
export const publicApi = new PublicApi(apiOptions, '/public')
