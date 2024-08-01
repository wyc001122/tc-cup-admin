export interface AttachVO对象 {
  /** 附件大小 (int64) */
  attachSize: number
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 附件域名  */
  domain: string
  /** 附件拓展名  */
  extension: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 附件地址  */
  link: string
  /** 附件名称  */
  name: string
  /** 附件原名  */
  originalName: string
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface Attach对象 {
  /** 附件大小 (int64) */
  attachSize: number
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 附件域名  */
  domain: string
  /** 附件拓展名  */
  extension: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 附件地址  */
  link: string
  /** 附件名称  */
  name: string
  /** 附件原名  */
  originalName: string
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface CupFile {
  /** undefined (int64) */
  attachId: number
  /** undefined  */
  domain: string
  /** undefined  */
  link: string
  /** undefined  */
  name: string
  /** undefined  */
  originalName: string
}

export interface FileCatalogVO对象 {
  /** 是否为目录组  */
  catalogGroup: boolean
  /** undefined  */
  children: FileCatalogVO对象[]
  /** 创建时间 (date-time) */
  createTime: string
  /** 主键id (int64) */
  id: number
  /** 目录名称  */
  name: string
  /** 父级id (int64) */
  parentId: number
}

export interface FileCatalog对象 {
  /** 是否为目录组  */
  catalogGroup: boolean
  /** 创建时间 (date-time) */
  createTime: string
  /** 主键id (int64) */
  id: number
  /** 目录名称  */
  name: string
  /** 父级id (int64) */
  parentId: number
}

export interface IPageAttachVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: AttachVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageAttach对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: Attach对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPage文件VO {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: 文件VO[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPage标签VO {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: 标签VO[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPage标签组VO {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: 标签组VO[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface Label对象 {
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 是否已删除  */
  deleted: boolean
  /** 标签分组id (int32) */
  groupId: number
  /** 主键id (int32) */
  id: number
  /** 标签名称  */
  name: string
}

export interface NotifyMessageDTO {
  /** undefined  */
  appId: string
  /** undefined  */
  appSecret: string
  /** undefined  */
  content: string
  /** undefined  */
  type: string
}

export interface OssFile {
  /** undefined  */
  contentType: string
  /** undefined  */
  hash: string
  /** undefined (int64) */
  length: number
  /** undefined  */
  link: string
  /** undefined  */
  name: string
  /** undefined (date-time) */
  putTime: string
}

export interface R {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RAttach对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RCupFile {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageAttachVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageAttach对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPage文件VO {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPage标签VO {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPage标签组VO {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListArraybyte {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any[][]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListFileCatalogVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: FileCatalogVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListstring {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: string[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface ROssFile {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RSmsResponse {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface Rboolean {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: boolean
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface Rstring {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: string
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface R分片上传创建返回参数 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface SmsResponse {
  /** undefined (int32) */
  code: number
  /** undefined  */
  msg: string
  /** undefined  */
  success: boolean
}

export interface UploadCreateItem {
  /** 分片编号 (int32) */
  partNumber: number
  /** 上传地址  */
  uploadUrl: string
}

export interface 分片上传创建返回参数 {
  /** 桶  */
  bucketName: string
  /** 分片信息  */
  chunks: UploadCreateItem[]
  /** 上传编号  */
  uploadId: string
  /** 上传地址  */
  uploadPath: string
}

export interface 创建分片请求类 {
  /** 分片数量 (int32) */
  chunkSize: number
  /** 文件名称  */
  fileName: string
}

export interface 合并分片请求类 {
  /** 桶  */
  bucketName: string
  /** 文件目录id (int64) */
  catalogId: number
  /** 分片数量 (int32) */
  chunkSize: number
  /** 文件修订时间 (int64) */
  fileUpdateTime: number
  /** 标签id  */
  labelNames: string[]
  /** 文件名称  */
  name: string
  /** 文件大小 (int64) */
  size: number
  /** 文件类型  */
  type: string
  /** 上传编号  */
  uploadId: string
  /** 上传地址  */
  uploadPath: string
}

export interface 文件VO {
  /** 文件保存物理目录（minio的bucket）  */
  bucket: string
  /** 文件目录id (int64) */
  catalogId: number
  /** 目录信息  */
  catalogName: string
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 上传人名称  */
  createUserName: string
  /** 是否已删除  */
  deleted: boolean
  /** 文件修订时间 (date-time) */
  fileUpdateTime: string
  /** 主键id (int32) */
  id: number
  /** 标签信息  */
  labels: Label对象[]
  /** 文件名称  */
  name: string
  /** 文件保存路径  */
  path: string
  /** 文件大小 (int64) */
  size: number
  /** 文件类型  */
  type: string
  /** 文件地址  */
  url: string
}

export interface 文件标注参数 {
  /** 文件id  */
  fileIds: number[]
  /** 标签名称  */
  labelNames: string[]
}

export interface 标签VO {
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 是否已删除  */
  deleted: boolean
  /** 文件数量 (int64) */
  fileCount: number
  /** 标签分组id (int32) */
  groupId: number
  /** 标签分组名称  */
  groupName: string
  /** 主键id (int32) */
  id: number
  /** 标签名称  */
  name: string
}

export interface 标签组VO {
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int32) */
  id: number
  /** 标签信息  */
  labels: Label对象[]
  /** 标签名称  */
  name: string
}

export interface 添加标签参数 {
  /** 标签组id (int32) */
  groupId: number
  /** 标签id (int32) */
  id: number
  /** 标签名称  */
  name: string
}

export interface 添加标签组参数 {
  /** 标签组id (int32) */
  id: number
  /** 标签名称  */
  labels: string[]
  /** 标签组名称  */
  name: string
}
