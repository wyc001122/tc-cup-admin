<script setup lang='ts'>
import { detail, ext_info, info, list, page, submit, update, remove, grant, reset_password, update_password, update_info, user_list, import_user, export_user, export_template, register_guest, update_platform, platform_detail, search_user } from '@/api/modules/cup-user/index'
import type { FormInstance, FormRules } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { md5 } from 'js-md5'

const userStore = useUserStore()
const form = ref({
  oldPassword: '',
  newPassword: '',
  newPassword1: '',
})

const rules = ref<FormRules>({
  oldPassword: [
    {
      required: true,
      message: '请输入原密码',
      trigger: 'blur',
    },
  ],
  newPassword: [
    {
      required: true,
      message: '请输入新密码',
      trigger: 'blur',
    },
  ],
  newPassword1: [
    {
      validator: (rule, value, callback) => {
        if (value !== form.value.newPassword) {
          callback(new Error('两次密码不一致'))
        }
        callback()
      },
      trigger: 'blur',
    },
  ],
})

const loading = ref(false)
const formRef = ref<FormInstance>()
function saveHandler() {
  formRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true
      const params = {
        oldPassword: md5(form.value.oldPassword),
        newPassword: md5(form.value.newPassword),
        newPassword1: md5(form.value.newPassword1),
      }
      update_password({}, { params }).then((res) => {
        if (res.code === 200) {
          ElMessage.success('保存成功，请重新登录')
          userStore.logout()
        }
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
    label-width="100px"
    style=" box-sizing: border-box;max-width: 580px; padding: 34px 16px 12px 0;"
    @submit.prevent=""
  >
    <el-form-item>
      <el-alert :closable="false" type="warning" title="注意:成功修改后，需重新登录!" />
    </el-form-item>
    <el-form-item label="原密码" prop="oldPassword">
      <el-input v-model="form.oldPassword" clearable placeholder="请输入原密码" />
    </el-form-item>
    <el-form-item label="新密码" prop="newPassword">
      <el-input v-model="form.newPassword" clearable placeholder="请输入新密码" />
    </el-form-item>
    <el-form-item label="确认密码" prop="newPasswor1">
      <el-input v-model="form.newPassword1" clearable placeholder="请再次输入新密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" @click="saveHandler">
        {{ loading ? '保存中..' : '保存更改' }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang='scss'></style>
