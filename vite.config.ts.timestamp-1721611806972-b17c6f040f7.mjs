// vite.config.ts
import path2 from "node:path";
import process2 from "node:process";
import { defineConfig, loadEnv } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10_sass@1.77.6_terser@5.31.1/node_modules/vite/dist/node/index.js";

// vite/plugins/index.ts
import vue from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_terser@5.31.1__vue@3.4.31_typescript@5.5.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_terser@5.31.1__vue@3.4.31_typescript@5.5.3_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueLegacy from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.1_terser@5.31.1_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_terser@5.31.1_/node_modules/@vitejs/plugin-legacy/dist/index.mjs";

// vite/plugins/app-info.ts
import boxen from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/boxen@7.1.1/node_modules/boxen/index.js";
import picocolors from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/picocolors@1.0.1/node_modules/picocolors/picocolors.js";
function appInfo() {
  return {
    name: "appInfo",
    apply: "serve",
    async buildStart() {
      const { bold, green, bgGreen } = picocolors;
      console.log(
        boxen(
          `${bold(green(`${bgGreen("tc-cup-admin")} \u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF`))}`,
          {
            padding: 1,
            margin: 1,
            borderStyle: "double",
            textAlignment: "center"
          }
        )
      );
    }
  };
}

// vite/plugins/auto-import.ts
import autoImport from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/unplugin-auto-import@0.17.6_@nuxt+kit@3.12.3_rollup@4.18.0__@vueuse+core@10.11.0_vue@3.4.31_t_wuro7c4h3h54vy74kzgvpmdhqm/node_modules/unplugin-auto-import/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.7_@nuxt+kit@3.12.3_rollup@4.18.0__rollup@4._3hjfmqhakhx7pm26goyhj6wigy/node_modules/unplugin-vue-components/dist/resolvers.js";
import { EleAdminResolver } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/ele-admin-plus@1.2.0_element-plus@2.7.6_vue@3.4.31_typescript@5.5.3___vue@3.4.31_typescript@5.5.3_/node_modules/ele-admin-plus/es/utils/resolvers.js";
function createAutoImport() {
  return autoImport({
    imports: [
      "vue",
      "vue-router",
      "pinia"
    ],
    dts: "./src/types/auto-imports.d.ts",
    dirs: [
      "./src/hooks/composables/**"
    ],
    resolvers: [
      // Element 组件按需引入
      ElementPlusResolver(),
      // EleAdminPlus 组件按需引入
      EleAdminResolver({
        importStyle: "sass",
        path: "/es/core"
      })
    ]
  });
}

// vite/plugins/components.ts
import components from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.7_@nuxt+kit@3.12.3_rollup@4.18.0__rollup@4._3hjfmqhakhx7pm26goyhj6wigy/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver as ElementPlusResolver2 } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.7_@nuxt+kit@3.12.3_rollup@4.18.0__rollup@4._3hjfmqhakhx7pm26goyhj6wigy/node_modules/unplugin-vue-components/dist/resolvers.js";
import { EleAdminResolver as EleAdminResolver2 } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/ele-admin-plus@1.2.0_element-plus@2.7.6_vue@3.4.31_typescript@5.5.3___vue@3.4.31_typescript@5.5.3_/node_modules/ele-admin-plus/es/utils/resolvers.js";
function createComponents() {
  return components({
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: "./src/types/components.d.ts",
    dirs: [
      "src/components"
    ],
    resolvers: [
      // Element 组件按需引入
      ElementPlusResolver2(),
      // EleAdminPlus 组件按需引入
      EleAdminResolver2({
        importStyle: "sass",
        path: "/es/core"
      })
    ]
  });
}

// vite/plugins/unocss.ts
import Unocss from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/unocss@0.59.4_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_terser@5.31.1_/node_modules/unocss/dist/vite.mjs";
function createUnocss() {
  return Unocss();
}

// vite/plugins/svg-icon.ts
import path from "node:path";
import process from "node:process";
import { createSvgIconsPlugin } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_terser@5.31.1_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/")],
    symbolId: "icon-[dir]-[name]",
    svgoOptions: isBuild
  });
}

