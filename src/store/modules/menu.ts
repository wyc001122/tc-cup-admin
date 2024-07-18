import type { MenuItem } from '@/api/layout/model'
import useRouteStore from '@/store/modules/route'

const useMenuStore = defineStore('menu', () => {
  const routeStore = useRouteStore()

  const menus = computed(() => {
    return routeStore.rawData
  })

  return {
    menus,
  }
})

export default useMenuStore
