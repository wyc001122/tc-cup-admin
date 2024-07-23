import { useElementSize } from '@vueuse/core'

export default function () {
  const paginationWrapper = ref()
  const { width } = useElementSize(paginationWrapper)

  const pagerCount = ref(7)
  const layout = ref('total, sizes, prev, pager, next, jumper')

  watch(width, (value) => {
    pagerCount.value = 7
    layout.value = 'total, sizes, prev, pager, next, jumper'
    if (value <= 700) {
      layout.value = 'total, prev, pager, next, jumper'
    }
    if (value <= 560) {
      layout.value = 'total, prev, pager, next'
      const lessThan560 = 560 - value
      const pageBtnSize = 32
      const lessBtnCount = lessThan560 / pageBtnSize
      pagerCount.value = ~~Math.max(7 - lessBtnCount, 3)
    }
    if (value <= 270) {
      layout.value = 'prev, pager, next'
    }
  })
  return {
    paginationWrapper,
    pagerCount,
    layout,
  }
}
