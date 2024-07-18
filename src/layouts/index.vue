<script setup lang='ts'>
import useMenuStore from '@/store/modules/menu'
import useThemeStore from '@/store/modules/theme'
import useRouteStore from '@/store/modules/route'
import usePageTab from '@/utils/use-page-tab'
import LayoutTool from './components/LayoutTool.vue'
import { REDIRECT_PATH, TAB_KEEP_ALIVE } from '@/config/setting'
import HeaderUser from './components/header-user.vue'
import RouterLayout from './RouterLayout/index.vue'
import Wujie from './Wujie/index.vue'
import {
  Fold,
  Expand,
  RefreshRight,
  Refresh,
  Close,
  Back,
  Right,
  Remove,
  CircleClose,
  Sunny,
  Moon,
} from '@element-plus/icons-vue'

const menuStore = useMenuStore()
const menus = computed(() => menuStore.menus) as any
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
const { push } = useRouter()

const themeStore = useThemeStore()
const routeStore = useRouteStore()
const route = useRoute()

const isWujie = computed(() => route.meta?.isWujie)
/** 布局风格 */
const {
  tabs,
  collapse,
  compact,
  maximized,
  tabBar,
  layout,
  sidebarLayout,
  headerStyle,
  sidebarStyle,
  tabStyle,
  fixedHeader,
  fixedSidebar,
  fixedBody,
  fluid,
  logoInHeader,
  colorfulIcon,
  uniqueOpened,
  fixedHome,
  tabInHeader,
  transitionName,
  weakMode,
  darkMode,
  color,
  contentWidth,
  roundedTheme,
  menuItemTrigger,
  responsive,
} = toRefs(themeStore.state)

/** 页签右键菜单 */
const tabContext = shallowRef([
  {
    title: '刷新当前页签',
    command: 'reload',
    icon: Refresh,
    iconStyle: { transform: 'scale(0.98)' },
  },
  {
    title: '关闭当前页签',
    command: 'close',
    icon: Close,
  },
  {
    title: '关闭左侧页签',
    command: 'left',
    icon: Back,
    divided: true,
  },
  {
    title: '关闭右侧页签',
    command: 'right',
    icon: Right,
  },
  {
    title: '关闭其它页签',
    command: 'other',
    icon: Remove,
    divided: true,
  },
  {
    title: '关闭全部页签',
    command: 'all',
    icon: CircleClose,
  },
])

/** 侧栏折叠切换 */
function updateCollapse(value: boolean) {
  themeStore.setCollapse(value)
}

/** 内容区全屏切换 */
function updateMaximized(value: boolean) {
  themeStore.setMaximized(value)
}

const {
  addPageTab,
  removePageTab,
  removeAllPageTab,
  removeLeftPageTab,
  removeRightPageTab,
  removeOtherPageTab,
  reloadPageTab,
  setPageTabs,
} = usePageTab()

/** 页签点击事件 */
function onTabClick(option: any) {
  const { key, active, item } = option
  const path = item?.fullPath || key
  if (key !== active && path) {
    push(path)
  }
}

/** 页签右键菜单点击事件 */
function onTabContextMenu(option: any) {
  const { command, key, item, active } = option
  if (command === 'reload') {
    reloadPageTab({ fullPath: item?.fullPath || key })
  }
  else if (command === 'close') {
    removePageTab({ key, active })
  }
  else if (command === 'left') {
    removeLeftPageTab({ key, active })
  }
  else if (command === 'right') {
    removeRightPageTab({ key, active })
  }
  else if (command === 'other') {
    removeOtherPageTab({ key, active })
  }
  else if (command === 'all') {
    removeAllPageTab({ key, active })
  }
}
/** 是否全屏 */
const isFullscreen = ref(false)
function checkFullscreen(): boolean {
  return !!(
    document.fullscreenElement
    || (document as any).webkitFullscreenElement
    || (document as any).mozFullScreenElement
    || (document as any).msFullscreenElement
  )
}
/** 内容区尺寸改变事件 */
function onBodySizeChange({ width }: any) {
  themeStore.setContentWidth(width ?? null)
  isFullscreen.value = checkFullscreen()
}
/** 全屏切换 */
function toggleFullscreen() {
  if (isFullscreen.value) {
    exitFullscreen()
    isFullscreen.value = false
    return
  }
  try {
    requestFullscreen()
    isFullscreen.value = true
  }
  catch (e) {
    console.error(e)
    ElMessage.error('您的浏览器不支持全屏模式')
  }
}
/**
 * 退出全屏
 */
function exitFullscreen() {
  const func
    = document.exitFullscreen
    || (document as any).exitFullScreen
    || (document as any).webkitCancelFullScreen
    || (document as any).mozCancelFullScreen
    || (document as any).msExitFullscreen
  func && func.call(document)
}

/**
 * 全屏
 * @param el HTMLElement
 */
