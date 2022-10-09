import { Link, Outlet, Route, useLocation } from 'react-router-dom'
import { ROUTE_USER_PROFILE } from 'router/path'
import { RouteConfigList } from './config'

const UserProfile = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex grow space-x-4">
      <ul className="menu bg-base-100 rounded-box w-56 shrink-0">
        <div className="h-4" />
        <li className={pathname === ROUTE_USER_PROFILE + '/info' ? 'bordered' : ''}>
          <Link to={ROUTE_USER_PROFILE + '/info'}>个人信息</Link>
        </li>
        <li>
          <Link to={ROUTE_USER_PROFILE + '/info'}>个人信息</Link>
        </li>
        <li>
          <Link to={ROUTE_USER_PROFILE + '/info'}>个人信息</Link>
        </li>
        <div className="h-4" />
      </ul>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  )
}

export const UserProfileRouter = RouteConfigList.map((config) => <Route key={config.path} path={ROUTE_USER_PROFILE + config.path} element={config.component} />)

export default UserProfile