// vite/plugins/compression.ts
import { compression } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/vite-plugin-compression2@1.1.2_rollup@4.18.0/node_modules/vite-plugin-compression2/dist/index.mjs";
function createCompression(env, isBuild) {
  const plugin = [];
  if (isBuild) {
    const { VITE_BUILD_COMPRESS } = env;
    const compressList = VITE_BUILD_COMPRESS.split(",");
    if (compressList.includes("gzip")) {
      plugin.push(
        compression()
      );
    }
    if (compressList.includes("brotli")) {
      plugin.push(
        compression({
          exclude: [/\.(br)$/, /\.(gz)$/],
          algorithm: "brotliCompress"
        })
      );
    }
  }
  return plugin;
}

// vite/plugins/console.ts
import TurboConsole from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/unplugin-turbo-console@1.8.9_@nuxt+kit@3.12.3_rollup@4.18.0__@nuxt+schema@3.12.3_rollup@4.18._xwztbuqwqh4j6ovzvo4ibqrrsm/node_modules/unplugin-turbo-console/dist/vite.js";
function createConsole() {
  return TurboConsole();
}

// vite/plugins/banner.ts
import banner from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/vite-plugin-banner@0.7.1/node_modules/vite-plugin-banner/dist/index.mjs";
function createBanner() {
  return banner(`
/**
 * \u7531 tc-admin \u63D0\u4F9B\u6280\u672F\u652F\u6301
 * Powered by tc-admin
 */
`);
}

// vite/plugins/codeInspectorPlugin.ts
import { codeInspectorPlugin } from "file:///C:/Users/49804/Desktop/tc-admin/node_modules/.pnpm/code-inspector-plugin@0.12.2/node_modules/code-inspector-plugin/dist/index.mjs";
function createCodeInspectorPlugin() {
  return codeInspectorPlugin({
    bundler: "vite"
  });
}

