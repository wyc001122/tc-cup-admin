<script setup lang='ts'>
defineProps({
  gutter: {
    type: Number,
    default: 20,
  },
  span: {
    type: Number,
    default: 6,
  },
})
const slots = useSlots()
const defaultSlots = computed(() => slots.default?.().filter(item => item.type !== Comment) ?? [])
</script>

<template>
  <el-form label-suffix="：" label-width="100px" v-bind="$attrs">
    <row-col :gutter="20" :span="6">
      <slot />
    </row-col>
  </el-form>
</template>
