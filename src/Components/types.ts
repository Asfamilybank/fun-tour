export type IComponentSize = 'large' | 'medium' | 'small' | 'mini'
export type IComponentShape = 'circle' | 'square'
export type IComponentDirection = 'horizontal' | 'vertical'

export type IInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & { size?: IComponentSize; isError?: boolean }

export type IMenu = { direction?: IComponentDirection; configs: { path: string; title: string; icon: React.ReactNode }[] }
