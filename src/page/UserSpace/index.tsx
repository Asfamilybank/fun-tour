import { useRecoilState } from 'recoil'
import { userInfoState } from 'store/user'
import Avatar from 'components/Avatar'
import UserProfileBg from 'assets/img/user-profile.jpg'
import { IconHeart } from 'icons'
import { useData } from 'utils/hooks'
import { sightApi } from 'api'

const UserProfile = () => {
  const [userState, setUserState] = useRecoilState(userInfoState)

  const { data } = useData(() => sightApi.collect({ userId: userState?.userId ?? '' }))

  console.log(data)

  return (
    <div className="">
      <div
        className="flex h-48 flex-col justify-between rounded-lg bg-cover bg-no-repeat py-6 px-8 shadow"
        style={{
          backgroundImage: `url(${UserProfileBg})`,
          backgroundPosition: 'center'
        }}
      >
        <div></div>
        <div className="flex items-center">
          <Avatar name={userState?.name} src={userState?.image} />
          <div className="mx-4 flex grow flex-col justify-between self-stretch">
            <div className="text-base-100 text-base font-semibold">{userState?.name}</div>
            <div className="text-base-200">{userState?.sign}</div>
          </div>
          <div className="flex space-x-2">
            <button className="btn btn-primary btn-sm gap-2">
              <IconHeart width={20} height={20} />
              关注
            </button>
            <button className="btn btn-primary btn-outline btn-sm gap-2">已关注</button>
            <button className="btn btn-sm btn-outline text-neutral-content hover:border-neutral-content hover:bg-neutral-content hover:text-neutral">
              发消息
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
