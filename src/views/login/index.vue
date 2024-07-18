<script setup lang='ts'>
import login_bg_1x from '@/assets/images/login_bg_1x.jpg'
import login_bg_2x from '@/assets/images/login_bg_2x.jpg'
import LoginForm from './loginForm/index.vue'

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
const devicePixelRatio = window.devicePixelRatio
</script>

<template>
  <div class="login-container">
    <div class="login-bg-container">
      <img v-motion-fade :src="devicePixelRatio === 1 ? login_bg_1x : login_bg_2x" alt="">
    </div>
    <div class="login-box-container">
      <div v-motion-slide-visible-right class="login-form-container">
        <div class="m-b-30px">
          <div class="text-H24 text-[#181818]">
            {{ VITE_APP_TITLE }}
          </div>
          <div class="text-H14_R text-[#7D7D7D]">
            欢迎您！
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
      background-color: #fff;
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
