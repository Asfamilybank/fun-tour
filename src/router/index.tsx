import Home from 'page/Home'
import Layout from 'page/Layout'
import Login from 'page/Login'
import NoFind from 'page/NoFind'
import { Route, Routes } from 'react-router-dom'
import { useEffectOnce } from 'react-use'
import useInit from './hooks'
import { ROUTE_ROOT, ROUTE_HOME, ROUTE_LOGIN } from './path'

const Router = () => {
  const { isLoading, init } = useInit()

  useEffectOnce(() => {
    init()
  })

  if (isLoading) {
    return <>加载中</>
  }

  return (
    <Routes>
      <Route path={ROUTE_ROOT} element={<></>} />
      <Route element={<Layout />}>
        <Route path={ROUTE_HOME} element={<Home />} />
      </Route>
      <Route path={ROUTE_LOGIN} element={<Login />} />
      <Route element={<NoFind />} />
    </Routes>
  )
}

export default Router
