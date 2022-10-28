import { IMenu } from 'Components/types'
import { IconMenu, IconMenuLeft } from 'Icons'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu: IMenu = ({ direction = 'vertical', configs }) => {
  const { pathname } = useLocation()
  const [isExpend, setIsExpend] = useState(true)

  const onToggleMenu = () => {
    setIsExpend(!isExpend)
  }

  return (
    <ul className={`menu bg-base-100 rounded-box shrink-0 self-start shadow ${direction === 'horizontal' ? 'menu-horizontal' : 'menu-vertical'}`}>
      <li>
        <a className="pl-5" onClick={onToggleMenu}>
          <pre>{isExpend ? <IconMenu /> : <IconMenuLeft />}</pre>
        </a>
      </li>
      {configs.map((config) => (
        <li key={config.path} className="hover-bordered">
          <Link to={config.path} className={pathname === config.path ? 'active' : ''}>
            <pre>{config.icon}</pre>
            {isExpend && config.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
