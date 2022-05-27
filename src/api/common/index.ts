import { usePost } from 'utils/request'
import * as Params from './params'
import * as Responses from './responses'

const CommonApi = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  login: usePost<Params.ILogin, Responses.ILogin>('/user/login')
}

export default CommonApi
