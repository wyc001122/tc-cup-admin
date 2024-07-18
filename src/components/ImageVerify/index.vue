<script setup lang="ts">
import { useImageVerify } from './hooks'

interface Props {
  code?: string
}
const props = withDefaults(defineProps<Props>(), {
  code: '',
})

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:code', code: string): void
}
const { domRef, imgCode, setImgCode, getImgCode } = useImageVerify()

watch(
  () => props.code,
  (newValue) => {
    setImgCode(newValue)
  },
)
watch(imgCode, (newValue) => {
  emit('update:code', newValue)
})

defineExpose({ getImgCode })
</script>

<template>
  <canvas
    ref="domRef"
    width="120"
    height="40"
    class="cursor-pointer"
    @click="getImgCode"
  />
</template>
