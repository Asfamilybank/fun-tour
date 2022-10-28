import React from 'react'

export type IComponentSize = 'large' | 'medium' | 'small' | 'mini'
export type IComponentShape = 'circle' | 'square'
export type IComponentDirection = 'horizontal' | 'vertical'
export type IComponent<T> = (props: T) => JSX.Element

export type IInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & { size?: IComponentSize; isError?: boolean }
export type IInput = IComponent<IInputProps>

export type IMenuProps = { direction?: IComponentDirection; configs: { path: string; title: string; icon: React.ReactNode }[] }
export type IMenu = IComponent<IMenuProps>
