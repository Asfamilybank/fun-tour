import { IPaginationParams } from 'Api/service'

export interface IAccessFriend {
  friendId: string
  message: string
  status: string
}

export interface IAddFriend {
  message: string
  reciverId: string
  senderId: string
}

export interface IEditFriendNickName {
  friendId: string
  nickName: string
}

export interface IRefuseFriend {
  friendId: string
  message: string
  status: string
}

export interface IGetChatHistory extends IPaginationParams {}
