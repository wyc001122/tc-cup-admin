<script setup lang='ts'>
const slots = useSlots()

/** 是否使用了search插槽 */
const usedSearchSlots = computed(() => slots?.search && slots?.search().length > 0)
/** 是否使用了tool插槽 */
const usedToolSlots = computed(() => slots?.tool && slots?.tool().length > 0)
</script>

<template>
  <ele-page :flex-table="true">
    <ele-card v-if="usedSearchSlots" :body-style="{ paddingBottom: '2px' }">
      <slot name="search" />
    </ele-card>
    <ele-card :flex-table="true">
      <ele-page v-if="usedToolSlots" :plain="true" class="table-tools">
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
