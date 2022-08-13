import { useAutoAnimate } from '@formkit/auto-animate/react'
import { publicApi } from 'api'
import Toast from 'components/Toast'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useInit from 'router/hooks'
import { ROUTE_HOME, ROUTE_LOGIN } from 'router/path'
import { TOKEN } from 'router/utils'
import LoginBgIcon from 'assets/img/login-bg.png'

type IForm = {
  name: string
  type: 'email' | 'phone'
  account: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const navigate = useNavigate()

  const onLogin = () => {
    navigate(ROUTE_LOGIN)
  }

  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${LoginBgIcon})`
      }}
    >
      <div className="card bg-base-100 w-96">
        <div className="card-body">
          <div className="card-title mb-4 justify-center">注册</div>
          <RegisterForm />
          <div className="mt-1 text-center text-sm">
            已有账号？
            <button className="link link-primary" onClick={onLogin}>
              去登录
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const RegisterForm = () => {
  const { init } = useInit()
  const navigate = useNavigate()
  const [AnimateForm] = useAutoAnimate<HTMLLabelElement>()

  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      type: 'email',
      name: '',
      account: '',
      password: '',
      confirmPassword: ''
    }
  })
  const passwordValue = useWatch({ control, name: 'password' })

  const onSubmit = async (data: IForm) => {
    Toast.loading('注册中...')
    const res = await publicApi.register({
      [data.type]: data.account,
      password: data.password,
      name: data.name
    })
    if (!res.success) {
      Toast.error(res.errMsg)
      return
    }
    Toast.success('登录成功')
    localStorage.setItem(TOKEN, `${res.data.token}`)
    navigate(ROUTE_HOME)
    await init()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        rules={{ required: '昵称不能为空' }}
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <input
              {...field}
              className={`input input-bordered ${error ? 'input-error' : ''}`}
              placeholder="请输入昵称"
              tabIndex={1}
              autoFocus
            />
            <label className="label" ref={AnimateForm}>
              {error && (
                <span className="label-text-alt text-error">
                  {error.message}
                </span>
              )}
            </label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="account"
        rules={{ required: '账户名不能为空' }}
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <div className="input-group">
              {/* <div className="flex items-center border">
                <IconProfile />
              </div> */}
              <input
                {...field}
                className={`input input-bordered grow ${
                  error ? 'input-error' : ''
                }`}
                placeholder="请输入账户名"
                tabIndex={2}
              />
              <Controller
                control={control}
                name="type"
                render={({ field: field2 }) => (
                  <select {...field2} className="select select-bordered">
                    <option value="email">邮箱</option>
                    <option value="phone">手机号</option>
                  </select>
                )}
              />
            </div>
            <label className="label" ref={AnimateForm}>
              {error && (
                <span className="label-text-alt text-error">
                  {error.message}
                </span>
              )}
            </label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: '密码不能为空' }}
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <input
              className={`input input-bordered ${error ? 'input-error' : ''}`}
              placeholder="请输入密码"
              tabIndex={2}
              type="password"
              {...field}
            />
            <label className="label" ref={AnimateForm}>
              {error && (
                <span className="label-text-alt text-error">
                  {error.message}
                </span>
              )}
            </label>
          </div>
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: '密码不能为空',
          validate: (v) => v === passwordValue || '两次密码不一致'
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <input
              className={`input input-bordered ${error ? 'input-error' : ''}`}
              placeholder="请再次确认密码"
              tabIndex={2}
              type="password"
              {...field}
            />
            <label className="label" ref={AnimateForm}>
              {error && (
                <span className="label-text-alt text-error">
                  {error.message}
                </span>
              )}
            </label>
          </div>
        )}
      />
      <button type="submit" className="btn btn-primary btn-block mt-10">
        登录
      </button>
    </form>
  )
}
export default Register
