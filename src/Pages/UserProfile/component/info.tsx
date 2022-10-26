import { useAutoAnimate } from '@formkit/auto-animate/react'
import { publicApi } from 'Api'
import Input from 'Components/Input'
import Radio from 'Components/Radio'
import Toast from 'Components/Toast'
import { Controller, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { userInfoState } from 'Store/user'

type IForm = {
  name: string
  sex: string
  birthday: string
  sign: string
}
const Info = () => {
  const userInfo = useRecoilValue(userInfoState)

  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: { sex: userInfo?.sex || '0', birthday: userInfo?.birthday, sign: userInfo?.sign, name: userInfo?.name }
  })
  const [AnimateForm] = useAutoAnimate<HTMLLabelElement>()

  const onSubmit = async (data: IForm) => {
    Toast.loading('登录中...')
    const res = await publicApi.user({
      userId: userInfo!.userId,
      ...data
    })

    if (!res.success) {
      Toast.error(res.errMsg)

      return
    }
    Toast.success('登录成功')
  }

  return (
    <form className="max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        rules={{ required: '账户名不能为空' }}
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <label className="label text-xs">账户名</label>
            <Input {...field} isError={!!error} size="small" placeholder="请输入账户名" />
            <label className="label" ref={AnimateForm}>
              {error && <span className="label-text-alt text-error">{error.message}</span>}
            </label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="sex"
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <label className="label text-xs">性别</label>
            <Radio.Group>
              <Radio {...field} value={'0'} size="small" checked={field.value === '0'}>
                保密
              </Radio>
              <Radio {...field} value={'1'} size="small" checked={field.value === '1'}>
                男
              </Radio>
              <Radio {...field} value={'2'} size="small" checked={field.value === '2'}>
                女
              </Radio>
            </Radio.Group>
            <label className="label" ref={AnimateForm}>
              {error && <span className="label-text-alt text-error">{error.message}</span>}
            </label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="birthday"
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <label className="label text-xs">出生日期</label>
            <Input {...field} isError={!!error} size="small" placeholder="请输入年龄" type="date" />
            <label className="label" ref={AnimateForm}>
              {error && <span className="label-text-alt text-error">{error.message}</span>}
            </label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="sign"
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <label className="label text-xs">签名</label>
            <textarea {...field} className={`textarea textarea-bordered textarea-sm ${error ? 'input-error' : ''}`} placeholder="请输入签名" />
            <label className="label" ref={AnimateForm}>
              {error && <span className="label-text-alt text-error">{error.message}</span>}
            </label>
          </div>
        )}
      />
      <button type="submit" className="btn btn-primary btn-block btn-sm mt-4">
        保存
      </button>
    </form>
  )
}

export default Info
