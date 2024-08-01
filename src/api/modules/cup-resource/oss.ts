import http from '@/http'
import type { R, CupFile, OssFile } from './_model'

export type { R, CupFile, OssFile }
/**
 * 对象存储端点
 */

/**
 * copyFile
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/copyFileUsingPOST
 */
export function oss_endpoint_copy_file(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-resource/oss/endpoint/copy-file`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * fileLink
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/fileLinkUsingGET
 */
export function oss_endpoint_file_link(params?: any, other?: any) {
  return http.request<string>({
    url: `/cup-resource/oss/endpoint/file-link`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * filePath
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/filePathUsingGET
 */
export function oss_endpoint_file_path(params?: any, other?: any) {
  return http.request<string>({
    url: `/cup-resource/oss/endpoint/file-path`,
    method: 'GET',
    params,
    ...other,
  })
}

/**
 * makeBucket
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/makeBucketUsingPOST
 */
export function oss_endpoint_make_bucket(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-resource/oss/endpoint/make-bucket`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * putFile
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/putFileUsingPOST_1
 */
export function oss_endpoint_put_file(params?: any, other?: any) {
  return http.request<CupFile>({
    url: `/cup-resource/oss/endpoint/put-file`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * putFileAttach
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/putFileAttachUsingPOST_1
 */
export function oss_endpoint_put_file_attach(params?: any, other?: any) {
  return http.request<CupFile>({
    url: `/cup-resource/oss/endpoint/put-file-attach`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * putFileAttach
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/putFileAttachUsingPOST
 */
export function oss_endpoint_put_file_attach_by_name(params?: any, other?: any) {
  return http.request<CupFile>({
    url: `/cup-resource/oss/endpoint/put-file-attach-by-name`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * putFile
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/putFileUsingPOST
 */
export function oss_endpoint_put_file_by_name(params?: any, other?: any) {
  return http.request<CupFile>({
    url: `/cup-resource/oss/endpoint/put-file-by-name`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * removeBucket
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/removeBucketUsingPOST
 */
export function oss_endpoint_remove_bucket(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-resource/oss/endpoint/remove-bucket`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * removeFile
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/removeFileUsingPOST
 */
export function oss_endpoint_remove_file(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-resource/oss/endpoint/remove-file`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * removeFiles
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/removeFilesUsingPOST
 */
export function oss_endpoint_remove_files(params?: any, other?: any) {
  return http.request<R>({
    url: `/cup-resource/oss/endpoint/remove-files`,
    method: 'POST',
    data: params,
    ...other,
  })
}

/**
 * statFile
 * @link http://192.168.11.91:30397/cup-swagger/doc.html#/资源服务/对象存储端点/statFileUsingGET
 */
export function oss_endpoint_stat_file(params?: any, other?: any) {
  return http.request<OssFile>({
    url: `/cup-resource/oss/endpoint/stat-file`,
    method: 'GET',
    params,
    ...other,
  })
}