// vite/plugins/index.ts
function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [
    appInfo(),
    vue(),
    vueJsx(),
    vueLegacy({
      renderLegacyChunks: false,
      modernPolyfills: [
        "es.array.at",
        "es.array.find-last"
      ]
    })
  ];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  vitePlugins.push(createUnocss());
  vitePlugins.push(createSvgIcon(isBuild));
  vitePlugins.push(...createCompression(viteEnv, isBuild));
  vitePlugins.push(createConsole());
  vitePlugins.push(createBanner());
  vitePlugins.push(createCodeInspectorPlugin());
  return vitePlugins;
}

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\49804\\Desktop\\tc-admin";
var vite_config_default = async ({ mode, command }) => {
  const env = loadEnv(mode, process2.cwd());
  const alias = {
    "@": path2.resolve(__vite_injected_original_dirname, "src"),
    "#": path2.resolve(__vite_injected_original_dirname, "src/types")
  };
  if (command === "build") {
    alias["./as-needed"] = "./global-import";
  }
  return defineConfig({
    // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
    base: env.VITE_PUBLIC_PATH,
    server: {
      host: true,
      port: 9999,
      open: true,
      cors: true,
      proxy: {
        "/proxy": {
          target: "http://192.168.11.91:30397",
          ws: true,
          rewrite: (path3) => path3.replace(/^\/proxy/, "/")
        },
        "/web/bdp/": {
          target: "http://192.168.11.91:30397",
          ws: true,
          rewrite: (path3) => path3.replace(/^\/web\/bdp/, "/web/bdp/")
        }
      }
    },
    // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
    build: {
      sourcemap: true,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 5e3,
      rollupOptions: {
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    plugins: createVitePlugins(env, command === "build"),
    resolve: {
      alias
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/element-plus/light.scss" as *;`
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS9wbHVnaW5zL2luZGV4LnRzIiwgInZpdGUvcGx1Z2lucy9hcHAtaW5mby50cyIsICJ2aXRlL3BsdWdpbnMvYXV0by1pbXBvcnQudHMiLCAidml0ZS9wbHVnaW5zL2NvbXBvbmVudHMudHMiLCAidml0ZS9wbHVnaW5zL3Vub2Nzcy50cyIsICJ2aXRlL3BsdWdpbnMvc3ZnLWljb24udHMiLCAidml0ZS9wbHVnaW5zL2NvbXByZXNzaW9uLnRzIiwgInZpdGUvcGx1Z2lucy9jb25zb2xlLnRzIiwgInZpdGUvcGx1Z2lucy9iYW5uZXIudHMiLCAidml0ZS9wbHVnaW5zL2NvZGVJbnNwZWN0b3JQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy80OTgwNC9EZXNrdG9wL3RjLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCBjcmVhdGVWaXRlUGx1Z2lucyBmcm9tICcuL3ZpdGUvcGx1Z2lucydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IG1vZGUsIGNvbW1hbmQgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpXG4gIGNvbnN0IGFsaWFzID0ge1xuICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgICcjJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy90eXBlcycpLFxuICB9XG4gIGlmIChjb21tYW5kID09PSAnYnVpbGQnKSB7XG4gICAgYWxpYXNbJy4vYXMtbmVlZGVkJ10gPSAnLi9nbG9iYWwtaW1wb3J0J1xuICB9XG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIC8vIFx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1OTAwOVx1OTg3OSBodHRwczovL2NuLnZpdGVqcy5kZXYvY29uZmlnLyNzZXJ2ZXItb3B0aW9uc1xuICAgIGJhc2U6IGVudi5WSVRFX1BVQkxJQ19QQVRILFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogdHJ1ZSxcbiAgICAgIHBvcnQ6IDk5OTksXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgY29yczogdHJ1ZSxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgICcvcHJveHknOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzE5Mi4xNjguMTEuOTE6MzAzOTcnLFxuICAgICAgICAgIHdzOiB0cnVlLFxuICAgICAgICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvcHJveHkvLCAnLycpLFxuICAgICAgICB9LFxuICAgICAgICAnL3dlYi9iZHAvJzoge1xuICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xOTIuMTY4LjExLjkxOjMwMzk3JyxcbiAgICAgICAgICB3czogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL3dlYlxcL2JkcC8sICcvd2ViL2JkcC8nKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBcdTY3ODRcdTVFRkFcdTkwMDlcdTk4NzkgaHR0cHM6Ly9jbi52aXRlanMuZGV2L2NvbmZpZy8jc2VydmVyLWZzc2VydmUtcm9vdFxuICAgIGJ1aWxkOiB7XG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAvLyBcdTZEODhcdTk2NjRcdTYyNTNcdTUzMDVcdTU5MjdcdTVDMEZcdThEODVcdThGQzc1MDBrYlx1OEI2Nlx1NTQ0QVxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAwLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUyMDZcdTdDN0JcdTYyNTNcdTUzMDVcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdzdGF0aWMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnMoZW52LCBjb21tYW5kID09PSAnYnVpbGQnKSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhcyxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAdXNlIFwiQC9hc3NldHMvc3R5bGVzL2VsZW1lbnQtcGx1cy9saWdodC5zY3NzXCIgYXMgKjtgLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNDk4MDRcXFxcRGVza3RvcFxcXFx0Yy1hZG1pblxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzQ5ODA0L0Rlc2t0b3AvdGMtYWRtaW4vdml0ZS9wbHVnaW5zL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgdnVlTGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSdcbmltcG9ydCBhcHBJbmZvIGZyb20gJy4vYXBwLWluZm8nXG5cbmltcG9ydCBjcmVhdGVBdXRvSW1wb3J0IGZyb20gJy4vYXV0by1pbXBvcnQnXG5pbXBvcnQgY3JlYXRlQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgY3JlYXRlVW5vY3NzIGZyb20gJy4vdW5vY3NzJ1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi9zdmctaWNvbidcbmltcG9ydCBjcmVhdGVDb21wcmVzc2lvbiBmcm9tICcuL2NvbXByZXNzaW9uJ1xuaW1wb3J0IGNyZWF0ZUNvbnNvbGUgZnJvbSAnLi9jb25zb2xlJ1xuaW1wb3J0IGNyZWF0ZUJhbm5lciBmcm9tICcuL2Jhbm5lcidcbmltcG9ydCBjcmVhdGVDb2RlSW5zcGVjdG9yUGx1Z2luIGZyb20gJy4vY29kZUluc3BlY3RvclBsdWdpbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudiwgaXNCdWlsZCA9IGZhbHNlKSB7XG4gIGNvbnN0IHZpdGVQbHVnaW5zOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPSBbXG4gICAgYXBwSW5mbygpLFxuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZ1ZUxlZ2FjeSh7XG4gICAgICByZW5kZXJMZWdhY3lDaHVua3M6IGZhbHNlLFxuICAgICAgbW9kZXJuUG9seWZpbGxzOiBbXG4gICAgICAgICdlcy5hcnJheS5hdCcsXG4gICAgICAgICdlcy5hcnJheS5maW5kLWxhc3QnLFxuICAgICAgXSxcbiAgICB9KSxcbiAgXVxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUF1dG9JbXBvcnQoKSlcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVDb21wb25lbnRzKCkpXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlVW5vY3NzKCkpXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlU3ZnSWNvbihpc0J1aWxkKSlcbiAgdml0ZVBsdWdpbnMucHVzaCguLi5jcmVhdGVDb21wcmVzc2lvbih2aXRlRW52LCBpc0J1aWxkKSlcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVDb25zb2xlKCkpXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlQmFubmVyKCkpXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlQ29kZUluc3BlY3RvclBsdWdpbigpKVxuXG4gIHJldHVybiB2aXRlUGx1Z2luc1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNDk4MDRcXFxcRGVza3RvcFxcXFx0Yy1hZG1pblxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcYXBwLWluZm8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzQ5ODA0L0Rlc2t0b3AvdGMtYWRtaW4vdml0ZS9wbHVnaW5zL2FwcC1pbmZvLnRzXCI7aW1wb3J0IGJveGVuIGZyb20gJ2JveGVuJ1xuaW1wb3J0IHBpY29jb2xvcnMgZnJvbSAncGljb2NvbG9ycydcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwSW5mbygpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdhcHBJbmZvJyxcbiAgICBhcHBseTogJ3NlcnZlJyxcbiAgICBhc3luYyBidWlsZFN0YXJ0KCkge1xuICAgICAgY29uc3QgeyBib2xkLCBncmVlbiwgYmdHcmVlbiB9ID0gcGljb2NvbG9yc1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYm94ZW4oXG4gICAgICAgICAgYCR7Ym9sZChncmVlbihgJHtiZ0dyZWVuKCd0Yy1jdXAtYWRtaW4nKX0gXHU1NDBFXHU1M0YwXHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGYCkpfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZzogMSxcbiAgICAgICAgICAgIG1hcmdpbjogMSxcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiAnZG91YmxlJyxcbiAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICApXG4gICAgfSxcbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNDk4MDRcXFxcRGVza3RvcFxcXFx0Yy1hZG1pblxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcYXV0by1pbXBvcnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzQ5ODA0L0Rlc2t0b3AvdGMtYWRtaW4vdml0ZS9wbHVnaW5zL2F1dG8taW1wb3J0LnRzXCI7aW1wb3J0IGF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgeyBFbGVBZG1pblJlc29sdmVyIH0gZnJvbSAnZWxlLWFkbWluLXBsdXMvZXMvdXRpbHMvcmVzb2x2ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBdXRvSW1wb3J0KCkge1xuICByZXR1cm4gYXV0b0ltcG9ydCh7XG4gICAgaW1wb3J0czogW1xuICAgICAgJ3Z1ZScsXG4gICAgICAndnVlLXJvdXRlcicsXG4gICAgICAncGluaWEnLFxuICAgIF0sXG4gICAgZHRzOiAnLi9zcmMvdHlwZXMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgIGRpcnM6IFtcbiAgICAgICcuL3NyYy9ob29rcy9jb21wb3NhYmxlcy8qKicsXG4gICAgXSxcbiAgICByZXNvbHZlcnM6IFtcbiAgICAgIC8vIEVsZW1lbnQgXHU3RUM0XHU0RUY2XHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1XG4gICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXG4gICAgICAvLyBFbGVBZG1pblBsdXMgXHU3RUM0XHU0RUY2XHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1XG4gICAgICBFbGVBZG1pblJlc29sdmVyKHtcbiAgICAgICAgaW1wb3J0U3R5bGU6ICdzYXNzJyxcbiAgICAgICAgcGF0aDogJy9lcy9jb3JlJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDQ5ODA0XFxcXERlc2t0b3BcXFxcdGMtYWRtaW5cXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxjb21wb25lbnRzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy80OTgwNC9EZXNrdG9wL3RjLWFkbWluL3ZpdGUvcGx1Z2lucy9jb21wb25lbnRzLnRzXCI7aW1wb3J0IGNvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgeyBFbGVBZG1pblJlc29sdmVyIH0gZnJvbSAnZWxlLWFkbWluLXBsdXMvZXMvdXRpbHMvcmVzb2x2ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnRzKCkge1xuICByZXR1cm4gY29tcG9uZW50cyh7XG4gICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC50c3gkL10sXG4gICAgZHRzOiAnLi9zcmMvdHlwZXMvY29tcG9uZW50cy5kLnRzJyxcbiAgICBkaXJzOiBbXG4gICAgICAnc3JjL2NvbXBvbmVudHMnLFxuICAgIF0sXG4gICAgcmVzb2x2ZXJzOiBbXG4gICAgICAvLyBFbGVtZW50IFx1N0VDNFx1NEVGNlx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVxuICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgLy8gRWxlQWRtaW5QbHVzIFx1N0VDNFx1NEVGNlx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVxuICAgICAgRWxlQWRtaW5SZXNvbHZlcih7XG4gICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycsXG4gICAgICAgIHBhdGg6ICcvZXMvY29yZScsXG4gICAgICB9KSxcbiAgICBdLFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNDk4MDRcXFxcRGVza3RvcFxcXFx0Yy1hZG1pblxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcdW5vY3NzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy80OTgwNC9EZXNrdG9wL3RjLWFkbWluL3ZpdGUvcGx1Z2lucy91bm9jc3MudHNcIjtpbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVVbm9jc3MoKSB7XG4gIHJldHVybiBVbm9jc3MoKVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNDk4MDRcXFxcRGVza3RvcFxcXFx0Yy1hZG1pblxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcc3ZnLWljb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzQ5ODA0L0Rlc2t0b3AvdGMtYWRtaW4vdml0ZS9wbHVnaW5zL3N2Zy1pY29uLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0ljb24oaXNCdWlsZCkge1xuICByZXR1cm4gY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zLycpXSxcbiAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICBzdmdvT3B0aW9uczogaXNCdWlsZCxcbiAgfSlcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNDk4MDRcXFxcRGVza3RvcFxcXFx0Yy1hZG1pblxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDQ5ODA0XFxcXERlc2t0b3BcXFxcdGMtYWRtaW5cXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGNvbXByZXNzaW9uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy80OTgwNC9EZXNrdG9wL3RjLWFkbWluL3ZpdGUvcGx1Z2lucy9jb21wcmVzc2lvbi50c1wiO2ltcG9ydCB7IGNvbXByZXNzaW9uIH0gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24yJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb21wcmVzc2lvbihlbnYsIGlzQnVpbGQpIHtcbiAgY29uc3QgcGx1Z2luOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPSBbXVxuICBpZiAoaXNCdWlsZCkge1xuICAgIGNvbnN0IHsgVklURV9CVUlMRF9DT01QUkVTUyB9ID0gZW52XG4gICAgY29uc3QgY29tcHJlc3NMaXN0ID0gVklURV9CVUlMRF9DT01QUkVTUy5zcGxpdCgnLCcpXG4gICAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcygnZ3ppcCcpKSB7XG4gICAgICBwbHVnaW4ucHVzaChcbiAgICAgICAgY29tcHJlc3Npb24oKSxcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcygnYnJvdGxpJykpIHtcbiAgICAgIHBsdWdpbi5wdXNoKFxuICAgICAgICBjb21wcmVzc2lvbih7XG4gICAgICAgICAgZXhjbHVkZTogWy9cXC4oYnIpJC8sIC9cXC4oZ3opJC9dLFxuICAgICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcbiAgICAgICAgfSksXG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiBwbHVnaW5cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNDk4MDRcXFxcRGVza3RvcFxcXFx0Yy1hZG1pblxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDQ5ODA0XFxcXERlc2t0b3BcXFxcdGMtYWRtaW5cXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGNvbnNvbGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzQ5ODA0L0Rlc2t0b3AvdGMtYWRtaW4vdml0ZS9wbHVnaW5zL2NvbnNvbGUudHNcIjtpbXBvcnQgVHVyYm9Db25zb2xlIGZyb20gJ3VucGx1Z2luLXR1cmJvLWNvbnNvbGUvdml0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29uc29sZSgpIHtcbiAgcmV0dXJuIFR1cmJvQ29uc29sZSgpXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDQ5ODA0XFxcXERlc2t0b3BcXFxcdGMtYWRtaW5cXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxiYW5uZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzQ5ODA0L0Rlc2t0b3AvdGMtYWRtaW4vdml0ZS9wbHVnaW5zL2Jhbm5lci50c1wiO2ltcG9ydCBiYW5uZXIgZnJvbSAndml0ZS1wbHVnaW4tYmFubmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCYW5uZXIoKSB7XG4gIHJldHVybiBiYW5uZXIoYFxuLyoqXG4gKiBcdTc1MzEgdGMtYWRtaW4gXHU2M0QwXHU0RjlCXHU2MjgwXHU2NzJGXHU2NTJGXHU2MzAxXG4gKiBQb3dlcmVkIGJ5IHRjLWFkbWluXG4gKi9cbmApXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDQ5ODA0XFxcXERlc2t0b3BcXFxcdGMtYWRtaW5cXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0OTgwNFxcXFxEZXNrdG9wXFxcXHRjLWFkbWluXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxjb2RlSW5zcGVjdG9yUGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy80OTgwNC9EZXNrdG9wL3RjLWFkbWluL3ZpdGUvcGx1Z2lucy9jb2RlSW5zcGVjdG9yUGx1Z2luLnRzXCI7aW1wb3J0IHsgY29kZUluc3BlY3RvclBsdWdpbiB9IGZyb20gJ2NvZGUtaW5zcGVjdG9yLXBsdWdpbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29kZUluc3BlY3RvclBsdWdpbigpIHtcbiAgcmV0dXJuIGNvZGVJbnNwZWN0b3JQbHVnaW4oe1xuICAgIGJ1bmRsZXI6ICd2aXRlJyxcbiAgfSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVIsT0FBT0EsV0FBVTtBQUMxUyxPQUFPQyxjQUFhO0FBQ3BCLFNBQVMsY0FBYyxlQUFlOzs7QUNEdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7OztBQ0h3UyxPQUFPLFdBQVc7QUFDaFYsT0FBTyxnQkFBZ0I7QUFHUixTQUFSLFVBQW1DO0FBQ3hDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE1BQU0sYUFBYTtBQUNqQixZQUFNLEVBQUUsTUFBTSxPQUFPLFFBQVEsSUFBSTtBQUVqQyxjQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsR0FBRyxLQUFLLE1BQU0sR0FBRyxRQUFRLGNBQWMsQ0FBQyx1Q0FBUyxDQUFDLENBQUM7QUFBQSxVQUNuRDtBQUFBLFlBQ0UsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsYUFBYTtBQUFBLFlBQ2IsZUFBZTtBQUFBLFVBQ2pCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUN4Qm9VLE9BQU8sZ0JBQWdCO0FBQzNWLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsd0JBQXdCO0FBRWxCLFNBQVIsbUJBQW9DO0FBQ3pDLFNBQU8sV0FBVztBQUFBLElBQ2hCLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsSUFDTCxNQUFN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Q0FBQztBQUU1QyxTQUFPO0FBQ1Q7OztBRHRDQSxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLE9BQU8sRUFBRSxNQUFNLFFBQVEsTUFBTTtBQUMxQyxRQUFNLE1BQU0sUUFBUSxNQUFNQyxTQUFRLElBQUksQ0FBQztBQUN2QyxRQUFNLFFBQVE7QUFBQSxJQUNaLEtBQUtDLE1BQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDbEMsS0FBS0EsTUFBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxFQUMxQztBQUNBLE1BQUksWUFBWSxTQUFTO0FBQ3ZCLFVBQU0sYUFBYSxJQUFJO0FBQUEsRUFDekI7QUFDQSxTQUFPLGFBQWE7QUFBQTtBQUFBLElBRWxCLE1BQU0sSUFBSTtBQUFBLElBQ1YsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsVUFBVTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1IsSUFBSTtBQUFBLFVBQ0osU0FBUyxDQUFBQSxVQUFRQSxNQUFLLFFBQVEsWUFBWSxHQUFHO0FBQUEsUUFDL0M7QUFBQSxRQUNBLGFBQWE7QUFBQSxVQUNYLFFBQVE7QUFBQSxVQUNSLElBQUk7QUFBQSxVQUNKLFNBQVMsQ0FBQUEsVUFBUUEsTUFBSyxRQUFRLGVBQWUsV0FBVztBQUFBLFFBQzFEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsT0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBO0FBQUEsTUFFWCx1QkFBdUI7QUFBQSxNQUN2QixlQUFlO0FBQUE7QUFBQSxRQUViLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsa0JBQWtCLEtBQUssWUFBWSxPQUFPO0FBQUEsSUFDbkQsU0FBUztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbInBhdGgiLCAicHJvY2VzcyIsICJFbGVtZW50UGx1c1Jlc29sdmVyIiwgIkVsZUFkbWluUmVzb2x2ZXIiLCAiRWxlbWVudFBsdXNSZXNvbHZlciIsICJFbGVBZG1pblJlc29sdmVyIiwgInByb2Nlc3MiLCAicGF0aCJdCn0K
