import Home from 'page/home'
import Test from 'page/test'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="overflow-hidden relative w-screen h-screen">
      {/* <Outlet /> */}
      <div className="p-20">
        <Test />
        <Home />
      </div>
    </div>
  )
}

export default Layout
