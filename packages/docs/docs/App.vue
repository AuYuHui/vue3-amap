<script setup lang="ts">
import { ref } from 'vue'
import type { MarkerOptions } from '@dabu/vue3-amap'
import { ElAmap, ElMarker, useAmap } from '@dabu/vue3-amap'
const { initAMapApiLoader } = useAmap()
const markers = ref<Array<MarkerOptions>>([
  {
    position: [114.021888, 22.576431],
    label: {
      content: '测试点一',
      offset: [0, 0],
      direction: '789',
    },
    id: 1,
  },
  {
    position: [114.047446, 22.542768],
    label: {
      content: '测试点二',
      offset: [0, 0],
      direction: '456',
    },
    id: 2,
  },
])

const AmapRef = ref<InstanceType<typeof ElAmap> | null>(null)
await initAMapApiLoader({
  key: 'dbf3f6a5dafa9bd013fab9098a5df12f',
  version: '2.0',
})
// onMounted(() => {
//   console.log(AmapRef.value)
// })
</script>

<template>
  <ElAmap ref="AmapRef" :zoom-enable="false">
    <ElMarker v-for="marker in markers" :key="marker.id" :label="marker.label" :position="marker.position" :draggable="true" cursor="move" />
  </ElAmap>
</template>

<style scoped>

</style>
