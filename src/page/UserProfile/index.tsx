import { Link, Outlet, Route, useLocation } from 'react-router-dom'
import { ROUTE_USER_PROFILE } from 'router/path'
import { RouteConfigList } from './config'

const UserProfile = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex h-full grow space-x-2">
      <ul className="menu bg-base-100 rounded-box w-48 shrink-0 self-start shadow-sm">
        <div className="h-4" />
        {RouteConfigList.map((config) => (
          <li key={config.path} className={pathname === ROUTE_USER_PROFILE + '/' + config.path ? 'bordered' : ''}>
            <Link to={config.path}>{config.title}</Link>
          </li>
        ))}
        <div className="h-4" />
      </ul>
      <div className="bg-base-100 rounded-box grow p-4 shadow-sm">
        <Outlet />
      </div>
    </div>
  )
}

export const UserProfileRouter = RouteConfigList.map((config) => <Route key={config.path} path={config.path} element={config.component} />)

export default UserProfile
