<script setup lang='ts'>
import { detail, ext_info, info, list, page, submit, update, remove, grant, reset_password, update_password, update_info, user_list, import_user, export_user, export_template, register_guest, update_platform, platform_detail, search_user } from '@/api/modules/cup-user/index'
import type { FormInstance, FormRules } from 'element-plus'
import type { UserVO对象 } from '@/api/modules/cup-user/_model'
import { isPhoneStrong, isEmail, isChinese } from '@/utils/validate'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const form = defineModel<UserVO对象>({ required: true })

const rules = ref<FormRules>({
  email: [
    {
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if (!isEmail(value)) {
          callback(new Error('邮箱格式有误'))
        }
        callback()
      },
    },
  ],
  phone: [
    {
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if (!isPhoneStrong(value)) {
          callback(new Error('手机号格式有误'))
        }
        callback()
      },
    },
  ],
  realName: [
    { trigger: 'blur', validator: (rule, value, callback) => {
      if (!isChinese(value)) {
        callback(new Error('真实姓名格式有误'))
      }
      callback()
    } },
  ],
})

const loading = ref(false)
const formRef = ref<FormInstance>()
function saveHandler() {
  formRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true
      update(form.value).then((res) => {
        if (res.code === 200) {
          ElMessage.success('保存成功')
          userStore.getUserInfo()
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
    <el-form-item label="昵称" prop="name">
      <el-input v-model="form.name" clearable placeholder="请输入昵称" />
    </el-form-item>
    <el-form-item label="姓名" prop="realName">
      <el-input v-model="form.realName" clearable placeholder="姓名" />
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="form.sex">
        <el-radio-button :label="1">
          男
        </el-radio-button>
        <el-radio-button :label="2">
          女
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" clearable placeholder="请输入邮箱" />
    </el-form-item>
    <el-form-item label="手机" prop="phone">
      <el-input v-model="form.phone" clearable placeholder="请输入手机" />
    </el-form-item>
    <el-form-item label="生日" prop="birthday">
      <el-date-picker
        v-model="form.birthday"
        type="date"
        placeholder="请选择生日"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" @click="saveHandler">
        {{ loading ? '保存中..' : '保存更改' }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang='scss'></style>
