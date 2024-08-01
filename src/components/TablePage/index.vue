<script setup lang='ts'>
import { Comment } from 'vue'

const slots = useSlots()

const searchSlots = computed(() => {
  if (slots?.search && slots?.search().length > 0) {
    return slots?.search().filter(item => item.type !== Comment)
  }
  else {
    return []
  }
})

const toolSlots = computed(() => {
  if (slots?.tool && slots?.tool().length > 0) {
    return slots?.tool().filter(item => item.type !== Comment)
  }
  else {
    return []
  }
})
</script>

<template>
  <ele-page :flex-table="true">
    <ele-card v-if="searchSlots.length" :body-style="{ paddingBottom: '2px' }">
      <slot name="search" />
    </ele-card>
    <ele-card :flex-table="true">
      <ele-page v-if="toolSlots.length" :plain="true" class="table-tools">
        <slot name="tool" />
      </ele-page>
      <ele-page :flex-table="true" :plain="true">
        <slot />
      </ele-page>
    </ele-card>
  </ele-page>
</template>

<style scoped lang='scss'>
:deep(.table-tools) {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;

  & > * {
    margin: 0;
  }
}
</style>
