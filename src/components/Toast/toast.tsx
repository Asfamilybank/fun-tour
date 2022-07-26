import { useTheme, Snackbar, Slide, Alert } from '@mui/material'

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
  const theme = useTheme()
  const handleClose = () => {
    onClose && onClose()
    setTimeout(() => {
      afterClose && afterClose()
    }, theme.transitions.duration.leavingScreen + 50)
  }
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={AUTO_HIDE_DURATION}
      TransitionComponent={Slide}
      onClose={handleClose}
      open={visible}
      key={message}
    >
      <Alert severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  )
}

export default ToastComponent
