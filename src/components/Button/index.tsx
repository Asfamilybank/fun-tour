import { IComponentShape, IComponentSize } from 'components/types'
import React from 'react'

const BUTTON_SIZE_MAP: Record<IComponentSize, string> = {
  large: 'btn-lg',
  medium: 'btn-md',
  small: 'btn-sm',
  mini: 'btn-xs'
}

const BUTTON_SHAPE_MAP: Record<IComponentShape, string> = {
  circle: 'btn-circle',
  square: 'btn-square'
}

const Button = ({
  size = 'medium',
  block = false,
  disabled = false,
  shape,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: IComponentSize
  block?: boolean
  disabled?: boolean
  shape?: IComponentShape
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <button
      className={`btn btn-primary ${block ? 'btn-block' : ''} ${disabled ? 'btn-disabled' : ''} ${BUTTON_SIZE_MAP[size]} ${
        shape ? BUTTON_SHAPE_MAP[shape] : ''
      } ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
