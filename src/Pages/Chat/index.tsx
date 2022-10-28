import { friendApi } from 'Api'
import { useData } from 'Utils/hooks'

const Chat = () => {
  const channel = useData(() => friendApi.GetWebsocketChannel())

  console.log(channel)

  return <></>
}

export default Chat
