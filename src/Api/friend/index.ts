import ApiBase from 'Api/service'

import * as Params from './params'
import * as Responses from './response'

export default class FriendApi extends ApiBase {
  getWebsocketChannel() {
    return this.get<Responses.IGetWebsocketChannel>('/netty/websocket/channel/all')
  }
  accessFriend(params: Params.IAccessFriend) {
    return this.put('/accessFriend', params, { loading: true })
  }
  addFriend(params: Params.IAddFriend) {
    return this.post('/addFriend', params, { loading: true })
  }
  getFriendList() {
    return this.get<Responses.IGetFriendList>('/friendList')
  }
  editFriendNickName(params: Params.IEditFriendNickName) {
    return this.put('/nickName', params, { loading: true })
  }
  refuseFriend(params: Params.IRefuseFriend) {
    return this.put('/refuseFriend', params, { loading: true })
  }
  getChatHistory(id: string, params: Params.IGetChatHistory) {
    return this.pagination<Responses.IGetChatHistory>(`/chat/history/${id}`, params)
  }
  withdrawChat(id: string) {
    return this.put(`/chat/withdraw${id}`, {}, { loading: true })
  }
}
