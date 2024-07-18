export declare module 'axios' {
  // 扩展 AxiosResponse 接口
  interface AxiosResponse<T = any> {
    code?: number
    msg?: string
  }
}
