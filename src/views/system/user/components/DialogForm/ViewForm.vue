<script setup lang='ts'>
import { createReusableTemplate } from '@vueuse/core'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  data: {
    type: Object,
    default: () => { },
  },
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

const column = ref(2)
const border = ref(true)
const width = ref('100px')

const modelValue = defineModel<boolean>('modelValue')
const form = ref<any>({})
onMounted(() => {
  form.value = { ...props.data }
})

const desList1 = computed(() => {
  const row = form.value
  return [
    { label: '所属租户', value: row.tenantName },
    { label: '登录账号', value: row.account },
  ]
})

const desList2 = computed(() => {
  const row = form.value
  return [
    { label: '用户昵称', value: row.name },
    { label: '用户姓名', value: row.realName },
    { label: '手机号码', value: row.phone },
    { label: '邮箱地址', value: row.email },
    { label: '用户性别', value: row.sexName },
    { label: '用户生日', value: row.birthday },
  ]
})

const desList3 = computed(() => {
  const row = form.value
  return [
    { label: '用户编号', value: row.code },
    { label: '所属角色', value: row.roleName },
    { label: '所属部门', value: row.deptName },
    { label: '所属岗位', value: row.postName },
  ]
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
    top="15vh"
  >
    <DefineTemplate v-slot="{ name, list }">
      <el-divider content-position="left" style="width: 100%;">
        {{ name }}
      </el-divider>
      <el-descriptions :column="column" :border="border" class="m-b-[20px]">
        <el-descriptions-item
          v-for="({ label, value }, i) in list"
          :key="i"
          :width="width"
          :label="label"
          label-class-name="label-col"
          class-name="value-col"
        >
          <el-text
            tag="td"
            :line-clamp="2"
            :title="value"
          >
            {{ value }}
          </el-text>
        </el-descriptions-item>
        <el-descriptions-item v-if="list.length % 2" />
      </el-descriptions>
    </DefineTemplate>
    <ReuseTemplate name="基础信息" :list="desList1" />
    <ReuseTemplate name="详细信息" :list="desList2" />
    <ReuseTemplate name="职责信息" :list="desList3" />
  </el-dialog>
</template>

<style scoped lang='scss'>
:deep(.label-col) {
  width: 60px !important;
}

:deep(.value-col) {
  align-items: center;
  margin: auto 0;
}
</style>
