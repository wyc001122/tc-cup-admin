<script setup lang='ts'>
import type { TableGlobalConfig } from 'ele-admin-plus/es/ele-config-provider/types'
import useThemeStore from '@/store/modules/theme'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const tableConfig = ref<TableGlobalConfig>({
  response: {
    // dataName: 'list',
    // countName: 'count',
  },
  tools: ['reload', 'export', 'print', 'size', 'columns', 'maximized'],
})

const LICENSE_CODE = 'dk9mcwJyetRWQlxWRiojIiwiIzVHbQ5Wa6ICdjVmaiV3culWYt9GZiwSMl5yc1xGciojIj5ibp1GZhVGb6ICZpJCLi02bzxEcwYVRYhjIvl2cyVmdiwiIgIiMuEjI6IibQf0NW=='

/** 恢复缓存主题 */
const themeStore = useThemeStore()
themeStore.recoverTheme()
</script>

<template>
  <el-config-provider :button="{ autoInsertSpace: true }" :locale="zhCn">
    <ele-config-provider
      :table="tableConfig"
      :license="LICENSE_CODE"
    >
      <ele-app>
        <router-view />
      </ele-app>
    </ele-config-provider>
  </el-config-provider>
</template>

<style  lang='scss'>
#app {
  height: 100%;
}
</style>
