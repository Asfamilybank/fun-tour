import { ROUTE_USER_PROFILE_AVATAR, ROUTE_USER_PROFILE_INFO } from 'router/path'
import Avatar from './component/change-avatar'
import Info from './component/info'

type IRouteConfigList = {
  path: string
  title: string
  component: React.ReactNode
}[]

export const RouteConfigList: IRouteConfigList = [
  {
    path: ROUTE_USER_PROFILE_INFO,
    title: '个人信息',
    component: <Info />
  },
  {
    path: ROUTE_USER_PROFILE_AVATAR,
    title: '头像',
    component: <Avatar />
  }
]
