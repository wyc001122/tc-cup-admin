/**
 * 修改浏览器标题
 * @param title 标题
 */
export function setPageTitle(title?: string) {
  const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
  const names: string[] = []
  if (title) {
    names.push(title)
  }
  if (VITE_APP_TITLE) {
    names.push(VITE_APP_TITLE)
  }
  document.title = names.join(' - ')
}
