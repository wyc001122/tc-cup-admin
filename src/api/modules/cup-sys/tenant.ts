import http from '@/http'

export function tenant_list(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/list',
    method: 'get',
    params,
    ...other,
  })
}

export function tenant_detail(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/detail',
    method: 'get',
    params,
    ...other,
  })
}

export function tenant_remove(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/remove',
    method: 'post',
    params,
    ...other,
  })
}

export function tenant_submit(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/submit',
    method: 'post',
    params,
    ...other,
  })
}

export function tenant_setting(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/setting',
    method: 'post',
    params,
    ...other,
  })
}

export function tenant_datasource(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/datasource',
    method: 'post',
    params,
    ...other,
  })
}

export function tenant_info(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/info',
    method: 'get',
    params,
    ...other,
  })
}

export function tenant_select(params?: any, other?: any) {
  return http.request<any>({
    url: '/cup-system/tenant/select',
    method: 'get',
    params,
    ...other,
  })
}
