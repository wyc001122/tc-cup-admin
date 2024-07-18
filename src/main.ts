import App from './App.vue'
import pinia from './store'
import router from './router'
import { createApp } from 'vue'
// 全局样式
import '@/assets/styles/index.scss'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
// 动画库
import { MotionPlugin } from '@vueuse/motion'

// 引入 VXE
import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

// vue3
import WujieVue from 'wujie-vue3'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'
import { setupAllApp } from '@/layouts/Wujie/microViewApp'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(MotionPlugin)

app.use(WujieVue)
app.use(VxeTable)
app.use(VxeUI)

if (icons.isOfflineUse) {
  for (const info of icons.collections) {
    downloadAndInstall(info)
  }
}
setupAllApp()

app.mount('#app')
