import { renderImperatively } from 'utils/render-imperatively'
import ToastComponent, { IToastComponentProps } from './toast'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export const clearFnSet = new Set<() => void>()

const TOAST_CONTAINER_ID = 'toast-container'

const createToastContainer = () => {
  const div = document.createElement('div')
  div.id = TOAST_CONTAINER_ID
  div.className = 'toast toast-center toast-top z-toast'
  document.body.appendChild(div)
  return div
}

const getToastContainer = () => document.getElementById(TOAST_CONTAINER_ID) ?? createToastContainer()

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

const MySwal = withReactContent(Swal).mixin({
  width: 'auto',
  showConfirmButton: false,
  customClass: {
    footer: 'mt-0 border-none'
  }
})

export const showLoading = ({ message }: { message: string }) => {
  MySwal.fire({
    footer: <p>{message}</p>,
    didOpen: () => {
      MySwal.showLoading()
    },
    allowOutsideClick: false,
    allowEscapeKey: false
  })
  clearFnSet.add(MySwal.close)
  return MySwal.close
}

export default show
