import React from 'react'
import { IComponentSize, IInput } from 'Components/types'

const INPUT_SIZE_MAP: Record<IComponentSize, string> = {
  large: 'input-lg',
  medium: 'input-md',
  small: 'input-sm',
  mini: 'input-xs'
}
const Input: IInput = ({ className, size = 'medium', isError = false, ...props }) => {
  return <input className={`input input-bordered ${INPUT_SIZE_MAP[size]} ${isError ? 'input-error' : ''} ${className}`} {...props} />
}

export default Input
