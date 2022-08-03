import { publicApi } from 'api'
import Toast from 'components/Toast'
import useInit from 'router/hooks'
import { TOKEN } from 'router/utils'
import LoginBgIcon from 'assets/img/login-bg.png'
import { Controller, useForm } from 'react-hook-form'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HOME } from 'router/path'

type IForm = {
  account: string
  password: string
}

const Login = () => {
  const { init } = useInit()

  const { control, handleSubmit } = useForm<IForm>()
  const [AnimateForm] = useAutoAnimate<HTMLLabelElement>()

  const navigate = useNavigate()

  const onSubmit = async (data: IForm) => {
    Toast.loading('登录中...')
    const res = await publicApi.login(data)
    if (!res.success) {
      Toast.error(res.errMsg)
      return
    }
    Toast.success('登录成功')
    localStorage.setItem(TOKEN, res.data.token.toString())
    await init()
    navigate(ROUTE_HOME)
  }

  return (
    <>
      <div
        className="relative flex h-screen w-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${LoginBgIcon})`
        }}
      >
        <div className="card bg-base-100 w-96">
          <div className="card-body">
            <div className="card-title justify-center">登录</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="account"
                rules={{ required: '账户名不能为空' }}
                render={({ field, fieldState: { error } }) => (
                  <div className="form-control">
                    <label className="label">账户</label>
                    <input
                      className={`input input-bordered ${
                        error ? 'input-error' : ''
                      }`}
                      placeholder="请输入账户名"
                      tabIndex={1}
                      autoFocus
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
                name="password"
                rules={{ required: '密码不能为空' }}
                render={({ field, fieldState: { error } }) => (
                  <div className="form-control">
                    <label className="label">密码</label>
                    <input
                      className={`input input-bordered ${
                        error ? 'input-error' : ''
                      }`}
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
              <button type="submit" className="btn btn-primary btn-block mt-10">
                登录
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
