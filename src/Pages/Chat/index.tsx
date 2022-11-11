import Menu from 'Components/Menu'
import { IconComment, IconUserList } from 'Icons'
import { Outlet } from 'react-router-dom'
import { ROUTE_CHAT_FRIEND_LIST, ROUTE_CHAT_COMMENT_LIST } from 'Router/path'

const configs = [
  {
    path: ROUTE_CHAT_COMMENT_LIST,
    icon: <IconComment />,
    title: '消息'
  },
  {
    path: ROUTE_CHAT_FRIEND_LIST,
    icon: <IconUserList />,
    title: '好友列表'
  }
]

const Chat = () => {
  return (
    <div className="rounded-box flex h-full space-x-4">
      <Menu configs={configs} />
      <div className="bg-base-100 rounded-box grow">
        <Outlet />
      </div>
    </div>
  )
}

export default Chat
