import { IMenu, IMenuProps } from 'Components/types'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './temp'

const Container = ({ menu, configs, children }: { menu?: IMenu; configs?: IMenuProps['configs']; children?: React.ReactNode }) => {
  return (
    <div className="rounded-box flex h-full space-x-4">
      <>{menu ? menu : configs && <Menu configs={configs} />}</>
      <div className="bg-base-100 rounded-box grow p-4">{React.Children.count(children) > 0 ? children : <Outlet />}</div>
    </div>
  )
}

export default Container
