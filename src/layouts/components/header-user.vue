<!-- 用户信息 -->
<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowDown, User, SwitchButton } from '@element-plus/icons-vue'

import useUserStore from '@/store/modules/user'

const { push, currentRoute } = useRouter()
const userStore = useUserStore()

/** 是否显示修改密码弹窗 */
const passwordVisible = ref(false)

/** 当前用户信息 */
const { userInfo } = storeToRefs(userStore)

/** 用户信息下拉点击 */
function onUserDropClick(command: any) {
  if (command === 'password') {
    passwordVisible.value = true
  }
  else if (command === 'profile') {
    push('/system/profile/index')
  }
  else if (command === 'logout') {
    // 退出登录
    ElMessageBox.confirm(
      '确定要退出登录吗',
      '系统提示',
      {
        type: 'warning',
        draggable: true,
      },
    )
      .then(() => {
        userStore.logout()
      })
      .catch(() => { })
  }
}
</script>

<template>
  <ele-dropdown
    :items="[
      {
        title: '个人中心',
        command: 'profile',
        icon: User,
      },
      // {
      //   title: '修改密码',
      //   command: 'password',
      //   icon: LockOutlined,
      //   iconStyle: { transform: 'translateY(-1px)' },
      // },
      {
        title: '退出登录',
        command: 'logout',
        icon: SwitchButton,
        divided: true,
      },
    ]"
    :icon-props="{ size: 15 }"
    :popper-options="{
      modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
    }"
    @command="onUserDropClick"
  >
    <div class="header-avatar">
      <el-avatar
        :size="28"
        alt="avatar"
        :src="userInfo.avatar"
        :icon="userInfo.avatar"
        style="transform: translateY(-1px);"
      />
      <div class="hidden-sm-and-down" style="margin-left: 4px; line-height: 1.5;">
        {{ userInfo.name }}
      </div>
      <el-icon>
        <ArrowDown />
      </el-icon>
    </div>
  </ele-dropdown>
  <!-- 修改密码弹窗 -->
</template>

<style lang="scss" scoped>
.header-avatar {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  outline: none;
}
</style>
