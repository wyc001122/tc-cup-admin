<script setup lang="ts">
import WujieVue from 'wujie-vue3'
import useUserStore from '@/store/modules/user'
import { getMicroViewAppInfo } from './microViewApp'

defineOptions({
  name: 'MicroView',
})

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const metaUrl: any = computed(() => route.meta.isWujie)
const microViewAppInfo: any = computed(() => getMicroViewAppInfo(metaUrl.value))

const isWujie = computed(() => {
  if (microViewAppInfo.value) {
    const { port } = microViewAppInfo.value
    if (import.meta.env.MODE === 'development') {
      return `http://localhost:${port}${metaUrl.value}`
    }
    else {
      return `${location.origin}${metaUrl.value}`
    }
  }
  else {
    return ''
  }
})

watch(
  route,
  (value) => {
    const src = value.meta.isWujie || ''
    WujieVue.bus.$emit('sys-router-change', src)
  },
  {
    immediate: true,
  },
)

function logOut() {
  userStore.logout()
}

// TODO:子应用通过通知来改变父应用的路由
function changeParentRoute(fullPath: string) {
  // TODO:待完善
  router.replace(fullPath)
}

onMounted(() => {
  WujieVue.bus.$on('changeParentRoute', changeParentRoute)
  WujieVue.bus.$on('logOut', logOut)
})

onUnmounted(() => {
  WujieVue.bus.$off('changeParentRoute', changeParentRoute)
  WujieVue.bus.$off('logOut', logOut)
})
</script>

<template>
  <div v-if="isWujie" class="frame">
    <WujieVue
      :props="{
        route, router,
      }"
      :name="microViewAppInfo.name"
      :url="isWujie"
      :sync="true"
      class="frame-iframe"
      width="100%"
    />
  </div>
</template>

<style lang="scss" scoped>
.frame {
  z-index: 998;
  height: 100%;

  .frame-iframe {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    // overflow: hidden;
    border: 0;
  }
}
</style>
