// import { useState } from 'react'
// import { useEffectOnce } from 'react-use'

// import * as sentry from '@sentry/react'

// import { Dialog } from 'antd-mobile'
import { apiOptions } from 'api'
import { ErrorHandle } from 'api/service'
import Toast from 'components/Toast'
import { useSetRecoilState } from 'recoil'
import { sleep } from 'utils'
import { ROUTE_LOGIN } from './path'

export const USER_ID = 'userId'
export const TOKEN = 'token'
// export const VERSION = 'version'

export const errorHandle: ErrorHandle = (e) => {
  let errMsg = ''
  if (e.status && e.status === '500') {
    // sentry.captureException(data.errMes)
    Toast.error(e.response?.data?.errMes)
    errMsg = e.response?.data?.errMes
  }
  // if (
  //   status === 401 &&
  //   document.getElementsByClassName('update-version-dialog').length < 1
  // ) {
  //   localStorage.removeItem(VERSION),
  //   Dialog.alert({
  //     maskClassName: 'update-version-dialog',
  //     closeOnMaskClick: false,
  //     title: '版本更新',
  //     content: <VersionDialogContent />,
  //     confirmText: '立即刷新',
  //     onConfirm: () => {
  //       window.location.reload()
  //     }
  //   })
  // }
  if (e.status && e.status === '403') {
    Toast.warning('登录已超时，请重新登录')
    errMsg = '登录已超时，请重新登录'
    logout()
  }
  return {
    success: false,
    errCode: parseInt(e.status || '500'),
    errMsg
  }
}

export const initSentry = () => {
  // if (apiOptions.env === 'production') {
  //   sentry.init({
  //     dsn: 'https://40b908c984ba4c5e80e45214b4c087c2@sentry.yuanyuyuanzhou.com/4',
  //     tracesSampleRate: 1.0
  //   })
  // }
}

export const initEnv = () => {
  // const metas = document.getElementsByTagName('meta')
  // for (let i = 0; i < metas.length; i++) {
  //   if (metas[i].getAttribute('name') === 'env') {
  //     apiOptions.setEnv(metas[i].getAttribute('content') as string)
  //   }
  // }
}

export const initApiOption = ({ token, userId, version }: { token: string | null; userId: string | null; version: number }) => {
  apiOptions.setOnError(errorHandle)
  apiOptions.setOnBeforeSend(Toast.loading)
  apiOptions.setOnAfterSend(Toast.clear)
  if (token && userId) {
    apiOptions.setCredentials({
      token,
      userId,
      version
    })
  }
}

export const logout = async () => {
  Toast.loading()
  localStorage.removeItem(TOKEN)
  localStorage.removeItem(USER_ID)
  await sleep(1500)
  Toast.clear()
  const search = new URLSearchParams(window.location.search)
  search.set('$replace', window.location.pathname)
  window.location.href = ROUTE_LOGIN + '?' + search.toString()
}

// const VersionDialogContent = () => {
//   const [seconds, setSeconds] = useState(3)

//   useEffectOnce(() => {
//     const timer = setInterval(() => {
//       setSeconds((s) => {
//         if (s === 0) {
//           setTimeout(() => {
//             window.location.reload()
//           }, 0)
//           return 0
//         }
//         return s - 1
//       })
//     }, 1000)
//     return () => clearInterval(timer)
//   })

//   return (
//     <div className="text-white">
//       当前界面版本较低，请刷新页面,{seconds}s后将自动刷新!
//     </div>
//   )
// }
