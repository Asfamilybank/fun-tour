import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Outlet />
    </div>
  )
}

export default Layout
