<script setup lang="ts">
import { ref } from 'vue'
import ElAmap from './components/amap/amap'
import type { MarkerOptions } from './components/overlay/marker'
import ElMarker from './components/overlay/marker/marker'

const markerIcon = new AMap.Icon({
  size: new AMap.Size(46, 28),
  image: 'https://a.amap.com/jsapi_demos/static/demo-center/marker/icon.png',
  imageSize: new AMap.Size(46, 28),
})
const markers = ref<Array<MarkerOptions>>([
  {
    position: [114.021888, 22.576431],
    label: {
      content: '测试点一',
      offset: [-1, -2],
      direction: 'right',
    },
    id: 1,
  },
  {
    position: [114.047446, 22.542768],
    label: {
      content: '测试点二',
      offset: [0, 0],
      direction: 'left',
    },
    id: 2,
  },
  {
    position: [114.216446, 22.542768],
    label: {
      offset: [0, 0],
      direction: 'bottom',
      content: '<div class=\'labelContent\'>anchor:bottom-center</div>',
    },
    icon: markerIcon,
    anchor: 'bottom-center',
    id: 2,
  },
  {
    position: [114.246446, 22.542768],
    label: {
      offset: [0, 0],
      direction: 'bottom',
      content: '<div class=\'labelContent\'>anchor:bottom-center</div>',
    },
    icon: markerIcon,
    anchor: 'bottom-center',
    id: 2,
  },
])

const zoom = ref(10)
const AmapRef = ref<InstanceType<typeof ElAmap> | null>(null)
</script>

<template>
  <ElAmap ref="AmapRef" v-model:zoom="zoom">
    <ElMarker v-for="marker in markers" :key="marker.id" :label="marker.label" :position="marker.position" :icon="marker.icon" />
  </ElAmap>
</template>

<style scoped>

</style>
