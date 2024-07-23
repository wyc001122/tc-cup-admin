<script setup lang='ts'>
import { createReusableTemplate } from '@vueuse/core'

const props = defineProps({
  title: {
    type: String,
    default: '查看用户',
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
  const _data = form.value
  return [
    { label: '所属租户', value: _data.tenantName },
    { label: '登录账号', value: _data.account },
  ]
})

const desList2 = computed(() => {
  const _data = form.value
  return [
    { label: '用户昵称', value: _data.name },
    { label: '用户姓名', value: _data.realName },
    { label: '手机号码', value: _data.phone },
    { label: '邮箱地址', value: _data.email },
    { label: '用户性别', value: _data.sexName },
    { label: '用户生日', value: _data.birthday },
  ]
})

const desList3 = computed(() => {
  const _data = form.value
  return [
    { label: '用户编号', value: _data.code },
    { label: '所属角色', value: _data.roleName },
    { label: '所属部门', value: _data.deptName },
    { label: '所属岗位', value: _data.postName },
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
  >
    <DefineTemplate v-slot="{ name, list }">
      <el-divider content-position="left" style="width: 100%;">
        {{ name }}
      </el-divider>
      <ElDescriptions :column="column" :border="border" class="m-b-[20px]">
        <ElDescriptionsItem
          v-for="({ label, value }, i) in list"
          :key="i"
          :width="width"
          :label="label"
          label-class-name="label-name"
        >
          <el-text :line-clamp="2" :title="value">
            {{ value }}
          </el-text>
        </ElDescriptionsItem>
      </ElDescriptions>
    </DefineTemplate>
    <ReuseTemplate name="基础信息" :list="desList1" />
    <ReuseTemplate name="详细信息" :list="desList2" />
    <ReuseTemplate name="职责信息" :list="desList3" />
  </el-dialog>
</template>

<style scoped lang='scss'>
:deep(.label-name) {
  width: 60px !important;
}
</style>
