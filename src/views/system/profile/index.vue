<script setup lang='ts'>
import { detail } from '@/api/modules/cup-user/index'
import type { UserVO对象 } from '@/api/modules/cup-user/_model'

import UserCard from './components/UserCard.vue'
import UserForm from './components/UserForm.vue'
import UserPassword from './components/UserPassword.vue'
import useUserStore from '@/store/modules/user'

const active = ref('info')

const userInfo = ref<Partial<UserVO对象>>({})
function getUserInfo() {
  detail({ id: useUserStore().userInfo.userid,
  }).then((res) => {
    if (res.code === 200) {
      userInfo.value = res.data
      infoForm.value = res.data
    }
  })
}

const infoForm = ref<Partial<UserVO对象>>({})

onMounted(() => {
  getUserInfo()
})
</script>

<template>
  <ele-page :multi-card="false">
    <div class="user-wrapper">
      <UserCard :data="userInfo" class="user-side" />
      <ele-card
        :header-style="{ padding: '0 24px' }"
        :body-style="{ padding: 0, minHeight: '462px' }"
        class="user-body"
      >
        <template #header>
          <ele-tabs
            v-model="active"
            type="plain"
            size="large"
            :items="[
              { name: 'info', label: '基本信息' },
              { name: 'password', label: '修改密码' },
            ]"
          />
        </template>
        <UserForm
          v-if="active === 'info'"
          v-model="infoForm"
        />
        <UserPassword v-if="active === 'password'" />
      </ele-card>
    </div>
  </ele-page>
</template>

<style scoped lang='scss'>
.user-wrapper {
  display: flex;
  gap: 16px;

  .user-side {
    flex-shrink: 0;
    width: 320px;
  }

  .user-body {
    flex: 1;
  }
}

@media screen and (width <= 928px) {
  .user-wrapper .user-side {
    width: 240px;
  }
}

@media screen and (width <= 768px) {
  .user-wrapper {
    display: block;

    .user-side {
      width: auto;
      margin: 0 0 16px;
    }
  }
}
</style>
