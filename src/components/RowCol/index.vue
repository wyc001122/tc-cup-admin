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
</script>

<template>
  <el-row v-bind="$attrs">
    <el-col
      v-for="(item, index) in defaultSlots"
      :key="index"
      :lg="span"
      :md="12"
      :sm="12"
      :xs="24"
    >
      <component :is="item" />
    </el-col>
  </el-row>
</template>

<style scoped lang='scss'></style>
