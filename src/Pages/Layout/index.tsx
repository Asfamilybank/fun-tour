import Desktop from 'Components/Desktop'
import Footer from 'Components/Footer'
import NavBar from 'Components/NavBar'
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
