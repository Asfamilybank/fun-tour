import { AliveScope } from 'react-activation'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Router from 'router'
import 'styles/index.css'

const App = () => {
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
