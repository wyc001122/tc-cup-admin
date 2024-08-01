// 扩展Document类
declare interface Document {
  startViewTransition: (callback: () => any) => ViewTransition
}

declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean
    // 子应用mount函数
    __WUJIE_MOUNT: () => void
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void
    // 子应用无界实例
    __WUJIE: { mount: () => void }
  }
}

/**
 * 传入@/api/modules 下的api函数，返回res.data的类型
 * @example
 * import { menu_list } from '@/api/modules/cup-system/menu'
 * const tableData: ExtractAxiosRes<typeof menu_list>['data']
 */
type ExtractAxiosRes<T> = Awaited<ReturnType<T>>
