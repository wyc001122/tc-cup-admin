import type { FormInstance, FormRules } from 'element-plus'
import { useStorage } from '@vueuse/core'
import type { LoginFormData } from '@/views/login/types'

const rememberLoginData = useStorage<LoginFormData>('rememberLoginData', null) // 记住密码history

export default function useLogin() {
  const loading = ref(false)
  const lastLoginData = useStorage <Partial<LoginFormData>>('lastLoginData', {})
  const form = ref({
    /** 租户ID */
    tenant_id: lastLoginData.value.tenant_id ?? '000000',
    /** 用户名 */
    username: lastLoginData.value.username ?? 'admin',
    /** 密码 */
    password: lastLoginData.value.password ?? '',
    /** 验证码 */
    verifyCode: '',
    /** 原始验证码 */
    _verifyCode: '',
    /** 是否记住密码 */
    remember: lastLoginData.value.remember ?? false,
  })

  if (rememberLoginData.value) {
    Object.assign(form.value, rememberLoginData.value)
  }

  watchEffect(() => {
    if (import.meta.env.DEV) {
      form.value.verifyCode = form.value._verifyCode
    }
  })

  const rules = ref<FormRules>({
    tenant_id: [
      { required: true, trigger: 'blur', message: '请输入租户ID' },
    ],
    username: [
      { required: true, trigger: 'blur', message: '请输入用户名' },
    ],
    password: [
      { required: true, trigger: 'blur', message: '请输入密码' },
    ],
    verifyCode: [
      {
        validator: (rule: any, value: any, callback: any) => {
          if (value !== form.value._verifyCode) {
            callback(new Error('验证码输入错误'))
          }
          else {
            callback()
          }
        },
        trigger: 'blur',
        message: '验证码输入错误',
      },
    ],
  })

  return {
    /** 上次登录过的租户 */
    lastLoginData,
    /** 登录表单 */
    form,
    /** 登录表单验证规则 */
    rules,
    /** 登录页loading */
    loading,
  }
}
