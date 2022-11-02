import React from 'react'

export type IComponentSize = 'large' | 'medium' | 'small' | 'mini'
export type IComponentShape = 'circle' | 'square'
export type IComponentDirection = 'horizontal' | 'vertical'
export type IComponentWithChildren<T> = React.FC<React.PropsWithChildren<T>>
export type IComponent<T> = React.FC<T>

export type IComponentSizeMap = Record<IComponentSize, string>
export type IComponentShapeMap = Record<IComponentShape, string>

export type IInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & { size?: IComponentSize; isError?: boolean }
export type IInput = IComponent<IInputProps>

export type IMenuProps = { direction?: IComponentDirection; configs: { path: string; title: string; icon: React.ReactNode }[] }
export type IMenu = IComponent<IMenuProps>

export type IRadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> & {
  size?: IComponentSize
  value?: string
  isError?: boolean
}
export type IRadioComponent = IComponentWithChildren<IRadioProps>
export type IRadioGroupProps = { name?: string; size?: IComponentSize }
export type IRadioGroup = IComponentWithChildren<IRadioGroupProps>
