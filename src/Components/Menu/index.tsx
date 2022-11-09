import { IMenu } from 'Components/types'
import { IconMenu, IconMenuLeft } from 'Icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu: IMenu = ({ defaultExpend = false, direction = 'vertical', configs }) => {
  const { pathname } = useLocation()
  const [isExpend, setIsExpend] = React.useState(defaultExpend)

  const onToggleMenu = () => {
    setIsExpend(!isExpend)
  }

  return (
    <ul
      className={`menu bg-base-100 rounded-box shrink-0 self-start overflow-hidden shadow ${direction === 'horizontal' ? 'menu-horizontal' : 'menu-vertical'}`}
    >
      <div style={{ height: 'calc(var(--rounded-box) - 0.125rem)' }} />
      <li className={`${isExpend ? 'my-0.5' : ''}`}>
        <a className="pl-5" onClick={onToggleMenu}>
          <pre>{isExpend ? <IconMenu /> : <IconMenuLeft />}</pre>
        </a>
      </li>
      {configs.map((config) => (
        <li key={config.path} className={`hover-bordered ${isExpend ? 'my-0.5' : ''}`} title={config.title}>
          <Link to={config.path} className={` ${pathname === config.path ? 'active' : ''}`}>
            <pre>{config.icon}</pre>
            {isExpend && config.title}
          </Link>
        </li>
      ))}
      <div style={{ height: 'calc(var(--rounded-box) - 0.125rem)' }} />
    </ul>
  )
}

export default Menu
