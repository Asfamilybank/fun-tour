import React from 'react'
import { AliveScope } from 'react-activation'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Router from 'router'
import 'styles/index.css'
import { themeChange } from 'theme-change'

const App = () => {
  React.useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <BrowserRouter>
      <AliveScope>
        <Router />
      </AliveScope>
    </BrowserRouter>
  )
}

export const root = createRoot(document.getElementById('root')!)

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
