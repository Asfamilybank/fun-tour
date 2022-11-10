import Button from 'Components/Button'
import Logo from 'Components/Logo'
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { userInfoState } from 'Store/user'
import { useToLogin } from 'Utils/login'
import Message from './message'
import UserProfile from './user-profile'

const useNavBarHook = () => {
  const userInfo = useRecoilValue(userInfoState)
  const isLogin = useMemo(() => !!userInfo?.userId, [userInfo?.userId])

  return { isLogin }
}

const NavBar = () => {
  const { isLogin } = useNavBarHook()

  const { toLogin } = useToLogin()

  return (
    <nav className="navbar bg-base-100 rounded-box shadow-sm">
      <div className="grow">
        <Logo isShowName />
      </div>
      <div className="flex-none space-x-2">
        {isLogin ? (
          <>
            <Message />
            <UserProfile />
          </>
        ) : (
          <>
            <Button onClick={toLogin}>去登录</Button>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar
