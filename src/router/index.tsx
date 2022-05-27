import Home from 'page/home'
import Layout from 'page/layout'
import { Route, Routes } from 'react-router-dom'
import { ROOT, HOME } from './path'

const Router = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<Layout />}>
        <Route path={HOME} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
