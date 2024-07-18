import components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { EleAdminResolver } from 'ele-admin-plus/es/utils/resolvers'

export default function createComponents() {
  return components({
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
    dirs: [
      'src/components',
    ],
    resolvers: [
      // Element 组件按需引入
      ElementPlusResolver({
        importStyle: 'sass',
      }),
      // EleAdminPlus 组件按需引入
      EleAdminResolver({
        importStyle: 'sass',
        path: '/es/core',
      }),
    ],
  })
}
