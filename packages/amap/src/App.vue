<script setup lang="ts">
import { ref } from 'vue'
import ElAmap from './components/amap/amap'
import type { MarkerOptions } from './components/overlay/marker'
import ElMarker from './components/overlay/marker/marker'
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
const zoom = ref(10)
const AmapRef = ref<InstanceType<typeof ElAmap> | null>(null)

// onMounted(() => {
//   console.log(AmapRef.value?.$.props)
// })
</script>

<template>
  <ElAmap ref="AmapRef" v-model:zoom="zoom" :drag-enable="false">
    <ElMarker v-for="marker in markers" :key="marker.id" :label="marker.label" :position="marker.position" />
  </ElAmap>
</template>

<style scoped>

</style>
