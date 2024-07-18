<script setup lang='ts'>
import useRouteStore from '@/store/modules/route'
import useThemeStore from '@/store/modules/theme'

const themeStore = useThemeStore()
const route = useRoute()
const router = useRouter()
const routeStore = useRouteStore()
function goBack() {
  router.push(routeStore.homePath)
}

const data = ref({
  inter: Number.NaN,
  countdown: 5,
})

onBeforeRouteLeave(() => {
  data.value.inter && window.clearInterval(data.value.inter)
})

onMounted(() => {
  data.value.inter = window.setInterval(() => {
    data.value.countdown--
    if (data.value.countdown === 0) {
      data.value.inter && window.clearInterval(data.value.inter)
      if (themeStore.state.tabBar) {
        themeStore.tabRemove({
          key: route.path,
        })
      }
      goBack()
    }
  }, 1000)
})
</script>

<template>
  <div class="absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg:flex-row -translate-x-50% -translate-y-50% lg:gap-12">
    <SvgIcon name="404" class="text-[300px] lg:text-[400px]" />
    <div class="flex flex-col gap-4">
      <h1 class="m-0 text-6xl font-sans">
        404
      </h1>
      <div class="desc mx-0 text-xl text-stone-5">
        抱歉，你访问的页面不存在
      </div>
      <div>
        <el-button @click="goBack">
          {{ data.countdown }} 秒后，返回首页
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
