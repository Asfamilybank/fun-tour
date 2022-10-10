import React from 'react'
import { IComponentSize, IInput } from 'components/types'

const INPUT_SIZE_MAP: Record<IComponentSize, string> = {
  large: 'input-lg',
  medium: 'input-md',
  small: 'input-sm',
  mini: 'input-xs'
}
const Input = ({ className, size = 'medium', isError = false, ...props }: IInput) => {
  return <input className={`input input-bordered ${INPUT_SIZE_MAP[size]} ${isError ? 'input-error' : ''} ${className}`} {...props} />
}

export default Input
