import Menu from 'Components/Menu'
import { IconComment, IconUserList } from 'Icons'
import { Route } from 'react-router-dom'
import { ROUTE_CHAT_FRIEND_LIST, ROUTE_CHAT_MESSAGE } from 'Router/path'
import FriendList from './component/friend-list'
import Message from './component/message'

const configs = [
  {
    path: ROUTE_CHAT_MESSAGE,
    icon: <IconComment />,
    title: '消息',
    component: <Message />
  },
  {
    path: ROUTE_CHAT_FRIEND_LIST,
    icon: <IconUserList />,
    title: '好友列表',
    component: <FriendList />
  }
]

export const ChatRouter = configs.map((config) => <Route key={config.path} path={config.path} element={config.component} />)

const Chat = () => {
  return <Menu.Container configs={configs} />
}

export default Chat
