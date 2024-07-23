export interface ApiScopeVO对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 菜单主键 (int64) */
  menuId: number
  /** 接口权限备注  */
  remark: string
  /** 资源编号  */
  resourceCode: string
  /** 接口权限名称  */
  scopeName: string
  /** 接口权限字段  */
  scopePath: string
  /** 接口权限类型 (int32) */
  scopeType: number
  /** undefined  */
  scopeTypeName: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface ApiScope对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 菜单主键 (int64) */
  menuId: number
  /** 接口权限备注  */
  remark: string
  /** 资源编号  */
  resourceCode: string
  /** 接口权限名称  */
  scopeName: string
  /** 接口权限字段  */
  scopePath: string
  /** 接口权限类型 (int32) */
  scopeType: number
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface Character {
}

export interface Character_1 {
}

export interface CheckedTreeVO {
  /** undefined  */
  apiScope: string[]
  /** undefined  */
  dataScope: string[]
  /** undefined  */
  menu: string[]
}

export interface CountryVO对象 {
  /** 祖编号  */
  ancestors: string
  /** undefined  */
  children: CountryVO对象[]
  /** 编号  */
  code: string
  /** 三位英文代码  */
  enCode: string
  /** 英文名  */
  enName: string
  /** undefined  */
  hasChildren: boolean
  /** undefined (int64) */
  id: number
  /** 名称  */
  name: string
  /** 三位数字代码  */
  numericCode: string
  /** 父级编号  */
  parentCode: string
  /** undefined (int64) */
  parentId: number
  /** undefined  */
  parentName: string
  /** 层级 (int32) */
  regionLevel: number
}

export interface CupPackageVO对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 产品包菜单  */
  menus: MenuVO对象[]
  /** 产品包名称  */
  packageName: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface CupPackage对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 产品包名称  */
  packageName: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface CupPage消息 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  records: 消息[]
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface DataScopeVO对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 菜单主键 (int64) */
  menuId: number
  /** 数据权限备注  */
  remark: string
  /** 资源编号  */
  resourceCode: string
  /** 数据权限类名  */
  scopeClass: string
  /** 数据权限字段  */
  scopeColumn: string
  /** 数据权限可见字段  */
  scopeField: string
  /** 数据权限名称  */
  scopeName: string
  /** 数据权限类型 (int32) */
  scopeType: number
  /** undefined  */
  scopeTypeName: string
  /** 数据权限值域  */
  scopeValue: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface DataScope对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 菜单主键 (int64) */
  menuId: number
  /** 数据权限备注  */
  remark: string
  /** 资源编号  */
  resourceCode: string
  /** 数据权限类名  */
  scopeClass: string
  /** 数据权限字段  */
  scopeColumn: string
  /** 数据权限可见字段  */
  scopeField: string
  /** 数据权限名称  */
  scopeName: string
  /** 数据权限类型 (int32) */
  scopeType: number
  /** 数据权限值域  */
  scopeValue: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface DataSourceInfo {
  /** undefined  */
  createBy: string
  /** undefined  */
  driverClassName: string
  /** undefined  */
  groupId: string
  /** undefined  */
  id: string
  /** undefined  */
  key: string
  /** undefined  */
  lock: string
  /** undefined (int32) */
  maxRows: number
  /** undefined  */
  name: string
  /** undefined  */
  password: string
  /** undefined  */
  properties: any
  /** undefined  */
  script: string
  /** undefined  */
  type: string
  /** undefined  */
  updateBy: string
  /** undefined  */
  url: string
  /** undefined  */
  username: string
}

export interface DeptVO对象 {
  /** 祖级机构主键  */
  ancestors: string
  /** undefined  */
  children: DeptVO对象[]
  /** 机构类型 (int32) */
  deptCategory: number
  /** undefined  */
  deptCategoryName: string
  /** 机构名  */
  deptName: string
  /** 机构全称  */
  fullName: string
  /** undefined  */
  hasChildren: boolean
  /** undefined (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 主管领导  */
  leader: string
  /** undefined (int64) */
  parentId: number
  /** undefined  */
  parentName: string
  /** 备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
  /** 租户ID  */
  tenantId: string
}

