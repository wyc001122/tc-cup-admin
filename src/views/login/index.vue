<script setup lang='ts'>
import useThemeStore from '@/store/modules/theme'
import {
  Sunny,
  Moon,
} from '@element-plus/icons-vue'
import login_bg_1x from '@/assets/images/login_bg_1x.jpg'
import login_bg_2x from '@/assets/images/login_bg_2x.jpg'
import login2_bg_1x from '@/assets/images/login2_bg_1x.jpg'
import login3_bg_1x from '@/assets/images/login3_bg_1x.jpg'
import LoginForm from './loginForm/index.vue'
import ImageTransition from './imageTransition.vue'
import LayoutTool from '@/layouts/components/LayoutTool.vue'

const themeStore = useThemeStore()
const { darkMode } = toRefs(themeStore.state)

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
const devicePixelRatio = window.devicePixelRatio

const imageTransition = ref()
const initialImage = ref(devicePixelRatio === 1 ? login_bg_1x : login_bg_2x)

let curIndex = 0
const imgMap = [login_bg_1x, login2_bg_1x, login3_bg_1x]

const timer = setInterval(() => {
  curIndex = (curIndex + 1) % 3
  imageTransition.value.transitionTo(imgMap[curIndex])
}, 1500)

onUnmounted(() => {
  clearInterval(timer)
})

/** 暗黑主题切换开关 */
const darkSwitchRef = ref()

/** 切换暗黑模式 */
function updateDarkMode(isDark: any) {
  if (
    !darkSwitchRef.value
    || typeof document.startViewTransition !== 'function'
  ) {
    themeStore.setDarkMode(isDark)
    return
  }
  const rect = darkSwitchRef.value.$el.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  document
    .startViewTransition(() => themeStore.setDarkMode(isDark))
    .ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        { clipPath: isDark ? clipPath : [...clipPath].reverse() },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)',
        },
      )
    })
}
</script>

<template>
  <div class="login-container">
    <div class="login-bg-container">
      <ImageTransition
        ref="imageTransition"
        :initial-image="initialImage"
        :intensity="0.5"
        :duration="0.8"
        :ripple-strength="0.0005"
      />
    </div>
    <div class="login-box-container">
      <el-switch
        ref="darkSwitchRef"
        class="absolute right-20px top-10px"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        :model-value="darkMode"
        @update:model-value="updateDarkMode"
      />
      <div v-motion-slide-visible-right class="login-form-container">
        <div class="m-b-30px">
          <div class="text-H24 text-[var(--el-text-color-primary)]">
            {{ VITE_APP_TITLE }}
          </div>
          <div class="text-H14_R text-[var(--el-text-color-regular)]">
            欢迎您！
            <!-- <el-button @click="switchImg">
              切换
            </el-button> -->
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
html.dark {
  .login-bg-container {
    filter: invert(1) hue-rotate(170deg);
  }
}

.login-container {
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;
  user-select: none;

  .login-bg-container {
    width: calc(100% - 740px);
    transition: width 0.3s ease;
    will-change: width;
  }

  .login-box-container {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 740px;
    height: 100%;
    transition: width 0.3s ease;
    will-change: width;

    .login-form-container {
      width: 360px;
      padding: 40px 30px 36px;
      background-color: var(--el-bg-color);
      border-radius: 8px;
      box-shadow: 0 0 16px 0 #0000001a;
    }
  }
}

@media (width <= 1600px) {
  .login-bg-container {
    width: calc(100% - 0px) !important;
  }

  .login-box-container {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
