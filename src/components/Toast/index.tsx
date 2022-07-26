import { createContext, useContext } from 'react'
import show, { clearFnSet, showLoading } from './show'

const clear = () => {
  clearFnSet.forEach((close) => {
    close()
  })
}
const success = (message: string) => {
  show({ message, severity: 'success' })
}
const info = (message: string) => {
  show({ message, severity: 'info' })
}
const warning = (message: string) => {
  show({ message, severity: 'warning' })
}
const error = (message: string) => {
  show({ message, severity: 'error' })
}
const loading = (message = '') => {
  showLoading({ message })
}
const Toast = {
  success,
  info,
  warning,
  error,
  loading,
  clear
}

export default Toast
