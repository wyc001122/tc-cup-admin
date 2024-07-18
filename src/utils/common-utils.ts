const VITE_ROUTER_BASE = import.meta.env.VITE_ROUTER_BASE
/**
 * 判断是否是外链
 * @param url 地址
 */
export function isExternalLink(url?: string | null): boolean {
  return !!(
    url
    && (url.startsWith('http://')
    || url.startsWith('https://')
    || url.startsWith('//'))
  )
}

/**
 * 判断后端返回的数据 是否是本项目的路由
 * @param url 地址
 */
export function isSelfRouterData(url?: string | null): boolean {
  //  如果是以VITE_ROUTER_BASE开头
  if (url?.startsWith(VITE_ROUTER_BASE)) {
    return true
  }
  else {
    return false
  }
}

/**
 * 遍历 children 形式数据
 * @param data 数据
 * @param callback 回调
 * @param childrenField children 字段名
 */
export function eachTree<T>(
  data?: T[],
  callback?: (item: T, index: number, parent?: T) => void | boolean,
  childrenField = 'children',
  parent?: T,
) {
  if (data) {
    data.forEach((d: any, i) => {
      if (
        callback
        && callback(d, i, parent) !== false
        && d[childrenField]?.length
      ) {
        eachTree(d[childrenField], callback, childrenField, d)
      }
    })
  }
}

/**
 *  过滤 children 形式数据
 * @param data  数据
 * @param callback 回调
 * @param childrenField children 字段名
 * @param parent 父级
 * @returns 返回过滤后的结果
 */
export function filterTree<T>(
  data?: T[],
  callback?: (item: T, index: number, parent?: T) => boolean,
  childrenField = 'children',
  parent?: T,
) {
  if (data) {
    return data.filter((d: any, i) => {
      if (
        callback
        && callback(d, i, parent)
        && d[childrenField]?.length
      ) {
        d[childrenField] = filterTree(d[childrenField], callback, childrenField, d)
      }
      return callback
        ? callback(d, i, parent)
        : true
    })
  }
}
