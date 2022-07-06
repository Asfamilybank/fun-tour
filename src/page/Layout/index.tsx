import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="overflow-hidden relative w-screen h-screen">
      <Outlet />
    </div>
  )
}

export default Layout
