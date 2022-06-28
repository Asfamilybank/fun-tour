import { AliveScope } from 'react-activation'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Router from 'router'
import 'styles/index.css'

createRoot(document.getElementById('root')!).render(
  <>
    <RecoilRoot>
      <BrowserRouter>
        <AliveScope>
          <Router />
        </AliveScope>
      </BrowserRouter>
    </RecoilRoot>
  </>
)
