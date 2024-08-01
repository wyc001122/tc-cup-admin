<script setup lang='ts'>
import { Comment } from 'vue'

const slots = useSlots()
const needSlots = computed(() => slots.default?.()?.filter(item => item.type !== Comment) || [])
</script>

<template>
  <div class="divider-space">
    <template v-for="(item, index) in needSlots" :key="index">
      <component :is="item" />
      <el-divider v-if="index < needSlots.length - 1" direction="vertical" />
    </template>
  </div>
</template>

<style scoped lang='scss'>
.divider-space {
  display: flex;
  align-items: center;
}
</style>
