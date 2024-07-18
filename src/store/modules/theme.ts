/**
 * 主题状态管理
 */
import { defineStore } from 'pinia'
import { changeColor } from '@/utils/theme-utils'
import type {
  TabItem,
  Layout,
  SidebarLayout,
  HeaderStyle,
  SidebarStyle,
  TabStyle,
  TabItemEventOption,
  MenuItemTrigger,
} from 'ele-admin-plus/es/ele-pro-layout/types'
import VxeUI from 'vxe-pc-ui'

/** 开启页签栏后是否缓存组件 */
export const TAB_KEEP_ALIVE = true
/** 主题配置本地缓存的名称 */
export const THEME_CACHE_NAME = 'theme'
/**
 * 默认值
 */
const DEFAULT_STATE = Object.freeze<ThemeState>({
  /** 页签数据 */
  tabs: [],
  /** 是否折叠侧栏 */
  collapse: false,
  /** 侧栏一级是否紧凑风格 */
  compact: false,
  /** 内容区是否最大化 */
  maximized: false,
  /** 是否需要页签栏 */
  tabBar: true,
  /** 布局类型 */
  layout: 'default',
  /** 侧栏布局类型 */
  sidebarLayout: 'default',
  /** 顶栏风格 */
  headerStyle: 'light',
  /** 侧栏风格 */
  sidebarStyle: 'light',
  /** 页签风格 */
  tabStyle: 'simple',
  /** 是否固定顶栏 */
  fixedHeader: true,
  /** 是否固定侧栏 */
  fixedSidebar: true,
  /** 是否固定内容区 */
  fixedBody: true,
  /** 内容区是否撑满 */
  fluid: true,
  /** 图标是否置于顶栏 */
  logoInHeader: true,
  /** 侧栏菜单是否彩色图标 */
  colorfulIcon: false,
  /** 侧栏排他展开 */
  uniqueOpened: true,
  /** 固定主页页签 */
  fixedHome: false,
  /** 页签是否置于顶栏 */
  tabInHeader: false,
  /** 路由切换动画 */
  transitionName: 'slide-right',
  /** 是否色弱模式 */
  weakMode: false,
  /** 是否暗黑模式 */
  darkMode: false,
  /** 主题色 */
  color: null,
  /** 内容区宽度 */
  contentWidth: null,
  /** 是否开启圆角主题 */
  roundedTheme: true,
  /** 菜单触发模式 */
  menuItemTrigger: 'click',
  /** 是否开启响应式 */
  responsive: false,
})

/**
 * 读取缓存配置
 */
function getCacheSetting(): Record<string, unknown> {
  try {
    const value = localStorage.getItem(THEME_CACHE_NAME)
    if (value) {
      const cache = JSON.parse(value)
      if (typeof cache === 'object') {
        return cache
      }
    }
  }
  catch (e) {
    console.error(e)
  }
  return {}
}

/**
 * 缓存配置
 */
function cacheSetting(key: string, value: unknown) {
  const cache = getCacheSetting()
  if (cache[key] !== value) {
    cache[key] = value
    localStorage.setItem(THEME_CACHE_NAME, JSON.stringify(cache))
  }
}

/**
 * 开关响应式布局
 */
function changeResponsive(responsive: boolean) {
  const classes = 'ele-body-limited'
  if (responsive) {
    document.body.classList.remove(classes)
  }
  else {
    document.body.classList.add(classes)
  }
}

/**
 * 切换圆角主题
 */
function changeRoundedTheme(roundedTheme: boolean) {
  const classes = 'rounded'
  const $html = document.querySelector('html')
  if ($html && roundedTheme) {
    $html.classList.add(classes)
  }
  else if ($html) {
    $html.classList.remove(classes)
  }
}

/**
 * 切换色弱模式
 */
function changeWeakMode(weakMode: boolean) {
  const classes = 'ele-admin-weak'
  if (weakMode) {
    document.body.classList.add(classes)
  }
  else {
    document.body.classList.remove(classes)
  }
}

/**
 * 切换主题
 */
function changeTheme(value?: string | null, dark?: boolean) {
  return new Promise<void>((resolve, reject) => {
    try {
      changeColor(value, dark)
      VxeUI.setTheme(dark ? 'dark' : 'light')
      resolve()
    }
    catch (e) {
      reject(e)
    }
  })
}

