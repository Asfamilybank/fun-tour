import { renderImperatively } from 'utils/render-imperatively'
import LoadingComponent, { ILoadingComponentProps } from './loading'
import ToastComponent, { IToastComponentProps } from './toast'

export const clearFnSet = new Set<() => void>()

const show = (p?: IToastComponentProps) => {
  const props = Object.assign({}, p)
  const handle = renderImperatively(
    <ToastComponent
      {...props}
      afterClose={() => {
        clearFnSet.delete(handle.close)
      }}
    />
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
