import Home from 'page/home'
import Layout from 'page/layout'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_ROOT, ROUTE_HOME } from './path'

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_ROOT} element={<Layout />}>
        <Route path={ROUTE_HOME} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
