import { friendApi } from 'Api'
import { Outlet, useParams } from 'react-router-dom'
import { Avatar, Indicator, Badge, Input, InputGroup, Button } from 'react-daisyui'
import { useRecoilValue } from 'recoil'
import { userInfoState } from 'Store/user'
import { IconSearch } from 'Icons'
import { useEffect } from 'react'
import React from 'react'
import { useReconnectingWebSocket } from 'Utils/websocket'

const CommentListItem = () => {
  const userInfo = useRecoilValue(userInfoState)

  return (
    <li className="hover:bg-base-300 p-rounded-box flex cursor-pointer items-center space-x-2">
      <Indicator item={<Badge size="xs" />}>
        <Avatar src={userInfo?.icon} size="xs" />
      </Indicator>
      <div className="w-24">
        <p className="text-base-content text-lg">xxx</p>
        <p className="text-base-content/70 text-sm">xxx</p>
      </div>
      <div className="self-start">
        <p className="text-base-content/70 text-xs leading-8">10:10</p>
      </div>
    </li>
  )
}

const CommentList = () => {
  const { id } = useParams()
  const userInfo = useRecoilValue(userInfoState)
  const { rws, send } = useReconnectingWebSocket({
    open(event) {
      send({
        flag: 'SYSTEM',
        sender: { userId: userInfo?.userId },
        receiver: {},
        message: 'token'
      })
    }
  })

  useEffect(() => {
    rws.current?.addEventListener('message', () => {
      send({
        flag: 'SYSTEM',
        sender: { userId: userInfo?.userId },
        receiver: { userId: id },
        message: ''
      })
    })
  }, [])

  return (
    <div className="flex h-full w-full">
      <div className="rounded-box flex max-h-full flex-col rounded-r-none border-r">
        <div className="p-rounded-box flex shrink-0">
          <InputGroup size="xs">
            <Input size="xs" />
            <Button size="xs">
              <IconSearch />
            </Button>
          </InputGroup>
        </div>
        <ul className="bg-base-200 grow">
          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
        </ul>
      </div>
      <div className="rounded-box w-full rounded-l-none">
        <Outlet />
      </div>
    </div>
  )
}

export default CommentList
