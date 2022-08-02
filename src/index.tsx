import { AliveScope } from 'react-activation'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import Router from 'router'
import { darkMode } from 'store/app'
import 'styles/index.css'

const App = () => {
  const mode = useRecoilValue(darkMode)

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
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
)
