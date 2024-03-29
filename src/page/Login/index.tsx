import { publicApi } from 'api'
import Toast from 'components/Toast'
import useInit from 'router/hooks'
import { TOKEN, USER_ID } from 'router/utils'
import LoginBgIcon from 'assets/img/login-bg.png'
import { Controller, useForm } from 'react-hook-form'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_REGISTER } from 'router/path'

type IForm = {
  account: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()

  const onRegister = () => {
    navigate(ROUTE_REGISTER)
  }

  return (
    <>
      <div
        className="relative flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LoginBgIcon})` }}
      >
        <div className="card bg-base-100 w-96">
          <div className="card-body">
            <div className="card-title justify-center">登录</div>
            <LoginForm />
            <div className="mt-1 text-center text-sm">
              还没有账号？
              <button className="link link-primary" onClick={onRegister}>
                去注册
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const LoginForm = () => {
  const { init } = useInit()

  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<IForm>({ defaultValues: { account: '', password: '' } })
  const [AnimateForm] = useAutoAnimate<HTMLLabelElement>()
  const onSubmit = async (data: IForm) => {
    Toast.loading('登录中...')
    const res = await publicApi.login(data)
    if (!res.success) {
      Toast.error(res.errMsg)
      return
    }
    Toast.success('登录成功')
    localStorage.setItem(TOKEN, res.data.token)
    localStorage.setItem(USER_ID, res.data.user.userId)
    navigate(ROUTE_HOME)
    await init()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="account"
        rules={{ required: '账户名不能为空' }}
        render={({ field, fieldState: { error } }) => (
          <div className="form-control">
            <label className="label">账户</label>
            <input {...field} className={`input input-bordered ${error ? 'input-error' : ''}`} placeholder="请输入账户名" tabIndex={1} autoFocus />
            <label className="label" ref={AnimateForm}>
              {error && <span className="label-text-alt text-error">{error.message}</span>}
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
            <label className="label">密码</label>
            <input className={`input input-bordered ${error ? 'input-error' : ''}`} placeholder="请输入密码" tabIndex={2} type="password" {...field} />
            <label className="label" ref={AnimateForm}>
              {error && <span className="label-text-alt text-error">{error.message}</span>}
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

export default Login
