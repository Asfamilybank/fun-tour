import { IComponentSizeMap, IRadioComponent } from 'Components/types'

const RADIO_SIZE_MAP: IComponentSizeMap = {
  large: 'radio-lg',
  medium: 'radio-md',
  small: 'radio-sm',
  mini: 'radio-xs'
}
const RADIO_LABEL_SIZE_MAP: IComponentSizeMap = {
  large: 'text-lg',
  medium: 'text-base',
  small: 'text-sm',
  mini: 'text-xs'
}

const RadioComponent: IRadioComponent = ({ size = 'medium', value, isError, children, ...props }) => {
  return (
    <label className={`inline-flex cursor-pointer space-x-1 ${RADIO_LABEL_SIZE_MAP[size]}`}>
      <span>
        <input type="radio" value={value} className={`radio radio-primary ${RADIO_SIZE_MAP[size]}`} {...props} />
      </span>
      <span>{children}</span>
    </label>
  )
}

export default RadioComponent
