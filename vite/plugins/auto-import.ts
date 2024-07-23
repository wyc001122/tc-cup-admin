import autoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { EleAdminResolver } from 'ele-admin-plus/es/utils/resolvers'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
    dts: './src/types/auto-imports.d.ts',
    dirs: [
      './src/hooks/composables/**',
    ],
    resolvers: [
      // Element 组件按需引入
      ElementPlusResolver(),
      // EleAdminPlus 组件按需引入
      EleAdminResolver({
        importStyle: 'sass',
        path: '/es/core',
      }),
    ],
  })
}
