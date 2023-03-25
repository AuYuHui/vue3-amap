<script setup lang="ts">
import { ref } from 'vue'
import { ElAmap } from './components/amap'
import { ElMarkerText } from './components/overlay/marker-text'
import type { ElAmapExpose } from './components/amap'
import type { ElMarkerProps } from './components/overlay/marker'
import type { ElMarkerTextProps } from './components/overlay/marker-text/text'

const markerIcon = new AMap.Icon({
  size: new AMap.Size(46, 28),
  image: 'https://a.amap.com/jsapi_demos/static/demo-center/marker/icon.png',
  imageSize: new AMap.Size(46, 28),
})
const markers = ref<Array<ElMarkerProps>>([
  {
    position: [116.38, 39.87],
    label: {
      content: '测试点一',
      offset: [-1, -2],
      direction: 'right',
    },
    id: 1,
  },
  {
    position: [116.47, 39.87],
    label: {
      content: '测试点二',
      offset: [0, 0],
      direction: 'left',
    },
    id: 2,
  },
  {
    position: [116.32, 39.90],
    label: {
      offset: [0, 0],
      direction: 'bottom',
      content: '<div class=\'labelContent\'>anchor:bottom-center</div>',
    },
    cursor: 'wait',
    icon: markerIcon,
    anchor: 'bottom-center',
    id: 3,
  },
  {
    position: [116.48, 40.00],
    label: {
      offset: [0, 0],
      direction: 'bottom',
      content: '<div class=\'labelContent\'>anchor:bottom-center</div>',
    },
    icon: markerIcon,
    anchor: 'bottom-center',
    id: 4,
  },
])

const texts = ref<Array<ElMarkerTextProps>>([
  {
    text: '纯文本标记',
    anchor: 'center', // 设置文本标记锚点
    draggable: true,
    cursor: 'pointer',
    angle: 10,
    position: [116.396923, 39.918203],
    style: {
      'padding': '.75rem 1.25rem',
      'margin-bottom': '1rem',
      'border-radius': '.25rem',
      'background-color': 'white',
      'width': '15rem',
      'border-width': 0,
      'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
      'text-align': 'center',
      'font-size': '20px',
      'color': 'blue',
    },
  },
])
function handleClick(e: any) {
  // eslint-disable-next-line no-console
  console.log(e)
}
const zoom = ref(10)
const AmapRef = ref <ElAmapExpose | null>(null)
AmapRef.value?.destroy()
</script>

<template>
  <ElAmap ref="AmapRef" v-model:zoom="zoom" @click="handleClick">
    <!-- <ElMarker
      v-for="marker in markers"
      :key="marker.id"
      :label="marker.label"
      :position="marker.position"
      :icon="marker.icon"
      :anchor="marker.anchor"
      @click="handleClick"
    /> -->
    <ElMarkerText
      v-for="text in texts"
      :key="text.anchor"
      :text="text.text"
      :anchor="text.anchor"
      :draggable="text.draggable"
      :cursor="text.cursor"
      :angle="text.angle"
      :position="text.position"
      :style="text.style"
      @click="handleClick"
    />
  </ElAmap>
</template>

<style scoped>

</style>
