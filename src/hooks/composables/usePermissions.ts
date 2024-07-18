import useUserStore from '@/store/modules/user'

/**
 * 获取按钮权限
 * @description 已通过auto-import自动导入，无需手动导入
 * @returns { object } 按钮权限(map结构)
 * @example
 * const permissions = usePermissions();
 * const permissionList = computed(() => {
 *    return {
 *       addBtn: permissions['system:menu:add'],
 *       delBtn: permissions['system:menu:del'],
 *       editBtn: permissions['system:menu:edit'],
 *       viewBtn: permissions['system:menu:view'],
 *    }
 * });
 */
export function usePermissions() {
  const userStore = useUserStore()
  return userStore.permissions
}
