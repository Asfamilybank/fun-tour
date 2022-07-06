import { Button } from '@mui/material'
import { userApi } from 'api'
import { ArrowUpIcon } from 'icons'
import useInit from 'router/hooks'
import { TOKEN } from 'router/utils'

const Login = () => {
  const { init } = useInit()

  const onBtnClick = async () => {
    const res = await userApi.login({ account: '123', password: '123' })

    if (res.success) {
      await localStorage.setItem(TOKEN, res.data.token.toString())
      await init()
      // TToast.clearToast()
      return
    }
    // TToast.failToast(res.err_msg)
    console.log(res)
  }

  return (
    <>
      <div className="p-4">
        <Button variant="contained" onClick={onBtnClick}>
          123
        </Button>
        <ArrowUpIcon />
      </div>
    </>
  )
}

export default Login
