import ApiBase from 'api/service'

import * as Params from './params'
import * as Responses from './response'

export default class PublicApi extends ApiBase {
  login(params: Params.ILogin) {
    return this.post<Responses.ILogin>('/user/login', params, { loading: true })
  }

  getInfo() {
    return this.get<Responses.IGetInfo>('/user/cache')
  }
}
