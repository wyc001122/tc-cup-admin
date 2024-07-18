export interface LoginFormData {
  /** 租户ID */
  tenant_id: string
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
  /** 是否记住密码 */
  remember?: boolean
  /** 验证码 */
  verifyCode?: string
  /** 实际验证码 */
  _verifyCode?: string
}
