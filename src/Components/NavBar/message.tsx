import Button from 'Components/Button'
import Indicator from 'Components/Indicator'
import { IconComment } from 'Icons'
import { Link } from 'react-router-dom'
import { ROUTE_CHAT_COMMENT_LIST } from 'Router/path'

const Message = () => {
  return (
    <div className="dropdown dropdown-end">
      <Button tabIndex={0} shape="circle" className="btn-ghost">
        <div className="indicator">
          <span className="indicator-item indicator-middle indicator-end h-fit"></span>
        </div>
        <Indicator content={<span className="badge badge-sm">8</span>}>
          <IconComment />
        </Indicator>
      </Button>
      <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow-sm">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to={ROUTE_CHAT_COMMENT_LIST} className="btn btn-primary btn-block">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
