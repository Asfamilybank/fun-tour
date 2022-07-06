import { SvgIcon, SvgIconProps } from '@mui/material'
import ArrowUpSvg from 'assets/svg/arrow-up.svg'

export const ArrowUpIcon = (props: SvgIconProps) => {
  return <SvgIcon component={ArrowUpSvg as React.ElementType} {...props} />
}
