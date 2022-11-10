import { useCallback, useMemo } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTE_LOGIN } from 'Router/path'

export const useToLogin = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [search] = useSearchParams()

  search.set('$replace', pathname)

  const loginPath = useMemo(() => {
    const params = new URLSearchParams(search)

    params.set('$replace', pathname)

    return ROUTE_LOGIN + '?' + params.toString()
  }, [pathname, search])

  const toLogin = useCallback(() => {
    navigate(loginPath)
  }, [loginPath, navigate])

  return { loginPath, toLogin }
}
