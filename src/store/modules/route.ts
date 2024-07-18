import { getRoutesByBackendApi } from '@/api/layout'
import type { MenuItem } from '@/api/layout/model'
import type { RouteRecordRaw } from 'vue-router'
import { isExternalLink, isSelfRouterData, eachTree } from '@/utils/common-utils'
import Layout from '@/layouts/index.vue'

const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH
const views = import.meta.glob('../../views/**/index.vue')
const useRouteStore = defineStore(
  'route',
  () => {
    const router = useRouter()
    const rawData = ref<RouteRecordRaw[]>([])
    const isGenerate = ref<boolean>(false)
    const homePath = ref<string>('')

    // 根据rawData数据，平铺为flatRoutes
    const flatRoutes = computed(() => {
      const returnRoutes: RouteRecordRaw[] = []
      if (rawData.value) {
        eachTree(rawData.value, (item, index, parent) => {
          returnRoutes.push({ ...item, children: [] })
        })
      }
      return returnRoutes
    })

    function getRoutesByBackend() {
      return new Promise((resolve) => {
        getRoutesByBackendApi().then((res) => {
          if (res.code === 200) {
            rawData.value = formatBackRoutes(res.data)
            // 为每个路由添加面包屑
            eachTree(rawData.value, (item: any, index, parent: any) => {
              const breadcrumb = {
                name: item.meta.name,
                path: item.path,
              }
              if (!parent) {
                item.meta.breadcrumbNeste = [breadcrumb]
              }
              else {
                item.meta.breadcrumbNeste = [...parent.meta.breadcrumbNeste, breadcrumb]
              }
            })
            let fstItem = rawData.value[0]
            while (fstItem.children && fstItem.children.length > 0) {
              fstItem = fstItem.children[0]
            }
            homePath.value = fstItem.path
            isGenerate.value = true

            resolve(true)
          }
        })
      })
    }
    /**
     * 处理后端返回的数据
     * 1、提取meta数据(去除无用字段)
     * 2、根据数据 得到 category===1 的页面节点对应的组件
     * 3、给category!==1 的节点设置一个redirect
     * @param data
     */
    function formatBackRoutes(data: MenuItem[], parent?: MenuItem): RouteRecordRaw[] {
      return data.map((item: MenuItem) => {
        if (item.children?.length) {
          item.children = formatBackRoutes(item.children, item) as any // 类型不知道咋写了
        }
        const meta = {
          name: item.name,
          code: item.code,
          showLink: item.showLink,
          category: item.category,
          isOpen: item.isOpen,
          frame: item.frame,
          // 组件库
          /** 菜单标题 */
          title: item.name,
          /** 菜单图标 */
          icon: item.source,
          /** 菜单是否隐藏, 为 true 只注册路由不显示在菜单中, 比如非弹窗形式的添加页面 */
          hide: !item.showLink,
          /** 页签是否缓存, 不为 false 就是 true */
          keepAlive: false,
          /** 是否在面包屑中显示, 不为 false 就是 true */
          breadcrumb: true,
        }
        const routerItem: RouteRecordRaw = {
          name: item.id,
          meta,
          path: item.path,
          children: item.children ?? [],
        }
        // 如果是页面节点
        // -- 外部链接(isExternalLink)
        // -- 无界子应用(除了自己的，其他都是子应用)
        // -- 本地组件
        // -- 找不到
        if (item.category === 1) {
          if (isExternalLink(item.path) || item.isOpen === 1) {
            routerItem.meta = {
              ...meta,
              isLink: item.path,
            }
            routerItem.component = () => import('@/layouts/ExternalLinks/index.vue')
          }
          else if (!isSelfRouterData(item.path)) {
            routerItem.meta = {
              ...meta,
              isWujie: item.path,
            }
            routerItem.component = () => import('@/layouts/Wujie/index.vue')
          }
          else {
            const comPath = item.path.split(VITE_PUBLIC_PATH)[1]
            if (comPath) {
              routerItem.path = comPath.startsWith('/') ? comPath : `/${comPath}`
            }
            const locaComponent = views[`../../views/${comPath}.vue`]
            if (locaComponent) {
              routerItem.component = locaComponent
            }
            else {
              routerItem.component = () => import('@/layouts/exception/404/index.vue')
            }
          }
        }
        else if (item.category === 0) {
          const comPath = item.path.split(VITE_PUBLIC_PATH)[1]
          if (comPath) {
            routerItem.path = comPath.startsWith('/') ? comPath : `/${comPath}`
          }

          if (item.children?.length) {
            routerItem.redirect = item.children[0].path || item.children[0].redirect
          }
          else {
            routerItem.component = () => import('@/layouts/exception/404/index.vue')
          }
        }

        return routerItem
      })
    }

    /** 注册路由 */
    function registerRoutes() {
      const layout = {
        path: '/',
        component: Layout,
        redirect: rawData.value[0].path,
        children: flatRoutes.value,
      }
      const profile = {
        path: '/system/profile/index',
        component: () => import('@/views/system/profile/index.vue'),
        meta: {
          title: '个人中心',
        },
      }
      const notFound = {
        path: '/:path(.*)*',
        component: () => import('@/layouts/exception/404/index.vue'),
        meta: {
          title: '找不到页面',
        },
      }
      layout.children.push(profile)
      layout.children.push(notFound)

      router.addRoute(layout)
    }

    /** 移除路由 */
    function removeRoutes() {
      router.removeRoute('layout')
      router.removeRoute('profile')
      router.removeRoute('notFound')
    }

    return {
      /** 首页 */
      homePath,
      /** 路由数据(袁术数据) */
      rawData,
      /** 扁平化路由数据 */
      flatRoutes,
      /** 是否已根据动态生成并注册路由 */
      isGenerate,
      /** 从后端获取路由数据 */
      getRoutesByBackend,
      /** 注册生成平铺路由 */
      registerRoutes,
      /** 移除生成平铺路由 */
      removeRoutes,
    }
  },
)

export default useRouteStore