export interface Dept对象 {
  /** 祖级机构主键  */
  ancestors: string
  /** 机构类型 (int32) */
  deptCategory: number
  /** 机构名  */
  deptName: string
  /** 机构全称  */
  fullName: string
  /** 主键 (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 主管领导  */
  leader: string
  /** 父主键 (int64) */
  parentId: number
  /** 备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
  /** 租户ID  */
  tenantId: string
}

export interface DictBizVO对象 {
  /** undefined  */
  children: DictBizVO对象[]
  /** 字典码  */
  code: string
  /** 字典值  */
  dictKey: string
  /** 字典名称  */
  dictValue: string
  /** undefined  */
  hasChildren: boolean
  /** undefined (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 是否已封存 (int32) */
  isSealed: number
  /** undefined (int64) */
  parentId: number
  /** undefined  */
  parentName: string
  /** 字典备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
  /** 租户ID  */
  tenantId: string
}

export interface DictBiz对象 {
  /** 字典码  */
  code: string
  /** 字典值  */
  dictKey: string
  /** 字典名称  */
  dictValue: string
  /** 主键 (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 是否已封存 (int32) */
  isSealed: number
  /** 父主键 (int64) */
  parentId: number
  /** 字典备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
  /** 租户ID  */
  tenantId: string
}

