export type IComponentSize = 'large' | 'medium' | 'small' | 'mini'
export type IInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & { size?: IComponentSize; isError?: boolean }
