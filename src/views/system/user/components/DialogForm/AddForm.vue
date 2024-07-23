<script setup lang='ts'>
import type { FormInstance } from 'element-plus'

const props = defineProps({
  title: {
    type: String,
    default: '新增用户',
  },
  data: {
    type: Object,
    default: () => {},
  },
})

const emits = defineEmits(['submit'])
const modelValue = defineModel<boolean>('modelValue')
const form = ref<any>({})

const formRef = ref<FormInstance>()
// 基础信息必填
const rules = ref({
  tenantId: [{ required: true, message: '请选择所属租户', trigger: 'change' }],
  account: [{ required: true, message: '请输入登录账号', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  password2: [{
    required: true,
    trigger: 'blur',
    validator: (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      }
      else if (value !== form.value.password) {
        callback(new Error('两次输入密码不一致!'))
      }
      else {
        callback()
      }
    },
  }],
  name: [{ required: true, message: '请输入用户昵称', trigger: 'blur' }],
})

const tenantList = inject<any>('tenantList')
const roleList = inject<any>('roleList')
const departmentList = inject<any>('departmentList')
const postList = inject<any>('postList')

function close() {
  modelValue.value = false
}

function save() {
  formRef.value?.validate((valid: any) => {
    if (valid) {
      emits('submit', form.value)
    }
  })
}

function passwordChange() {
  formRef.value?.validateField('password2')
}

onMounted(() => {
  form.value = { ...props.data }
})
</script>

<template>
  <el-dialog
    v-model="modelValue"
    form
    :title="title"
    width="600px"
    :destroy-on-close="true"
    draggable
    overflow
  >
    <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
      <el-divider content-position="left">
        基础信息
      </el-divider>
      <row-col :span="12">
        <el-form-item label="所属租户" prop="tenantId">
          <el-select v-model="form.tenantId" placeholder="请选择所属租户" clearable filterable>
            <el-option v-for="item in tenantList" :key="item.tenantId" :label="item.tenantName" :value="item.tenantId" />
          </el-select>
        </el-form-item>
        <el-form-item label="登录账号" prop="account">
          <el-input v-model="form.account" clearable placeholder="请输入登录账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" clearable placeholder="请输入密码" @change="passwordChange" />
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input v-model="form.password2" clearable placeholder="再次输入密码" />
        </el-form-item>
      </row-col>
      <el-divider content-position="left">
        详细信息
      </el-divider>
      <row-col :span="12">
        <el-form-item label="用户昵称" prop="name">
          <el-input v-model="form.name" clearable placeholder="请输入用户昵称" />
        </el-form-item>
        <el-form-item label="用户姓名" prop="realName">
          <el-input v-model="form.realName" clearable placeholder="请输入用户姓名" />
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="form.phone" clearable placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="form.email" clearable placeholder="请输入电子邮箱" />
        </el-form-item>
        <el-form-item label="用户性别" prop="email">
          <el-radio-group v-model="form.sex">
            <el-radio-button :label="1">
              男
            </el-radio-button>
            <el-radio-button :label="2">
              女
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户生日" prop="birthday">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="请选择生日"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </row-col>
      <el-divider content-position="left">
        职责信息
      </el-divider>
      <row-col :span="12">
        <el-form-item label="用户编号" prop="code">
          <el-input v-model="form.code" clearable placeholder="请输入用户编号" />
        </el-form-item>
        <el-form-item label="所属角色" prop="roleId">
          <el-select
            v-model="form.roleId"
            placeholder="请选择所属角色"
            multiple
            clearable
            filterable
          >
            <el-option v-for="item in roleList" :key="item.id" :label="item.title" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="所属部门" prop="deptId">
          <el-tree-select
            v-model="form.deptId"
            :data="departmentList"
            :props="{
              value: 'id',
              label: 'title',
            }"
            placeholder="请选择所属角色"
            check-strictly
            multiple
            clearable
            filterable
          />
        </el-form-item>
        <el-form-item label="所属岗位" prop="postId">
          <el-select
            v-model="form.postId"
            placeholder="请选择所属岗位"
            multiple
            clearable
            filterable
          >
            <el-option v-for="item in postList" :key="item.id" :label="item.postName" :value="item.id" />
          </el-select>
        </el-form-item>
      </row-col>
    </el-form>

    <template #footer>
      <el-button @click="close">
        取消
      </el-button>
      <el-button type="primary" @click="save">
        保存
      </el-button>
    </template>
  </el-dialog>
</template>

<style scoped lang='scss'></style>
