import Avatar from './component/avatar'
import Info from './component/info'

export const PATH_USER_PROFILE_INFO = 'info'
export const PATH_USER_PROFILE_AVATAR = 'avatar'

type IRouteConfigList = {
  path: string
  title: string
  component: React.ReactNode
}[]

export const RouteConfigList: IRouteConfigList = [
  {
    path: PATH_USER_PROFILE_INFO,
    title: '个人信息',
    component: <Info />
  },
  {
    path: PATH_USER_PROFILE_AVATAR,
    title: '头像',
    component: <Avatar />
  }
]
