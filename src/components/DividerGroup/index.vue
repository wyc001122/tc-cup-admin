<script setup lang='ts'>
import { Comment } from 'vue'

const slots = useSlots()
const defaultSlots = computed(() => slots.default?.().filter(item => item.type !== Comment) ?? [])
</script>

<template>
  <div class="flex flex-wrap items-center justify-center">
    <template v-for="(item, index) in defaultSlots" :key="index">
      <component :is="item" />
      <ElDivider v-if="index < defaultSlots.length - 1" direction="vertical" />
    </template>
  </div>
</template>

<style scoped lang='scss'></style>
