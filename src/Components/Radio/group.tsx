import { IRadioGroup, IRadioProps } from 'Components/types'
import React from 'react'

const RadioGroup: IRadioGroup = ({ name, size, children }) => {
  return (
    <div className="space-x-4">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<IRadioProps>(child as any, { name, size })
        }
      })}
    </div>
  )
}

export default RadioGroup
