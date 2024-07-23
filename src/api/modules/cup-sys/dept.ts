import http from '@/http'
import type { DeptVO对象, R, Dept对象 } from './_model'

/**
 * 部门
 */

/**
 * 详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/detailUsingGET_4
 */
export function dept_detail(params?: any, other?: any) {
  return http.request<DeptVO对象>({
    url: `/cup-system/dept/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/listUsingGET_3
 */
export function dept_list(params?: any, other?: any) {
  return http.request<DeptVO对象[]>({
    url: `/cup-system/dept/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 懒加载列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/lazyListUsingGET
 */
export function dept_lazy_list(params?: any, other?: any) {
  return http.request<DeptVO对象[]>({
    url: `/cup-system/dept/lazy-list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 树形结构
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/treeUsingGET
 */
export function dept_tree(params?: any, other?: any) {
  return http.request<DeptVO对象[]>({
    url: `/cup-system/dept/tree`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 懒加载树形结构
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/lazyTreeUsingGET_1
 */
export function dept_lazy_tree(params?: any, other?: any) {
  return http.request<DeptVO对象[]>({
    url: `/cup-system/dept/lazy-tree`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/submitUsingPOST_3
 */
export function dept_submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/dept/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 删除
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/removeUsingPOST_3
 */
export function dept_remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/dept/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 下拉数据源
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/selectUsingGET
 */
export function dept_select(params?: any, other?: any) {
  return http.request<Dept对象[]>({
    url: `/cup-system/dept/select`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 查询机构(顶级部门)列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/topListUsingGET
 */
export function dept_top_list(params?: any, other?: any) {
  return http.request<DeptVO对象[]>({
    url: `/cup-system/dept/top/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 树形列表带子级
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/部门/listTreeUsingGET
 */
export function dept_list_tree(params?: any, other?: any) {
  return http.request<DeptVO对象[]>({
    url: `/cup-system/dept/list-tree`,
    method: 'GET',
    params,
    ...other,
  })
}

export type {
  DeptVO对象,
  R,
  Dept对象,
}
