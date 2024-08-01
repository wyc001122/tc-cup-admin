import http from '@/http'
import type { MenuVO对象, R, GrantTreeVO, CheckedTreeVO, TopMenu对象, Kv } from './_model'
/**
 * 菜单
 */

/**
 * 详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/detailUsingGET_9
 */
export function menu_detail(params?: any, other?: any) {
  return http.request<MenuVO对象>({
    url: `/cup-system/menu/detail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/listUsingGET_8
 */
export function menu_list(params?: any, other?: any) {
  return http.request<MenuVO对象[]>({
    url: `/cup-system/menu/list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 懒加载列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/lazyListUsingGET_1
 */
export function menu_lazy_list(params?: any, other?: any) {
  return http.request<MenuVO对象[]>({
    url: `/cup-system/menu/lazy-list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 菜单列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/menuListUsingGET
 */
export function menu_menu_list(params?: any, other?: any) {
  return http.request<MenuVO对象[]>({
    url: `/cup-system/menu/menu-list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 懒加载菜单列表
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/lazyMenuListUsingGET
 */
export function menu_lazy_menu_list(params?: any, other?: any) {
  return http.request<MenuVO对象[]>({
    url: `/cup-system/menu/lazy-menu-list`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 同步表单功能 查看菜单详情
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/menuDetailUsingGET
 */
export function menu_menuDetail(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/menu/menuDetail`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/submitUsingPOST_8
 */
export function menu_submit(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/menu/submit`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 批量新增或修改
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/submitListUsingPOST
 */
export function menu_submitList(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/menu/submitList`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 删除
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/removeUsingPOST_8
 */
export function menu_remove(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-system/menu/remove`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * 前端菜单数据
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/routesUsingGET
 */
export function menu_routes(params?: any, other?: any) {
  return http.request<MenuVO对象[]>({
    url: `/cup-system/menu/routes`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 前端按钮数据
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/buttonsUsingGET
 */
export function menu_buttons(params?: any, other?: any) {
  return http.request<MenuVO对象[]>({
    url: `/cup-system/menu/buttons`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 树形结构
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/treeUsingGET_3
 */
export function menu_tree(params?: any, other?: any) {
  return http.request<MenuVO对象[]>({
    url: `/cup-system/menu/tree`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 权限分配树形结构
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/grantTreeUsingGET
 */
export function menu_grant_tree(params?: any, other?: any) {
  return http.request<GrantTreeVO>({
    url: `/cup-system/menu/grant-tree`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 角色所分配的树
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/roleTreeKeysUsingGET
 */
export function menu_role_tree_keys(params?: any, other?: any) {
  return http.request<CheckedTreeVO>({
    url: `/cup-system/menu/role-tree-keys`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 顶部菜单树形结构
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/grantTopTreeUsingGET
 */
export function menu_grant_top_tree(params?: any, other?: any) {
  return http.request<GrantTreeVO>({
    url: `/cup-system/menu/grant-top-tree`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 顶部菜单所分配的树
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/topTreeKeysUsingGET
 */
export function menu_top_tree_keys(params?: any, other?: any) {
  return http.request<CheckedTreeVO>({
    url: `/cup-system/menu/top-tree-keys`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 顶部菜单数据
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/topMenuUsingGET
 */
export function menu_top_menu(params?: any, other?: any) {
  return http.request<TopMenu对象[]>({
    url: `/cup-system/menu/top-menu`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * 菜单的角色权限
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/系统模块/菜单/authRoutesUsingGET
 */
export function menu_auth_routes(params?: any, other?: any) {
  return http.request<Kv[]>({
    url: `/cup-system/menu/auth-routes`,
    method: 'GET',
    params,
    ...other,
  })
}
