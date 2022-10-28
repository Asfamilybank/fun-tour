import { IMenu } from 'Components/types'
import { Outlet } from 'react-router-dom'

const Container = ({ menu }: { menu: IMenu }) => {
  return (
    <div className="rounded-box flex h-full space-x-4">
      <>{menu}</>
      <div className="bg-base-100 rounded-box grow p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Container
