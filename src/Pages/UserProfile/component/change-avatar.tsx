import { publicApi } from 'Api'
import { IGetInfo } from 'Api/public/response'
import Avatar from 'Components/Avatar'
import Button from 'Components/Button'
import ImageUpload from 'Components/ImageUpload'
import Toast from 'Components/Toast'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userInfoState } from 'Store/user'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ChangeAvatar = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [value, setValue] = useState<string>()

  const dialog = withReactContent(Swal)

  const onConfirm = async () => {
    const confirm = await dialog.fire({
      title: '确定更换该头像吗？',
      text: '更改后将无法恢复原头像!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    })

    if (confirm.isConfirmed) {
      const res = await publicApi.user({
        userId: userInfo!.userId,
        icon: value
      })

      if (!res.success) {
        Toast.error(res.errMsg)

        return
      }
      Toast.success('修改头像成功')
      setUserInfo((v) => ({ ...v, icon: value } as IGetInfo))
    }
  }

  return (
    <div className="p-10">
      <div className="flex space-x-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <ImageUpload accept=".jpg,.jpeg,.png" onChange={setValue} />
          <Button size="small" disabled={!value} onClick={onConfirm}>
            更换头像
          </Button>
        </div>
        <div className="bg-base-200 h-44 w-px"></div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar src={userInfo?.icon} className="h-28 w-28" />
          <span className="text-sm">当前头像</span>
        </div>
      </div>
    </div>
  )
}

export default ChangeAvatar
