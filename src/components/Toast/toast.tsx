import { IconCheck, IconClose, IconInfo, IconDanger, IconBell } from 'icons'

export interface IToastComponentProps {
  visible?: boolean
  message?: string
  severity?: 'success' | 'info' | 'warning' | 'error'
  onClose?: () => void
  afterClose?: () => void
}

const AUTO_HIDE_DURATION = 5 * 1000

const ToastComponent = ({
  visible,
  message,
  severity,
  onClose,
  afterClose
}: IToastComponentProps) => {
  const handleClose = () => {
    onClose && onClose()
    setTimeout(() => {
      afterClose && afterClose()
    }, 300)
  }

  setTimeout(() => {
    handleClose()
  }, AUTO_HIDE_DURATION)

  console.log(severity)

  const handleSeverity = () => {
    switch (severity) {
      case 'success':
        return 'alert-success'
      case 'error':
        return 'alert-error'
      case 'info':
        return 'alert-info'
      case 'warning':
        return 'alert-warning'
      default:
        return ''
    }
  }

  const handleIcon = () => {
    switch (severity) {
      case 'success':
        return <IconCheck />
      case 'error':
        return <IconClose />
      case 'info':
        return <IconInfo />
      case 'warning':
        return <IconDanger />
      default:
        return <IconBell />
    }
  }

  return (
    <div
      className={`alert shadow-lg ${handleSeverity()} ${
        visible ? 'slide-in-top' : 'slide-out-top'
      }`}
    >
      <div>
        {handleIcon()}
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ToastComponent
