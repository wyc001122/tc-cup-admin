<script setup lang='ts'>
import { md5 } from 'js-md5'

import type { FormInstance } from 'element-plus'
import { loginApi } from '@/api/layout/index'
import { setCupToken } from '@/utils/token-utils'
import useLogin from './useLogin'
import useTenantIdPop from './useTenantIdPop'
import WujieVue from 'wujie-vue3'
import { User, Lock, Key } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const redirect = ref(route.query.redirect?.toString() ?? '/')

const formRef = ref<FormInstance | undefined>()

const { form, rules, lastLoginData, loading } = useLogin()

const verifyCodeColor = computed(() => {
  if (form.value.verifyCode.length >= 4) {
    if (form.value.verifyCode === form.value._verifyCode) {
      return 'var(--el-color-success)'
    }
    else {
      return 'var(--el-color-danger)'
    }
  }
  else {
    return 'var(--el-text-color-regular)'
  }
})

const tenantInputRef = ref()
const {
  popoverRef,
  historyTenantId,
  chooseTenantId,
  removeTenantId,
  saveTenantId,
} = useTenantIdPop(form)

function submit() {
  formRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true
      const params = {
        ...form.value,
        password: md5(form.value.password),
      }
      loginApi(params).then((res) => {
        WujieVue.bus.$emit('loginByUsername', res)
        ElMessage.success('登录成功')

        saveTenantId(form.value.tenant_id)

        if (form.value.remember === true) {
          lastLoginData.value = {
            tenant_id: form.value.tenant_id,
            username: form.value.username,
            password: form.value.password,
            remember: form.value.remember,
          }
        }
        else {
          lastLoginData.value = {}
        }
        setCupToken(res)
        router.push(redirect.value)
      }).finally(() => {
        loading.value = false
      })
    }
  })
}
</script>

<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    @keyup.enter="submit"
    @submit.prevent=""
  >
    <el-form-item prop="tenant_id">
      <el-input
        ref="tenantInputRef"
        v-model="form.tenant_id"
        clearable
        placeholder="请输入租户ID"
        tabindex="1"
      />
    </el-form-item>
    <el-form-item prop="username">
      <el-input
        v-model="form.username"
        clearable
        placeholder="请输入用户名"
        tabindex="2"
        :prefix-icon="User"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="form.password"
        autocomplete="new-password"
        show-password
        clearable
        placeholder="请输入密码"
        tabindex="3"
        :prefix-icon="Lock"
      />
    </el-form-item>
    <el-form-item prop="verifyCode">
      <div class="verifyCode-group">
        <el-input
          v-model="form.verifyCode"
          clearable
          placeholder="请输入验证码"
          tabindex="4"
          class="flex:1"
          maxlength="4"
        >
          <template #prefix>
            <el-icon :color="verifyCodeColor">
              <Key />
            </el-icon>
            <!-- <SvgIcon name="dunpai1" :color="verifyCodeColor" class="transition-color" /> -->
          </template>
        </el-input>
        <div class="verifyCode">
          <ImageVerify v-model:code="form._verifyCode" class="h-full w-full cursor-pointer" />
        </div>
      </div>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.remember">
        记住我
      </el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-Button :loading="loading" type="primary" style="width: 100%;" @click.prevent="submit">
        登录
      </el-Button>
    </el-form-item>
    <el-popover
      v-bind="$attrs"
      ref="popoverRef"
      trigger="click"
      :virtual-ref="tenantInputRef"
      virtual-triggering
      popper-class="w-[fit-content]!"
    >
      <div class="max-w-[280px] flex flex-wrap gap-[5px]">
        <el-tag
          v-for="tagId in historyTenantId"
          :key="tagId"
          :closable="tagId !== '000000'"
          type="primary"
          class="cursor-pointer"
          @close="removeTenantId(tagId)"
          @click="chooseTenantId(tagId)"
        >
          {{ tagId }}
        </el-tag>
      </div>
    </el-popover>
  </el-form>
</template>

<style scoped lang='scss'>
.verifyCode-group {
  display: flex;
  align-items: center;
  width: 100%;

  .verifyCode {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 96px;
    height: 32px;
    margin-left: 8px;
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
    transition: border 0.2s;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      border-color: var(--el-color-primary);
    }
  }
}
</style>
