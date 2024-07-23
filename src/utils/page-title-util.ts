/**
 * 修改浏览器标题
 * @param title 标题
 */
import useUserStore from '@/store/modules/user'

export function setPageTitle(title?: string) {
  const userStore = useUserStore()
  const VITE_APP_TITLE = userStore.tenantInfo.systemName || import.meta.env.VITE_APP_TITLE
  const names: string[] = []
  if (title) {
    names.push(title)
  }
  if (VITE_APP_TITLE) {
    names.push(VITE_APP_TITLE)
  }
  document.title = names.join(' - ')
}
