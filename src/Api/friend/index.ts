import ApiBase from 'Api/service'

import * as Params from './params'
import * as Responses from './response'

export default class FriendApi extends ApiBase {
  GetWebsocketChannel() {
    return this.get<Responses.IGetWebsocketChannel>('/netty/websocket/channel/all')
  }
}
