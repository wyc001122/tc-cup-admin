<script setup lang='ts'>
const slots = useSlots()

const defaultSlots = computed(() => {
  if (slots?.default && slots?.default().length > 0) {
    return slots?.default().filter(item => item.type !== Comment)
  }
  else {
    return []
  }
})

const operationSlots = computed(() => {
  if (slots?.operation && slots?.operation().length > 0) {
    return slots?.operation().filter(item => item.type !== Comment)
  }
  else {
    return []
  }
})

const isExtend = ref(true)

function toggleExtend() {
  isExtend.value = !isExtend.value
}

defineExpose({
  toggleExtend,
})
</script>

<template>
  <el-form v-bind="$attrs">
    <el-row :gutter="20" v-bind="$attrs">
      <el-col
        v-for="(item, index) in defaultSlots"
        :key="`default_${index}`"
        :lg="item?.props?.span ?? 6"
        :md="item?.props?.md ?? 12"
        :sm="item?.props?.sm ?? 12"
        :xs="item?.props?.xs ?? 24"
      >
        <component :is="item" />
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped lang='scss'>
</style>
