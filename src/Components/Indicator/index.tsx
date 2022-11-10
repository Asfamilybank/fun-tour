import { IComponentHorizontalMap, IComponentVerticalMap, IIndicator } from 'Components/types'

const INDICATOR_HORIZONTAL_MAP: IComponentHorizontalMap = {
  start: 'indicator-start',
  center: 'indicator-center',
  end: 'indicator-end'
}

const INDICATOR_VERTICAL_MAP: IComponentVerticalMap = {
  top: 'indicator-top',
  middle: 'indicator-middle',
  bottom: 'indicator-bottom'
}

const Indicator: IIndicator = ({ items, children }) => {
  return (
    <div className="indicator">
      {items?.map((item, index) => (
        <span
          key={index}
          className={`indicator-item h-fit ${INDICATOR_HORIZONTAL_MAP[item.horizontal ?? 'end']} ${INDICATOR_VERTICAL_MAP[item.vertical ?? 'top']}`}
        >
          {item.component}
        </span>
      ))}
      {children}
    </div>
  )
}

export default Indicator
