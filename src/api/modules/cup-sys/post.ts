import http from '@/http'
import type { PostVO对象, IPagePostVO对象, R, Post对象 } from './_model'

export type { PostVO对象, IPagePostVO对象, R, Post对象 }
/**
 * 岗位
 */

/**
 * 详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/detailUsingGET_11
 */
export function post_detail(params?: any, other?: any) {
  return http.request<PostVO对象>({
    url: `/cup-system/post/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 分页
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/listUsingGET_10
 */
export function post_list(params?: any, other?: any) {
  return http.request<IPagePostVO对象>({
    url: `/cup-system/post/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 分页
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/pageUsingGET_3
 */
export function post_page(params?: any, other?: any) {
  return http.request<IPagePostVO对象>({
    url: `/cup-system/post/page`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/saveUsingPOST_4
 */
export function post_save(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/post/save`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/updateUsingPOST_4
 */
export function post_update(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/post/update`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/submitUsingPOST_10
 */
export function post_submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/post/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 逻辑删除
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/removeUsingPOST_10
 */
export function post_remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/post/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 下拉数据源
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/岗位/selectUsingGET_1
 */
export function post_select(params?: any, other?: any) {
  return http.request<Post对象[]>({
    url: `/cup-system/post/select`,
    method: 'GET',
    params,
    ...other,
  })
}
