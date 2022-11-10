import React from 'react'

// Components type
export type IComponentSize = 'large' | 'medium' | 'small' | 'mini'
export type IComponentShape = 'circle' | 'square'
export type IComponentDirection = 'horizontal' | 'vertical'
export type IComponentHorizontal = 'start' | 'center' | 'end'
export type IComponentVertical = 'top' | 'middle' | 'bottom'
export interface IComponentWithChildren<T> extends React.FC<React.PropsWithChildren<T>> {}
export interface IComponent<T> extends React.FC<T> {}

// Components Map
export interface IComponentSizeMap extends Record<IComponentSize, string> {}
export interface IComponentShapeMap extends Record<IComponentShape, string> {}
export interface IComponentDirectionMap extends Record<IComponentDirection, string> {}
export interface IComponentHorizontalMap extends Record<IComponentHorizontal, string> {}
export interface IComponentVerticalMap extends Record<IComponentVertical, string> {}

// Input
export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: IComponentSize
  isError?: boolean
}
export interface IInput extends IComponent<IInputProps> {}

// Menu
export interface IMenuConfig {
  path: string
  title: string
  icon: React.ReactNode
}
export interface IMenuProps {
  defaultExpend?: boolean
  direction?: IComponentDirection
  configs: IMenuConfig[]
}
export interface IMenu extends IComponent<IMenuProps> {}

// Radio
export interface IRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  size?: IComponentSize
  value?: string
  isError?: boolean
}
export interface IRadioComponent extends IComponentWithChildren<IRadioProps> {}
export interface IRadioGroupProps {
  name?: string
  size?: IComponentSize
}
export interface IRadioGroup extends IComponentWithChildren<IRadioGroupProps> {}

// Indicator
export interface IIndicatorItem {
  horizontal?: IComponentHorizontal
  vertical?: IComponentVertical
  component?: React.ReactNode
}
export interface IIndicatorProps {
  items?: IIndicatorItem[]
}
export interface IIndicator extends IComponentWithChildren<IIndicatorProps> {}
