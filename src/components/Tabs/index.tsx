import { useState } from 'react'

const Tabs = ({
  defaultActive,
  tabs,
  style,
  className,
  onChange
}: {
  defaultActive?: string
  tabs: Record<string, string | number>
  style?: React.CSSProperties
  className?: string
  onChange?: (active: string) => void
}) => {
  const [active, setActive] = useState(defaultActive ?? Object.keys(tabs).shift())

  const keys = Object.keys(tabs)

  return (
    <div className={`tabs` + className} style={style}>
      {keys.map((key) => (
        <a
          key={key}
          className={`tab tab-bordered ${active === key ? 'tab-active' : ''}`}
          onClick={() => {
            setActive(key)
            onChange?.(key)
          }}
        >
          {tabs[key]}
        </a>
      ))}
    </div>
  )
}

export default Tabs
