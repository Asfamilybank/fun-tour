import RadioComponent from './radio'
import RadioGroup from './group'
import { IRadioComponent, IRadioGroup } from 'Components/types'

export { RadioGroup }
interface CompoundedComponent extends IRadioComponent {
  Group: IRadioGroup
}

const Radio = RadioComponent as CompoundedComponent

Radio.Group = RadioGroup

export default Radio