function requestFullscreen(el?: HTMLElement) {
  if (el == null) {
    el = document.documentElement
  }
  const func
    = el.requestFullscreen
    || (el as any).requestFullScreen
    || (el as any).webkitRequestFullScreen
    || (el as any).mozRequestFullScreen
    || (el as any).msRequestFullScreen
  if (!func) {
    throw new Error('您的浏览器不支持全屏模式')
  }
  func.call(el)
}

/** 暗黑主题切换开关 */
const darkSwitchRef = ref()

/** 切换暗黑模式 */
function updateDarkMode(isDark: any) {
  if (
    !darkSwitchRef.value
    || typeof document.startViewTransition !== 'function'
  ) {
    themeStore.setDarkMode(isDark)
    return
  }
  const rect = darkSwitchRef.value.$el.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  document
    .startViewTransition(() => themeStore.setDarkMode(isDark))
    .ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        { clipPath: isDark ? clipPath : [...clipPath].reverse() },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)',
        },
      )
    })
}
</script>

<template>
  <ele-pro-layout
    :menus="menus"
    :tabs="tabs"
    :collapse="collapse"
    :compact="compact"
    :maximized="maximized"
    :tab-bar="tabBar ? (tabInHeader ? 'header' : true) : false"
    :breadcrumb="true"
    :layout="layout"
    :sidebar-layout="sidebarLayout"
    :header-style="headerStyle"
    :sidebar-style="sidebarStyle"
    :tab-style="tabStyle"
    :fixed-header="fixedHeader"
    :fixed-sidebar="fixedSidebar"
    :fixed-body="fixedBody"
    :fluid="fluid"
    :logo-in-header="logoInHeader"
    :colorful-icon="colorfulIcon"
    :unique-opened="uniqueOpened"
    :fixed-home="fixedHome"
    :home-path="routeStore.homePath"
    :redirect-path="REDIRECT_PATH"
    :tab-sortable="true"
    :tab-context-menu="{
      iconProps: { size: 15 },
      popperOptions: { strategy: 'fixed' },
    }"
    :tab-context-menus="tabContext"
    :nav-trigger="layout === 'top' ? void 0 : menuItemTrigger"
    :box-trigger="menuItemTrigger"
    :keep-alive="TAB_KEEP_ALIVE"
    :transition-name="transitionName"
    @update:collapse="updateCollapse"
    @update:maximized="updateMaximized"
    @tab-add="addPageTab"
    @tab-click="onTabClick"
    @tab-remove="removePageTab"
    @tab-context-menu="onTabContextMenu"
    @tab-sort-change="setPageTabs"
    @body-size-change="onBodySizeChange"
  >
    <template #default>
      <RouterLayout v-if="!isWujie" />
      <Wujie />
    </template>
    <!-- logo -->
    <template #logo>
      <img src="@/assets/icons/logo.svg" style="width: 30px; height: 30px;">
    </template>
    <!-- 系统名称 -->
    <template #logoTitle>
      <h1>{{ VITE_APP_TITLE }}</h1>
    </template>
    <!-- 顶栏左侧按钮 -->
    <template #left="{ sidebar }">
      <!-- 折叠侧栏 -->
      <LayoutTool v-if="sidebar" @click="updateCollapse(!collapse)">
        <el-icon>
          <Expand v-if="collapse" />
          <Fold v-else />
        </el-icon>
      </LayoutTool>
      <!-- 刷新 -->
      <LayoutTool
        v-if="layout !== 'top' && layout !== 'mix' && !(tabBar && tabInHeader)"
        class="hidden-sm-and-down"
        @click="reloadPageTab()"
      >
        <el-icon>
          <RefreshRight />
        </el-icon>
      </LayoutTool>
    </template>
    <!-- 顶栏右侧按钮 -->
    <template #right>
      <!-- 全屏切换 -->
      <LayoutTool class="hidden-sm-and-down" @click="toggleFullscreen">
        <el-icon style="transform: scale(1.18);">
          <CompressOutlined v-if="isFullscreen" style="stroke-width: 4;" />
          <ExpandOutlined v-else style="stroke-width: 4;" />
        </el-icon>
      </LayoutTool>
      <!-- 夜间模式 -->
      <LayoutTool ref="darkSwitchRef" class="dark-switch">
        <el-switch
          :active-action-icon="Moon"
          :inactive-action-icon="Sunny"
          :model-value="darkMode"
          @update:model-value="updateDarkMode"
        />
      </LayoutTool>
      <!-- 用户信息 -->
      <LayoutTool>
        <HeaderUser />
      </LayoutTool>
    </template>
    <!-- 菜单图标 -->
    <template #icon="{ icon, item }">
      <SvgIcon :name="icon" size="18px" class="m-r-[5px]" />
    </template>
    <!-- 页签标题 -->
    <template #tabTitle="{ label, item }">
      <div class="flex items-center">
        <SvgIcon v-if="item.meta.icon" :name="item.meta.icon" size="16px" />
        <span :style="item.meta?.icon ? { paddingLeft: '4px' } : {}">
          {{ label }}
        </span>
      </div>
    </template>
  </ele-pro-layout>
</template>

<style scoped lang='scss'></style>
