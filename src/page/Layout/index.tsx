import Desktop from 'components/Desktop'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="h-min-screen relative w-screen">
      <Desktop header={<NavBar />} footer={<Footer />}>
        <Outlet />
      </Desktop>
    </div>
  )
}

export default Layout
