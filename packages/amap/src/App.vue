<script setup lang="ts">
import { reactive, ref } from 'vue'
import { NInput, NInputNumber } from 'naive-ui'
import { ElAmap } from './components/amap'
import type { ElMarkerProps } from './components/overlay/marker'
import { ElMarker } from './components/overlay/marker'
import type { ElAmapExpose } from './components/amap'
import { ElElInfoWindow } from './components/infowindow'
const AmapRef = ref<ElAmapExpose | null>(null)
const zoom = ref(30)
const center = ref<[number, number]>([116.402023, 39.906977])
const offset = ref<[number, number]>([0, 0])
const inputValue = ref('备注')
const activeAoi = ref([116.401337, 39.907886])
const markers = reactive<Array<ElMarkerProps>>([
  {
    position: [116.401337, 39.907886],
  },
])
function handleClick(e: any) {
  // eslint-disable-next-line no-console
  console.log(e)
}

function handleMarkerClick(value: ElMarkerProps) {
  // activeAoi.value = value
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <NInputNumber v-model:value="zoom" />
    <NInput :value="center.join(',')" />
    <div>{{ inputValue }}</div>
    <div class="w-800px h-500px">
      <ElAmap ref="AmapRef" view-mode="2D">
        <ElMarker v-for="(marker, index) in markers" :key="index" :position="marker.position" @click="handleMarkerClick(marker)" />
        <ElElInfoWindow
          :position="[116.401337, 39.907886]"
          :offset="offset"
          :is-custom="true"
        >
          <div class="info-window-content">
            <NInput v-model:value="inputValue" />
          </div>
        </ElElInfoWindow>
      </ElAmap>
    </div>
  </div>
</template>

<style>
.info-window-content {
  position: relative;
  width: 220px;
  height: 200px;
  background-color: white;
}
</style>