export interface DictVO对象 {
  /** undefined  */
  children: DictVO对象[]
  /** 字典码  */
  code: string
  /** 字典值  */
  dictKey: string
  /** 字典名称  */
  dictValue: string
  /** undefined  */
  hasChildren: boolean
  /** undefined (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 是否已封存 (int32) */
  isSealed: number
  /** undefined (int64) */
  parentId: number
  /** undefined  */
  parentName: string
  /** 字典备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
}

export interface Dict对象 {
  /** 字典码  */
  code: string
  /** 字典值  */
  dictKey: string
  /** 字典名称  */
  dictValue: string
  /** 主键 (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 是否已封存 (int32) */
  isSealed: number
  /** 父主键 (int64) */
  parentId: number
  /** 字典备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
}

export interface DsDefVO对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 数据源必要字段定义  */
  define: string
  /** 图标  */
  icon: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 数据源KEY  */
  name: string
  /** 业务状态 (int32) */
  status: number
  /** 0:消息组件;1:关系数据库;2:KV;3:文档数据库;4:图数据库;5:列式数据库;6:时序数据库;7:文件 (int32) */
  type: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface DsDef对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 数据源必要字段定义  */
  define: string
  /** 图标  */
  icon: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 数据源KEY  */
  name: string
  /** 业务状态 (int32) */
  status: number
  /** 0:消息组件;1:关系数据库;2:KV;3:文档数据库;4:图数据库;5:列式数据库;6:时序数据库;7:文件 (int32) */
  type: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface DsVO对象 {
  /** 分类(SOURCE:数据源,TARGET:目标端)  */
  category: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 所属目录ID  */
  dirId: string
  /** 驱动类  */
  driverClassName: string
  /** 数据源定义ID  */
  dsDefId: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 数据源资源id  */
  magicDsId: string
  /** 英文别名,magic调用时区分不同数据源使用,暂时取name的值  */
  magicKey: string
  /** 数据源名称  */
  name: string
  /** 数据源值  */
  params: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
  /** 配置值  */
  value: string
}

export interface Ds对象 {
  /** 分类(SOURCE:数据源,TARGET:目标端)  */
  category: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 所属目录ID  */
  dirId: string
  /** 驱动类  */
  driverClassName: string
  /** 数据源定义ID  */
  dsDefId: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 数据源资源id  */
  magicDsId: string
  /** 英文别名,magic调用时区分不同数据源使用,暂时取name的值  */
  magicKey: string
  /** 数据源名称  */
  name: string
  /** 数据源值  */
  params: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
  /** 配置值  */
  value: string
}

export interface GrantTreeVO {
  /** undefined  */
  apiScope: MenuVO对象[]
  /** undefined  */
  dataScope: MenuVO对象[]
  /** undefined  */
  menu: MenuVO对象[]
}

export interface GrantVO {
  /** apiScopeIds集合  */
  apiScopeIds: number[]
  /** dataScopeIds集合  */
  dataScopeIds: number[]
  /** menuIds集合  */
  menuIds: number[]
  /** roleIds集合  */
  roleIds: number[]
  /** topMenuIds集合  */
  topMenuIds: number[]
}

export interface IPageApiScopeVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: ApiScopeVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageCupPackageVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: CupPackageVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageCupPackage对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: CupPackage对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageDataScopeVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: DataScopeVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageDictBizVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: DictBizVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageDictVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: DictVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageDsDefVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: DsDefVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageDsDef对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: DsDef对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageDsVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: DsVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageDs对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: Ds对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageParam对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: Param对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPagePostVO对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: PostVO对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageRegion对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: Region对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageTenant对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: Tenant对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface IPageTopMenu对象 {
  /** undefined (int64) */
  current: number
  /** undefined  */
  hitCount: boolean
  /** undefined (int64) */
  pages: number
  /** undefined  */
  records: TopMenu对象[]
  /** undefined  */
  searchCount: boolean
  /** undefined (int64) */
  size: number
  /** undefined (int64) */
  total: number
}

export interface Kv {
}

export interface Locale {
  /** undefined  */
  country: string
  /** undefined  */
  displayCountry: string
  /** undefined  */
  displayLanguage: string
  /** undefined  */
  displayName: string
  /** undefined  */
  displayScript: string
  /** undefined  */
  displayVariant: string
  /** undefined  */
  extensionKeys: Character_1[]
  /** undefined  */
  iso3Country: string
  /** undefined  */
  iso3Language: string
  /** undefined  */
  language: string
  /** undefined  */
  script: string
  /** undefined  */
  unicodeLocaleAttributes: string[]
  /** undefined  */
  unicodeLocaleKeys: string[]
  /** undefined  */
  variant: string
}

export interface Locale_1 {
  /** undefined  */
  country: string
  /** undefined  */
  displayCountry: string
  /** undefined  */
  displayLanguage: string
  /** undefined  */
  displayName: string
  /** undefined  */
  displayScript: string
  /** undefined  */
  displayVariant: string
  /** undefined  */
  extensionKeys: Character_1[]
  /** undefined  */
  iso3Country: string
  /** undefined  */
  iso3Language: string
  /** undefined  */
  language: string
  /** undefined  */
  script: string
  /** undefined  */
  unicodeLocaleAttributes: string[]
  /** undefined  */
  unicodeLocaleKeys: string[]
  /** undefined  */
  variant: string
}

export interface MenuVO对象 {
  /** 操作按钮类型 (int32) */
  action: number
  /** undefined  */
  actionName: string
  /** 菜单别名  */
  alias: string
  /** 菜单类型 (int32) */
  category: number
  /** undefined  */
  categoryName: string
  /** undefined  */
  children: MenuVO对象[]
  /** 菜单编号  */
  code: string
  /** undefined  */
  compName: string
  /** 动态表单使用  */
  formDevId: string
  /** 是否嵌入  */
  frame: boolean
  /** undefined  */
  hasChildren: boolean
  /** undefined (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 是否打开新页面 (int32) */
  isOpen: number
  /** undefined  */
  isOpenName: string
  /** 菜单名称  */
  name: string
  /** undefined (int64) */
  parentId: number
  /** undefined  */
  parentName: string
  /** 请求地址  */
  path: string
  /** 备注  */
  remark: string
  /** true-显示 false-不显示  */
  showLink: boolean
  /** 排序 (int32) */
  sort: number
  /** 菜单资源  */
  source: string
}

export interface Menu对象 {
  /** 操作按钮类型 (int32) */
  action: number
  /** 菜单别名  */
  alias: string
  /** 菜单类型 (int32) */
  category: number
  /** 菜单编号  */
  code: string
  /** 组件名称  */
  compName: string
  /** 动态表单使用  */
  formDevId: string
  /** 是否嵌入  */
  frame: boolean
  /** 主键 (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 是否打开新页面 (int32) */
  isOpen: number
  /** 菜单名称  */
  name: string
  /** 菜单父主键 (int64) */
  parentId: number
  /** 请求地址  */
  path: string
  /** 备注  */
  remark: string
  /** true-显示 false-不显示  */
  showLink: boolean
  /** 排序 (int32) */
  sort: number
  /** 菜单资源  */
  source: string
}

export interface Param对象 {
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 参数键  */
  paramKey: string
  /** 参数名  */
  paramName: string
  /** 参数值  */
  paramValue: string
  /** 备注  */
  remark: string
  /** 业务状态 (int32) */
  status: number
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface PostVO对象 {
  /** 类型 (int32) */
  category: number
  /** undefined  */
  categoryName: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 岗位编号  */
  postCode: string
  /** 岗位名称  */
  postName: string
  /** 岗位描述  */
  remark: string
  /** 岗位排序 (int32) */
  sort: number
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface Post对象 {
  /** 类型 (int32) */
  category: number
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 岗位编号  */
  postCode: string
  /** 岗位名称  */
  postName: string
  /** 岗位描述  */
  remark: string
  /** 岗位排序 (int32) */
  sort: number
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
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

export interface RegionVO对象 {
  /** 祖区划编号  */
  ancestors: string
  /** undefined  */
  children: RegionVO对象[]
  /** 市级区划编号  */
  cityCode: string
  /** 市级名称  */
  cityName: string
  /** 区划编号  */
  code: string
  /** 区级区划编号  */
  districtCode: string
  /** 区级名称  */
  districtName: string
  /** undefined  */
  hasChildren: boolean
  /** undefined (int64) */
  id: number
  /** 区划名称  */
  name: string
  /** 父区划编号  */
  parentCode: string
  /** undefined (int64) */
  parentId: number
  /** undefined  */
  parentName: string
  /** 省级区划编号  */
  provinceCode: string
  /** 省级名称  */
  provinceName: string
  /** 层级 (int32) */
  regionLevel: number
  /** 备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
  /** 镇级区划编号  */
  townCode: string
  /** 镇级名称  */
  townName: string
  /** 村级区划编号  */
  villageCode: string
  /** 村级名称  */
  villageName: string
}

export interface Region对象 {
  /** 祖区划编号  */
  ancestors: string
  /** 市级区划编号  */
  cityCode: string
  /** 市级名称  */
  cityName: string
  /** 区划编号  */
  code: string
  /** 区级区划编号  */
  districtCode: string
  /** 区级名称  */
  districtName: string
  /** 区划名称  */
  name: string
  /** 父区划编号  */
  parentCode: string
  /** 省级区划编号  */
  provinceCode: string
  /** 省级名称  */
  provinceName: string
  /** 层级 (int32) */
  regionLevel: number
  /** 备注  */
  remark: string
  /** 排序 (int32) */
  sort: number
  /** 镇级区划编号  */
  townCode: string
  /** 镇级名称  */
  townName: string
  /** 村级区划编号  */
  villageCode: string
  /** 村级名称  */
  villageName: string
}

export interface RoleVO对象 {
  /** undefined  */
  children: RoleVO对象[]
  /** undefined  */
  hasChildren: boolean
  /** undefined (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** undefined (int64) */
  parentId: number
  /** undefined  */
  parentName: string
  /** 角色别名  */
  roleAlias: string
  /** 角色名  */
  roleName: string
  /** 排序 (int32) */
  sort: number
  /** 租户ID  */
  tenantId: string
}

export interface Role对象 {
  /** 主键 (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 父主键 (int64) */
  parentId: number
  /** 角色别名  */
  roleAlias: string
  /** 角色名  */
  roleName: string
  /** 排序 (int32) */
  sort: number
  /** 租户ID  */
  tenantId: string
}

export interface RApiScope对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RCheckedTreeVO {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RCountryVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RCupPackageVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RCupPage消息 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RDataScope对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RDeptVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RDictBizVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RDictVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RDsDef对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RDs对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RGrantTreeVO {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageApiScopeVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageCupPackageVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageCupPackage对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageDataScopeVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageDictBizVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageDictVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageDsDefVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageDsDef对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageDsVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageDs对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageParam对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPagePostVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageRegion对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageTenant对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RIPageTopMenu对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RKv {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListCountryVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: CountryVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListDeptVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: DeptVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListDept对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: Dept对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListDictBizVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: DictBizVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListDictBiz对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: DictBiz对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListDictVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: DictVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListDict对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: Dict对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListKv {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: Kv[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListMenuVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: MenuVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListPost对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: Post对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListRegionVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: RegionVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListRegion对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: Region对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListRoleVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: RoleVO对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListRole对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: Role对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListTenant对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: Tenant对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RListTopMenu对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: TopMenu对象[]
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RMenuVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RParam对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RPostVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RRegionVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RRoleVO对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RTenant对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface RTopMenu对象 {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface Rlong {
  /** 状态码 (int32) */
  code: number
  /** 承载数据 (int64) */
  data: number
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface R消息详情VO {
  /** 状态码 (int32) */
  code: number
  /** 承载数据  */
  data: any
  /** 返回消息  */
  msg: string
  /** 是否成功  */
  success: boolean
}

export interface Tenant对象 {
  /** 账号额度 (int32) */
  accountNumber: number
  /** 联系地址  */
  address: string
  /** 系统背景  */
  backgroundUrl: string
  /** 联系电话  */
  contactNumber: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 数据源ID (int64) */
  datasourceId: number
  /** 域名地址  */
  domain: string
  /** 过期时间 (date-time) */
  expireTime: string
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 自定义json串  */
  jsonStr: string
  /** 授权码  */
  licenseKey: string
  /** 联系人  */
  linkman: string
  /** 业务状态 (int32) */
  status: number
  /** 系统logo  */
  systemLogo: string
  /** 系统名称  */
  systemName: string
  /** 租户ID  */
  tenantId: string
  /** 租户名称  */
  tenantName: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface TopMenu对象 {
  /** 顶部菜单编号  */
  code: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 顶部菜单名  */
  name: string
  /** 顶部菜单排序 (int32) */
  sort: number
  /** 顶部菜单资源  */
  source: string
  /** 业务状态 (int32) */
  status: number
  /** 租户ID  */
  tenantId: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface 发送消息参数 {
  /** 关联的业务ID (int64) */
  businessId: number
  /** 内容  */
  content: string
  /** 发送者 (int64) */
  creator: number
  /** 标题  */
  title: string
  /** 消息类型(MESSAGE: 信息报送； ALARM: 预警通知;  PLAN: 预案启动)  */
  type: string
  /** 接收用户ID集合  */
  userIds: number[]
}

export interface 消息 {
  /** 关联的业务ID (int64) */
  businessId: number
  /** 内容  */
  content: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 状态（READ:已读； UNREAD:未读）  */
  messageStatus: string
  /** 接收人 (int64) */
  receiver: number
  /** 业务状态 (int32) */
  status: number
  /** 标题  */
  title: string
  /** 消息类型(MESSAGE: 信息报送； ALARM: 预警通知;  PLAN: 预案启动)  */
  type: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}

export interface 消息查询参数 {
  /** 数据分页截止时间,仅APP分页拉取数据生效  */
  deadline: string
  /** 状态(READ：已读； UNREAD：未读)  */
  messageStatus: string
  /** 消息类型(MESSAGE: 信息报送； ALARM: 预警通知;  PLAN: 预案启动)  */
  type: string[]
}

export interface 消息详情VO {
  /** 关联的业务ID (int64) */
  businessId: number
  /** 关联的业务的状态  */
  businessStatus: string
  /** 内容  */
  content: string
  /** 创建部门 (int64) */
  createDept: number
  /** 创建时间 (date-time) */
  createTime: string
  /** 创建人 (int64) */
  createUser: number
  /** 主键id (int64) */
  id: number
  /** 是否已删除 (int32) */
  isDeleted: number
  /** 状态（READ:已读； UNREAD:未读）  */
  messageStatus: string
  /** 关联的业务对象  */
  obj: any
  /** 接收人 (int64) */
  receiver: number
  /** 业务状态 (int32) */
  status: number
  /** 标题  */
  title: string
  /** 消息类型(MESSAGE: 信息报送； ALARM: 预警通知;  PLAN: 预案启动)  */
  type: string
  /** 更新时间 (date-time) */
  updateTime: string
  /** 更新人 (int64) */
  updateUser: number
}
