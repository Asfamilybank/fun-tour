import Menu from 'Components/Menu'
import { IconUser, IconProfile, IconDetailsMore } from 'Icons'
import { Outlet, Route } from 'react-router-dom'
import { ROUTE_USER_PROFILE_INFO, ROUTE_USER_PROFILE_AVATAR, ROUTE_USER_PROFILE_OTHER } from 'Router/path'
import ChangeAvatar from './component/change-avatar'
import Info from './component/info'
import OtherSettings from './component/other-setting'

const configs = [
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
    component: <ChangeAvatar />
  },
  {
    path: ROUTE_USER_PROFILE_OTHER,
    icon: <IconDetailsMore />,
    title: '其他',
    component: <OtherSettings />
  }
]

const UserProfile = () => {
  return (
    <div className="rounded-box flex h-full space-x-4">
      <Menu configs={configs} />
      <div className="bg-base-100 rounded-box grow p-4">
        <Outlet />
      </div>
    </div>
  )
}

export const UserProfileRouter = configs.map((config) => <Route key={config.path} path={config.path} element={config.component} />)

export default UserProfile
