import { friendApi } from 'Api'
import Avatar from 'Components/Avatar'
import { Outlet, useParams } from 'react-router-dom'
import { useData } from 'Utils/hooks'

const CommentListItem = () => {
  return (
    <div>
      <Avatar />
      <div></div>
      <div></div>
    </div>
  )
}

const CommentList = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <div className="flex h-full w-full">
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default CommentList
