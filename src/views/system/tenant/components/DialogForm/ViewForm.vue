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
    { label: '租户名称', value: row.tenantName },
    { label: '租户ID', value: row.tenantId },
    { label: '系统名称', value: row.systemName },
    { label: '账号额度', value: row.accountNumber === -1 ? '不限制' : row.accountNumber },
    { label: '绑定域名', value: row.domain },
    { label: '过期时间', value: row.expireTime > 0 ? row.expireTime : '不限制' },
    { label: '联系人', value: row.linkman },
    { label: '联系电话', value: row.contactNumber },
    { label: '联系地址', value: row.address },
    { label: '系统Logo', value: row.systemLogo, type: 'img' },
    { label: '自定义Json串', value: row.jsonStr },

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
      <el-descriptions :column="column" :border="border" class="m-b-[20px]">
        <el-descriptions-item
          v-for="({ label, value, type }, i) in list"
          :key="i"
          :width="width"
          :label="label"
          label-class-name="label-col"
          class-name="value-col"
        >
          <el-image
            v-if="type === 'img'"
            :src="value"
            :preview-src-list="[value]"
            style="width: 52px;aspect-ratio: 52 / 60;"
            fit="contain"
          />

          <el-text v-else tag="td" :line-clamp="2" :title="value">
            {{ value }}
          </el-text>
        </el-descriptions-item>
      </el-descriptions>
    </DefineTemplate>

    <ReuseTemplate :list="desList1" />
  </el-dialog>
</template>

<style scoped lang='scss'>
:deep(.label-col) {
  width: 70px !important;
}
</style>
