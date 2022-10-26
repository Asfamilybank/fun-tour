import Avatar from 'Components/Avatar'
import { useRecoilValue } from 'recoil'
import { ROUTE_USER_PROFILE_INFO, ROUTE_USER_SPACE } from 'Router/path'
import { logout } from 'Router/utils'
import { userInfoState } from 'Store/user'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const UserProfile = () => {
  const userInfoValue = useRecoilValue(userInfoState)
  const dialog = withReactContent(Swal)

  const onLogout = async () => {
    const confirm = await dialog.fire({
      title: '确定退出登录吗？',
      text: '你将无法获取更多服务!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '退出',
      cancelButtonText: '取消'
    })

    if (confirm.isConfirmed) {
      logout()
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle">
        <Avatar src={userInfoValue?.icon} name={userInfoValue?.name} />
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-sm">
        <div className="text-base-content px-4 text-base font-semibold">{userInfoValue?.name}</div>
        <li>
          <a className="justify-between" href={ROUTE_USER_SPACE}>
            个人空间
          </a>
        </li>
        <li>
          <a className="justify-between" href={ROUTE_USER_PROFILE_INFO}>
            设置
          </a>
        </li>
        <li>
          <a onClick={onLogout}>退出</a>
        </li>
      </ul>
    </div>
  )
}

export default UserProfile
