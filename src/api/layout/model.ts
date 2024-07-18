export interface LoginResponse {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: 3599
  scope: string
  tenant_id: string
  user_name: string
  real_name: string
  avatar: string
  client_id: string
  role_name: string
  license: string
  post_id: string
  user_id: string
  role_id: string
  nick_name: string
  oauth_id: string
  detail: {
    type: string
    realName: string
    enterpriseCode: string
    enterpriseName: string
  }
  dept_id: string
  account: string
  key: string
  jti: string
}

export interface MenuItem {
  /** 节点id */
  id: string
  /** 父级节点id */
  parentId: string
  /** 权限标识(按钮节点有code) */
  code: string
  /** 节点名称 */
  name: string
  /** 路由别名(tc-admin中没用到) */
  alias: string
  /** 节点路由地址 */
  path: string
  /** 节点图标 */
  source: string
  /** 排序 */
  sort: number
  /**
   * 节点类型
   * 0：菜单(目录)
   * 1：页面
   * 2：按钮
   */
  category: number | null
  /**
   * 按钮位置,具体值忘记了
   */
  action: number | null
  /**
   * 是否新窗口打开
   * 0：否
   * 1： 是
   */
  isOpen: 0 | 1 | null
  /** 备注 */
  remark: string | null
  /**
   * 是否删除(逻辑删除)
   * 0：未删除
   * 1：已删除
   */
  isDeleted: 0 | 1 | null
  /**
   * 是否是iframe嵌入
   * false：不是
   * true：是
   */
  frame: boolean | null
  /**
   * 是否显示在菜单中
   * false：不显示
   * true：显示
   */
  showLink: boolean | null
  /** TODO:完善 */
  formDevId: null
  /** 组件路径 */
  compName: string
  /** parent 翻译 */
  parentName: string | null
  /** category 翻译 */
  categoryName: string | null
  /** action 翻译 */
  actionName: string | null
  /** isOpen 翻译 */
  isOpenName: string | null
  /** 子节点 翻译 */
  children: MenuItem[]
  /** 重定向 */
  redirect?: string

}
