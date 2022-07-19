import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// import { commonApi } from 'api'
// import { useSetRecoilState } from 'recoil'

import {
  initApiOption,
  initEnv,
  initSentry,
  TOKEN
  // USER_ID
  // VERSION
} from './utils'
import { ROUTE_LOGIN, ROUTE_ROOT } from './path'
import { userInfo } from 'store/user'
import { useSetRecoilState } from 'recoil'
import { publicApi } from 'api'

const useInit = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const setUserInfo = useSetRecoilState(userInfo)
  // const setUserState = useSetRecoilState(userState)
  const { pathname } = useLocation()

  const init = async () => {
    const token = localStorage.getItem(TOKEN)
    // const userID = localStorage.getItem(USER_ID)
    initEnv()
    const version = await getVersion()
    initApiOption({
      token,
      //  userID,
      version
    })
    initSentry()
    if (token) {
      await afterInitApiOption()
      setTimeout(() => {
        setIsLoading(false)
      }, 0)
      return
    }
    if (!pathname.includes(ROUTE_LOGIN) && pathname !== ROUTE_ROOT) {
      navigate(ROUTE_LOGIN, { replace: true })
    }
    setIsLoading(false)
  }

  const getVersion = async () => {
    // const version = localStorage.getItem(VERSION)
    // if (!version || version === '0') {
    //   const res = await commonApi.updateInfo()
    //   const newVersion = res.success ? res.data.webVersionCode ?? 0 : 0
    //   localStorage.setItem(VERSION, newVersion.toString())
    //   return newVersion
    // }
    // return parseFloat(version ?? '0')
    return 0
  }

  const afterInitApiOption = async () => {
    const res = await publicApi.getInfo()
    if (res.success) {
      setUserInfo((v) => ({ ...v, ...res.data }))
    }
  }

  return { isLoading, init }
}
export default useInit
