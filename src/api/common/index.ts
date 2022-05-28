import { post } from 'utils/request'
import * as Params from './params'
import * as Responses from './responses'

const CommonApi = {
  login: post<Params.ILogin, Responses.ILogin>('/user/login')
}

export default CommonApi
