import Home from 'Pages/Home'
import Layout from 'Pages/Layout'
import Load from 'Pages/Load'
import Login from 'Pages/Login'
import NoFind from 'Pages/NoFind'
import Register from 'Pages/Register'
import UserProfile, { UserProfileRouter } from 'Pages/UserProfile'
import UserSpace from 'Pages/UserSpace'
import Welcome from 'Pages/Welcome'
import { Route, Routes } from 'react-router-dom'
import { useEffectOnce } from 'react-use'
import useInit from './hooks'
import { ROUTE_ROOT, ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER, ROUTE_USER_SPACE, ROUTE_USER_PROFILE } from './path'

const Router = () => {
  const { isLoading, init } = useInit()

  useEffectOnce(() => {
    init()
  })

  if (isLoading) {
    return <Load />
  }

  return (
    <Routes>
      <Route path={ROUTE_ROOT} element={<Welcome />} />
      <Route path={ROUTE_LOGIN} element={<Login />} />
      <Route path={ROUTE_REGISTER} element={<Register />} />
      <Route element={<Layout />}>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_USER_SPACE} element={<UserSpace />} />
        <Route path={ROUTE_USER_PROFILE} element={<UserProfile />}>
          {UserProfileRouter}
        </Route>
        <Route path="*" element={<NoFind />} />
      </Route>
    </Routes>
  )
}

export default Router
