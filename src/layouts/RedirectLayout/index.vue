<!-- 路由刷新页面 -->
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import useThemeStore from '@/store/modules/theme'

const { replace } = useRouter()
const { params, query } = useRoute()
const themeStore = useThemeStore()
const {
  tabs,
} = toRefs(themeStore.state)

const from = Array.isArray(params.path) ? params.path.join('/') : params.path

setTimeout(() => {
  tabs.value.forEach((t) => {
    if (t.refresh) {
      themeStore.tabSetItem({ key: t.key, refresh: false })
    }
  })
  replace({ path: `/${from}`, query })
}, 100)
</script>

<script lang="ts">
export default {
  name: 'RedirectLayout',
}
</script>

<template>
  <div />
</template>
