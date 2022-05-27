import service from 'api'

export const usePost = <T = any, D = any>(url: string, options?: any) => {
  return async (params: T) => {
    return await service.post<D>(url, params, options)
  }
}