const useThemeStore = defineStore('theme', () => {
  const state = ref<ThemeState>({
    ...DEFAULT_STATE,
  })
  // 读取本地缓存
  const cache = getCacheSetting()
  Object.keys(state.value).forEach((key) => {
    if (typeof cache[key] !== 'undefined') {
      state.value[key] = cache[key]
    }
  })

  /** 需要缓存的组件 */
  const keepAliveInclude = computed(() => {
    if (!TAB_KEEP_ALIVE || !state.value.tabBar || !state.value.tabs) {
      return []
    }
    const components = new Set<string>()
    state.value.tabs.forEach((t) => {
      if (t.meta?.keepAlive !== false && !t.refresh && t.components) {
        t.components.forEach((c) => {
          if (typeof c === 'string' && c) {
            components.add(c)
          }
        })
      }
    })
    return Array.from(components)
  })
  function setState(key: string, value: unknown) {
    state.value[key] = value
  }
  function setTabs(value: TabItem[]) {
    setState('tabs', value)
  }
  function setCollapse(value: boolean) {
    setState('collapse', value)
  }
  function setCompact(value: boolean) {
    setState('compact', value)
  }
  function setMaximized(value: boolean) {
    setState('maximized', value)
  }
  function setTabBar(value: boolean) {
    setState('tabBar', value)
    cacheSetting('tabBar', value)
  }
  function setLayout(value: Layout) {
    setState('layout', value)
    cacheSetting('layout', value)
  }
  function setSidebarLayout(value: SidebarLayout) {
    setState('sidebarLayout', value)
    cacheSetting('sidebarLayout', value)
  }
  function setHeaderStyle(value: HeaderStyle) {
    setState('headerStyle', value)
    cacheSetting('headerStyle', value)
  }
  function setSidebarStyle(value: SidebarStyle) {
    setState('sidebarStyle', value)
    cacheSetting('sidebarStyle', value)
  }
  function setTabStyle(value: TabStyle) {
    setState('tabStyle', value)
    cacheSetting('tabStyle', value)
  }
  function setFixedHeader(value: boolean) {
    setState('fixedHeader', value)
    cacheSetting('fixedHeader', value)
  }
  function setFixedSidebar(value: boolean) {
    setState('fixedSidebar', value)
    cacheSetting('fixedSidebar', value)
  }
  function setFixedBody(value: boolean) {
    setState('fixedBody', value)
    cacheSetting('fixedBody', value)
  }
  function setFluid(value: boolean) {
    setState('fluid', value)
    cacheSetting('fluid', value)
  }
  function setLogoInHeader(value: boolean) {
    setState('logoInHeader', value)
    cacheSetting('logoInHeader', value)
  }
  function setColorfulIcon(value: boolean) {
    setState('colorfulIcon', value)
    cacheSetting('colorfulIcon', value)
  }
  function setUniqueOpened(value: boolean) {
    setState('uniqueOpened', value)
    cacheSetting('uniqueOpened', value)
  }
  function setFixedHome(value: boolean) {
    setState('fixedHome', value)
    cacheSetting('fixedHome', value)
  }
  function setTabInHeader(value: boolean) {
    setState('tabInHeader', value)
    cacheSetting('tabInHeader', value)
  }
  function setTransitionName(value: string) {
    setState('transitionName', value)
    cacheSetting('transitionName', value)
  }
  function setContentWidth(value: number | null) {
    setState('contentWidth', value)
  }

  function setWeakMode(value: boolean) {
    changeWeakMode(value)
    setState('weakMode', value)
    cacheSetting('weakMode', value)
  }
  /**
   * 切换暗黑模式
   * @param value 是否是暗黑模式
   */
  async function setDarkMode(value: boolean) {
    await changeTheme(state.value.color, value)
    setState('darkMode', value)
    cacheSetting('darkMode', value)
  }
  /**
   * 切换主题色
   * @param value 主题色
   */
  async function setColor(value: string | null) {
    await changeTheme(value, state.value.darkMode)
    setState('color', value)
    cacheSetting('color', value)
  }
  /**
   * 重置
   */
  async function resetSetting() {
    const excludes = ['tabs', 'collapse', 'contentWidth']
    Object.keys(DEFAULT_STATE).forEach((key) => {
      if (!excludes.includes(key)) {
        state.value[key] = DEFAULT_STATE[key]
      }
    })
    localStorage.removeItem(THEME_CACHE_NAME)
    changeResponsive(state.value.responsive)
    changeRoundedTheme(state.value.roundedTheme)
    changeWeakMode(state.value.weakMode)
    await changeTheme(state.value.color, state.value.darkMode)
  }
  /**
   * 恢复主题
   */
  function recoverTheme() {
    // 关闭响应式布局
    if (!state.value.responsive) {
      changeResponsive(false)
    }
    // 开启圆角主题
    if (state.value.roundedTheme) {
      changeRoundedTheme(true)
    }
    // 开启色弱模式
    if (state.value.weakMode) {
      changeWeakMode(true)
    }
    // 恢复主题色
    if (state.value.color || state.value.darkMode) {
      changeTheme(state.value.color, state.value.darkMode).catch((e) => {
        console.error(e)
      })
    }
  }
  /**
   * 添加页签或更新页签数据
   * @param data 页签数据
   */
  function tabAdd(data: TabItem) {
    const i = state.value.tabs.findIndex(d => d.key === data.key)
    if (i === -1) {
      setTabs([...state.value.tabs, data])
    }
    else if (data.fullPath !== state.value.tabs[i].fullPath) {
      const temps = [...state.value.tabs]
      temps[i] = data
      setTabs(temps)
    }
  }
  /**
   * 关闭页签
   */
  async function tabRemove({ key, active }: TabItemEventOption): TabRemoveReturn {
    const i = state.value.tabs.findIndex(t => t.key === key || t.fullPath === key)
    if (i === -1) {
      return {}
    }
    const t = state.value.tabs[i]
    if (
      !t.closable
      || (t.home && (state.value.tabs.length === 1 || state.value.fixedHome))
    ) {
      return Promise.reject()
    }
    const path = state.value.tabs[i + (i === 0 ? 1 : -1)]?.fullPath
    setTabs(state.value.tabs.filter((_d, j) => j !== i))
    return t.key === active ? { path, home: !path } : {}
  }
  /**
   * 关闭左侧页签
   */
  async function tabRemoveLeft({ key, active }: TabItemEventOption): TabRemoveReturn {
    let index = -1 // 选中页签的索引
    for (let i = 0; i < state.value.tabs.length; i++) {
      if (state.value.tabs[i].key === active) {
        index = i
      }
      if (state.value.tabs[i].key === key) {
        if (i === 0) {
          break
        }
        const temp = state.value.tabs.filter((d, j) => !d.closable && j < i)
        if (temp.length === i) {
          break
        }
        const path = index === -1 ? void 0 : state.value.tabs[i].fullPath
        setTabs(temp.concat(state.value.tabs.slice(i)))
        return {
          path,
        }
      }
    }
    return Promise.reject()
  }
  /**
   * 关闭右侧页签
   */
  async function tabRemoveRight({ key, active }: TabItemEventOption): TabRemoveReturn {
    let index = -1 // 选中页签的索引
    for (let i = 0; i < state.value.tabs.length; i++) {
      if (state.value.tabs[i].key === active) {
        index = i
      }
      if (state.value.tabs[i].key === key) {
        if (i === state.value.tabs.length - 1) {
          break
        }
        const temp = state.value.tabs.filter((d, j) => !d.closable && j > i)
        if (temp.length === state.value.tabs.length - i - 1) {
          break
        }
        const path = index === -1 ? state.value.tabs[i].fullPath : void 0
        setTabs(state.value.tabs.slice(0, i + 1).concat(temp))
        return {
          path,
        }
      }
    }
    return Promise.reject()
  }
  /**
   * 关闭其它页签
   */
  async function tabRemoveOther({ key, active }: TabItemEventOption): TabRemoveReturn {
    let path: string | undefined // 关闭后跳转的地址
    const temps = state.value.tabs.filter((d) => {
      if (d.key === key) {
        path = d.fullPath
      }
      return !d.closable || d.key === key
    })
    if (temps.length === state.value.tabs.length) {
      return Promise.reject()
    }
    setTabs(temps)
    return key === active ? {} : { path }
  }
  /**
   * 关闭全部页签
   */
  async function tabRemoveAll({ active }: TabItemEventOption): TabRemoveReturn {
    if (state.value.tabs.length === 1 && state.value.tabs[0].home) {
      return Promise.reject()
    }
    const temps = state.value.tabs.filter(
      t => !t.closable || (t.home && state.value.fixedHome),
    )
    if (temps.length === state.value.tabs.length) {
      return Promise.reject()
    }
    const t = active ? state.value.tabs.find(d => d.key === active) : void 0
    const jump = t != null && t.closable === true // 关闭后是否跳转
    if (!temps.length) {
      const h = state.value.tabs.find(d => d.home)
      if (!h) {
        setTabs([])
        return { home: true }
      }
      setTabs([h])
      return { home: t?.home ? void 0 : true }
    }
    setTabs(temps)
    return { path: jump ? temps[0].fullPath : void 0 }
  }
  /**
   * 修改页签
   * @param data 页签数据
   */
  function tabSetItem(data: TabItem) {
    if (!data.key && !data.fullPath) {
      if (!data.path) {
        return
      }
      state.value.tabs.forEach((d) => {
        if (data.path === d.path) {
          tabSetItem({ ...data, key: d.key })
        }
      })
      return
    }
    const k = data.key ? 'key' : 'fullPath'
    const i = state.value.tabs.findIndex(d => data[k] === d[k])
    if (i === -1) {
      return
    }
    const item = { ...state.value.tabs[i] }
    if (data.title) {
      item.title = data.title
    }
    if (typeof data.closable === 'boolean') {
      item.closable = data.closable
    }
    if (typeof data.refresh === 'boolean') {
      item.refresh = data.refresh
    }
    if (data.components) {
      item.components = data.components
    }
    const temps = [...state.value.tabs]
    temps[i] = item
    setTabs(temps)
  }
  /** 修改菜单触发模式 */
  function setMenuItemTrigger(value: MenuItemTrigger) {
    state.value.menuItemTrigger = value
    cacheSetting('menuItemTrigger', value)
  }
  /** 切换圆角主题 */
  function setRoundedTheme(value: boolean) {
    changeRoundedTheme(value)
    state.value.roundedTheme = value
    cacheSetting('roundedTheme', value)
  }
  /** 修改响应式开关 */
  function setResponsive(value: boolean) {
    changeResponsive(value)
    state.value.responsive = value
    cacheSetting('responsive', value)
  }

  return {
    state,
    keepAliveInclude,
    setState,
    setTabs,
    setCollapse,
    setCompact,
    setMaximized,
    setTabBar,
    setLayout,
    setSidebarLayout,
    setHeaderStyle,
    setSidebarStyle,
    setTabStyle,
    setFixedHeader,
    setFixedSidebar,
    setFixedBody,
    setFluid,
    setLogoInHeader,
    setColorfulIcon,
    setUniqueOpened,
    setFixedHome,
    setTabInHeader,
    setTransitionName,
    setContentWidth,
    setWeakMode,
    setDarkMode,
    setColor,
    resetSetting,
    recoverTheme,
    tabAdd,
    tabRemove,
    tabRemoveLeft,
    tabRemoveRight,
    tabRemoveOther,
    tabRemoveAll,
    tabSetItem,
    setMenuItemTrigger,
    setRoundedTheme,
    setResponsive,
  }
})
export default useThemeStore
/**
 * 主题状态类型
 */
export interface ThemeState {
  tabs: TabItem[]
  collapse: boolean
  compact: boolean
  maximized: boolean
  tabBar: boolean
  layout: Layout
  sidebarLayout: SidebarLayout
  headerStyle: HeaderStyle
  sidebarStyle: SidebarStyle
  tabStyle: TabStyle
  fixedHeader: boolean
  fixedSidebar: boolean
  fixedBody: boolean
  fluid: boolean
  logoInHeader: boolean
  colorfulIcon: boolean
  uniqueOpened: boolean
  fixedHome: boolean
  tabInHeader: boolean
  transitionName: string
  weakMode: boolean
  darkMode: boolean
  color: string | null
  contentWidth: number | null
  menuItemTrigger: MenuItemTrigger
  roundedTheme: boolean
  responsive: boolean
  [key: string]: unknown
}

/**
 * 关闭页签返回结果
 */
export interface TabRemoveResult {
  /** 关闭后要跳转的地址 */
  path?: string
  /** 关闭后是否跳转到首页 */
  home?: boolean
}

/**
 * 关闭页签方法返回类型
 */
export type TabRemoveReturn = Promise<TabRemoveResult>
