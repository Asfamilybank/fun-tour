import { IComponentSize } from 'Components/types'

const RADIO_SIZE_MAP: Record<IComponentSize, string> = {
  large: 'radio-lg',
  medium: 'radio-md',
  small: 'radio-sm',
  mini: 'radio-xs'
}
const RADIO_LABEL_SIZE_MAP: Record<IComponentSize, string> = {
  large: 'text-lg',
  medium: 'text-base',
  small: 'text-sm',
  mini: 'text-xs'
}
const RadioComponent = ({
  size = 'medium',
  value,
  isError,
  children,
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> & {
  size?: IComponentSize
  value?: string
  isError?: boolean
  children?: React.ReactNode
}) => {
  return (
    <label className={`inline-flex cursor-pointer space-x-1 ${RADIO_LABEL_SIZE_MAP[size]}`}>
      <input type="radio" value={value} className={`radio radio-primary ${RADIO_SIZE_MAP[size]}`} {...props} />
      <span>{children}</span>
    </label>
  )
}

export default RadioComponent
