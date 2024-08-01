<script setup lang='ts'>
import { Comment } from 'vue'

defineProps({
  span: {
    type: Number,
    default: 6,
  },
})
const slots = useSlots()
const defaultSlots = computed(() => slots.default?.().filter(item => item.type !== Comment) ?? [])
console.log('%c Line:12 🍑 defaultSlots', 'color:#4fff4B', defaultSlots)
</script>

<template>
  <el-row :gutter="20" v-bind="$attrs">
    <el-col
      v-for="(item, index) in defaultSlots"
      :key="index"
      :lg="item?.props?.span ?? span"
      :md="12"
      :sm="12"
      :xs="24"
    >
      <component :is="item" />
    </el-col>
  </el-row>
</template>

<style scoped lang='scss'></style>
