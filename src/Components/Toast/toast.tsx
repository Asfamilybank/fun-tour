import { IconCheck, IconClose, IconInfo, IconDanger, IconBell } from 'Icons'

export interface IToastComponentProps {
  visible?: boolean
  message?: string
  severity?: 'success' | 'info' | 'warning' | 'error'
  onClose?: () => void
  afterClose?: () => void
}

const AUTO_HIDE_DURATION = 5 * 1000

const ToastComponent = ({ visible, message, severity, onClose, afterClose }: IToastComponentProps) => {
  const handleClose = () => {
    onClose && onClose()
    setTimeout(() => {
      afterClose && afterClose()
    }, 300)
  }

  setTimeout(() => {
    handleClose()
  }, AUTO_HIDE_DURATION)

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
        return <IconCheck className="shrink-0" />
      case 'error':
        return <IconClose className="shrink-0" />
      case 'info':
        return <IconInfo className="shrink-0" />
      case 'warning':
        return <IconDanger className="shrink-0" />
      default:
        return <IconBell className="shrink-0" />
    }
  }

  return (
    <div className={`alert shadow-sm-lg w-max ${handleSeverity()} ${visible ? 'slide-in-top' : 'slide-out-top'}`}>
      {handleIcon()}
      <span className="inline-block">{message}</span>
    </div>
  )
}

export default ToastComponent
