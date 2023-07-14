<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { Props } from './types'
import { useAmapUtils } from '@/hooks/useAmapUtils'

const props = withDefaults(defineProps<Partial<Props>>(), {
  center: () => [116.397428, 39.90923],
  zoom: 11,
  rotation: 0,
  pitch: 0,
  viewMode: '2D',
  terrain: false,
  features: () => ['bg', 'point', 'road', 'building'],
  zooms: () => [2, 20],
  dragEnable: true,
  zoomEnable: true,
  jogEnable: true,
  pitchEnable: true,
  rotateEnable: true,
  animateEnable: true,
  keyboardEnable: true,
  doubleClickZoom: true,
  scrollWheel: true,
  touchZoom: true,
  touchZoomCenter: 1,
  showLabel: true,
  defaultCursor: 'default',
  isHotspot: true,
  mapStyle: '',
  showBuildingBlock: true,
  showIndoorMap: false,
  labelRejectMask: false,
})

const domRef = ref<HTMLDivElement>()
let _Map: AMap.Map | null = null
const { useSetStatus } = useAmapUtils()
function init() {
  if (!domRef.value)
    return
  _Map = new AMap.Map(domRef.value, { ...props })

  useSetStatus<AMap.Map, Partial<Props>>(_Map, props, [
    'dragEnable',
    'zoomEnable',
    'jogEnable',
    'pitchEnable',
    'rotateEnable',
    'animateEnable',
    'keyboardEnable',
  ])
}

// 销毁方法
function destroy() {
  _Map?.destroy()
}

// 挂载后初始化地图
onMounted(() => {
  init()
})
// 组件销毁前
onBeforeUnmount(() => {
  destroy()
  _Map = null
})
</script>

<template>
  <div class="el-amap-container">
    <div ref="domRef" class="el-amap" />
  </div>
</template>

<style scoped>
.el-amap {
  width: 100%;
  height: 100%;
}

.el-amap-container {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
