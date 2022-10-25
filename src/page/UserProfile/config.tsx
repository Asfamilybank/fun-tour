import { IconDetailsMore, IconProfile, IconUser } from 'icons'
import { ROUTE_USER_PROFILE_AVATAR, ROUTE_USER_PROFILE_INFO, ROUTE_USER_PROFILE_OTHER } from 'router/path'
import Avatar from './component/change-avatar'
import Info from './component/info'
import OtherSettings from './component/other-setting'

type IRouteConfigList = {
  path: string
  icon: React.ReactNode
  title: string
  component: React.ReactNode
}[]

export const RouteConfigList: IRouteConfigList = [
  {
    path: ROUTE_USER_PROFILE_INFO,
    icon: <IconUser />,
    title: '个人信息',
    component: <Info />
  },
  {
    path: ROUTE_USER_PROFILE_AVATAR,
    icon: <IconProfile />,
    title: '头像',
    component: <Avatar />
  },
  {
    path: ROUTE_USER_PROFILE_OTHER,
    icon: <IconDetailsMore />,
    title: '其他',
    component: <OtherSettings />
  }
]
