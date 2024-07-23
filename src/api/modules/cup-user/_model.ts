export interface IPageUserVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: UserVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
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

export interface RIPageUserVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListUser {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: User[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RUserInfo {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RUserVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RUser {
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

export interface User {
  /** 账号  */
  account: string
  /** 头像  */
  avatar: string
  /** 生日 (date-time) */
  birthday: string
  /** 用户编号  */
  code: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 部门id  */
  deptId: string
  /** 邮箱  */
  email: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 昵称  */
  name: string
  /** 密码  */
  password: string
  /** 手机  */
  phone: string
  /** 岗位id  */
  postId: string
  /** 真名  */
  realName: string
  /** 角色id  */
  roleId: string
  /** 性别 (int32) */
  sex: number
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
  /** 用户平台 (int32) */
  userType: number
}

export interface UserDTO对象 {
  /** 账号  */
  account: string
  /** 头像  */
  avatar: string
  /** 生日 (date-time) */
  birthday: string
  /** 用户编号  */
  code: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 部门id  */
  deptId: string
  /** 邮箱  */
  email: string
  /** 主键id (int64) */
  id: number
  /** undefined  */
  inDeptId: string[]
  /** undefined  */
  inEmail: string[]
  /** undefined  */
  inName: string[]
  /** undefined  */
  inPhone: string[]
  /** undefined  */
  inPostId: string[]
  /** undefined  */
  inRealName: string[]
  /** 是否已删除 (int32) */
  isDeleted: number
  /** undefined  */
  likeEmail: string
  /** undefined  */
  likeName: string
  /** undefined  */
  likePhone: string
  /** undefined  */
  likeRealName: string
  /** 昵称  */
  name: string
  /** 密码  */
  password: string
  /** 手机  */
  phone: string
  /** 岗位id  */
  postId: string
  /** 真名  */
  realName: string
  /** 角色id  */
  roleId: string
  /** 性别 (int32) */
  sex: number
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
  /** 用户平台 (int32) */
  userType: number
}

export interface UserInfo {
  /** 拓展信息  */
  detail: any
  /** 第三方授权id  */
  oauthId: string
  /** 权限集合  */
  permissions: string[]
  /** 角色集合  */
  roles: string[]
  /** 用户  */
  user: any
}

export interface UserOauth {
  /** undefined  */
  avatar: string
  /** undefined  */
  blog: string
  /** undefined  */
  company: string
  /** undefined  */
  email: string
  /** undefined  */
  gender: string
  /** 主键 (int64) */
  id: number
  /** undefined  */
  location: string
  /** undefined  */
  nickname: string
  /** undefined  */
  remark: string
  /** undefined  */
  source: string
  /** undefined  */
  tenantId: string
  /** 用户主键 (int64) */
  userId: number
  /** undefined  */
  username: string
  /** undefined  */
  uuid: string
}

export interface UserVO对象 {
  /** 账号  */
  account: string
  /** 头像  */
  avatar: string
  /** 生日 (date-time) */
  birthday: string
  /** 用户编号  */
  code: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 部门id  */
  deptId: string
  /** undefined  */
  deptName: string
  /** 邮箱  */
  email: string
  /** undefined (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 昵称  */
  name: string
  /** undefined  */
  orgId: string
  /** undefined  */
  orgName: string
  /** 手机  */
  phone: string
  /** 岗位id  */
  postId: string
  /** undefined  */
  postName: string
  /** 真名  */
  realName: string
  /** 角色id  */
  roleId: string
  /** undefined  */
  roleName: string
  /** 性别 (int32) */
  sex: number
  /** undefined  */
  sexName: string
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** undefined  */
  tenantName: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
  /** undefined  */
  userExt: string
  /** 用户平台 (int32) */
  userType: number
  /** undefined  */
  userTypeName: string
}
