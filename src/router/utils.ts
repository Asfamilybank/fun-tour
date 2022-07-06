// import { useState } from 'react'
// import { useEffectOnce } from 'react-use'

// import * as sentry from '@sentry/react'

// import { Dialog } from 'antd-mobile'
import { apiOptions } from 'api'
import { ROUTE_LOGIN } from './path'
// import TToast from 'components/TToast'

export const USER_ID = 'userID'
export const PHONE = 'phone'
export const TOKEN = `${import.meta.env.VITE_TOKEN_KEY}`
// export const VERSION = 'version'

export const errorHandle = (status: number, data: any) => {
  if (status === 500) {
    // sentry.captureException(data.err_msg)
    console.log(data.errMes)
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
  // if (status === 403 || data.err_msg === '您的账户已冻结，请联系管理员解冻') {
  //   TToast.failToast('登录已超时，请重新登录')
  //   logout()
  // }
  if (status === 403) {
    logout()
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

export const initApiOption = ({
  token,
  userID,
  version
}: {
  token: string | null
  userID?: string | null
  version: number
}) => {
  apiOptions.setOnError(errorHandle)
  // apiOptions.setOnBeforeSend(() => TToast.loadingToast(''))
  // apiOptions.setOnAfterSend(TToast.clearToast)
  // if (userID && token) {
  if (token) {
    apiOptions.setCredentials({
      token,
      //  userID: parseInt(userID, 10),
      version
    })
  }
}

const logout = async () => {
  await Promise.all([
    localStorage.removeItem(TOKEN),
    localStorage.removeItem(USER_ID)
  ])
  setTimeout(() => {
    window.location.href = ROUTE_LOGIN
  }, 1500)
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
