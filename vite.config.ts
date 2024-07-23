import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default async ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const alias = {
    '@': path.resolve(__dirname, 'src'),
    '#': path.resolve(__dirname, 'src/types'),
  }
  if (command === 'build') {
    alias['./as-needed'] = './global-import'
  }
  return defineConfig({
    // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
    base: env.VITE_PUBLIC_PATH,
    server: {
      host: true,
      port: 9999,
      open: true,
      proxy: {
        '/proxy': {
          target: 'http://192.168.11.91:30397',
          ws: true,
          rewrite: path => path.replace(/^\/proxy/, '/'),
        },
      },
    },
    // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
    build: {
      sourcemap: true,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        // 静态资源分类打包
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/element-plus/light.scss" as *;`,
        },
      },
    },
  })
}
