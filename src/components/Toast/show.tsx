import { renderImperatively } from 'utils/render-imperatively'
import LoadingComponent, { ILoadingComponentProps } from './loading'
import ToastComponent, { IToastComponentProps } from './toast'

export const clearFnSet = new Set<() => void>()

const TOAST_CONTAINER_ID = 'toast-container'

const createToastContainer = () => {
  const div = document.createElement('div')
  div.id = TOAST_CONTAINER_ID
  div.className = 'toast toast-center toast-top'
  document.body.appendChild(div)
  return div
}

const getToastContainer = () =>
  document.getElementById(TOAST_CONTAINER_ID) ?? createToastContainer()

const show = (p?: IToastComponentProps) => {
  const props = Object.assign({}, p)
  const handle = renderImperatively(
    <ToastComponent
      {...props}
      afterClose={() => {
        clearFnSet.delete(handle.close)
      }}
    />,
    getToastContainer()
  )
  clearFnSet.add(handle.close)
  return handle
}

export const showLoading = (p?: ILoadingComponentProps) => {
  const props = Object.assign({}, p)
  const handle = renderImperatively(
    <LoadingComponent
      {...props}
      afterClose={() => {
        clearFnSet.delete(handle.close)
      }}
    />
  )
  clearFnSet.add(handle.close)
  return handle
}

export default show
