import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { AliveScope } from 'react-activation'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import Router from 'router'
import { darkMode } from 'store/app'
import 'styles/index.css'
import { getTheme } from 'styles/theme'

const App = () => {
  const mode = useRecoilValue(darkMode)

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AliveScope>
          <Router />
        </AliveScope>
      </BrowserRouter>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
)
