import { IComponentSize } from 'components/types'
import { cloneElement } from 'react'

const RadioGroup = ({ name, size, children }: { name?: string; size?: IComponentSize; children?: React.ReactNode }) => {
  const hasName = !!name
  let childNode
  if (hasName && children && typeof children !== 'string' && typeof children !== 'number' && typeof children !== 'boolean') {
    childNode = cloneElement(children, { name, size })
  } else {
    childNode = children
  }
  return <div className="space-x-4">{childNode}</div>
}

export default RadioGroup
