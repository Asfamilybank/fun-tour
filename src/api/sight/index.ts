import ApiBase from 'api/service'

import * as Params from './params'
import * as Responses from './response'

export default class SightApi extends ApiBase {
  collect(params: Params.ICollect) {
    return this.get<Responses.ILogin>('/collect', params, { loading: true })
  }
}
