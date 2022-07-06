import ApiBase from 'api/service'

import * as Params from './params'
import * as Responses from './response'

export default class UserApi extends ApiBase {
  login(params: Params.ILogin) {
    return this.post<Responses.ILogin>('/user/login', params)
  }

  getInfo() {
    return this.get<Responses.IGetInfo>('/user/cache')
  }
}
