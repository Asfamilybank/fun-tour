import { useTheme, CircularProgress, Backdrop } from '@mui/material'
import { useEffect } from 'react'

export interface ILoadingComponentProps {
  visible?: boolean
  message?: string
  onClose?: () => void
  afterClose?: () => void
}

const LoadingComponent = ({
  visible,
  message,
  onClose,
  afterClose
}: ILoadingComponentProps) => {
  const theme = useTheme()
  useEffect(() => {
    if (visible === false) {
      onClose && onClose()
      setTimeout(() => {
        afterClose && afterClose()
      }, theme.transitions.duration.leavingScreen + 50)
    }
  }, [afterClose, onClose, theme.transitions.duration.leavingScreen, visible])

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={visible ?? false}
      component={'div'}
      className="bg-secondary-darken/50"
    >
      <div className="flex flex-col items-center space-y-2">
        <CircularProgress className="text-primary" />
        <span className="text-sm font-semibold text-primary/95">{message}</span>
      </div>
    </Backdrop>
  )
}

export default LoadingComponent
