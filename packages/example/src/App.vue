<script setup lang="ts">
import type { MarkerOptions } from '@dabu/vue3-amap'
import { ElAmap, ElMarker } from '@dabu/vue3-amap'
import { ref } from 'vue'
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
</script>

<template>
  <ElAmap>
    <ElMarker v-for="marker in markers" :key="marker.id" :label="marker.label" :position="marker.position" :draggable="true" cursor="move" />
  </ElAmap>
</template>

<style scoped>

</style>
