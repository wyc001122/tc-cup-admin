<!-- 路由出口 -->
<script lang="ts" setup>
import useThemeStore from '@/store/modules/theme'
import { TAB_KEEP_ALIVE } from '@/config/setting'

const themeStore = useThemeStore()
const {
  tabBar,
  transitionName,
} = toRefs(themeStore.state)
</script>

<script lang="ts">
export default {
  name: 'RouterLayout',
}
</script>

<template>
  <router-view v-slot="{ route, Component }">
    <transition :name="transitionName" mode="out-in" appear>
      <keep-alive v-if="TAB_KEEP_ALIVE && tabBar" :include="themeStore.keepAliveInclude" :max="10">
        <component :is="Component" :key="route.path" />
      </keep-alive>
      <component :is="Component" v-else :key="route.path" />
    </transition>
  </router-view>
</template>
