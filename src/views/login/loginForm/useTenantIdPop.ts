import { useStorage } from '@vueuse/core'
import type { LoginFormData } from '@/views/login/types'

export default function useTenantIdPop(form: Ref<LoginFormData>) {
  const popoverRef = ref()
  const historyTenantId = useStorage<string[]>('historyTenantId', ['000000'])

  function chooseTenantId(tenantId: string) {
    form.value.tenant_id = tenantId
    historyTenantId.value.push(tenantId)
    historyTenantId.value = Array.from(new Set(historyTenantId.value))
    popoverRef.value.hide(true)
  }

  function removeTenantId(tenantId: string) {
    form.value.tenant_id = ''
    historyTenantId.value = historyTenantId.value.filter(item => item !== tenantId)
  }

  function saveTenantId(tenantId: string) {
    if (!historyTenantId.value.includes(tenantId)) {
      historyTenantId.value.push(tenantId)
    }
  }

  return {
    popoverRef,
    /** 历史登陆过的租户 */
    historyTenantId,
    /** 选择租户tag */
    chooseTenantId,
    /** 移除租户tag */
    removeTenantId,
    /** 保存租户tag */
    saveTenantId,
  }
}
