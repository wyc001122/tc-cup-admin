<!-- 全局页脚 -->
<script lang="ts" setup>
</script>

<template>
  <ele-text type="placeholder" class="ele-footer" style="padding: 16px 0; text-align: center;">
    <el-space
      :size="24"
      :style="{ '--el-text-color-regular': 'var(--el-text-color-placeholder)' }"
    >
      <el-link :underline="false" href="https://eleadmin.com" target="_blank">
        官网
      </el-link>
    </el-space>
    <div style="margin-top: 8px;">
      Copyright © 2003-01-08 北京泰策科技有限公司
    </div>
  </ele-text>
</template>
