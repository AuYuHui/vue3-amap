<script setup lang="ts">
import { ref } from 'vue'
import { NInputNumber } from 'naive-ui'
import { ElAmap } from './components/amap'
import { ElMarkerCircle } from './components/overlay/marker-circle'
import type { ElAmapExpose } from './components/amap'
const AmapRef = ref<ElAmapExpose | null>(null)
const zoom = ref(30)

function handleClick(e: any) {
  console.log(e)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <NInputNumber v-model:value="zoom" />
    <div class="w-800px h-500px">
      <ElAmap ref="AmapRef" view-mode="3D">
        <ElMarkerCircle
          :radius="zoom"
          :center="[116.397428, 39.90923]" :fill-opacity="0.5" cursor="pointer"
          draggable fill-color="#409EFF" stroke-color="#000A58" @click="handleClick"
        />
      </ElAmap>
    </div>
  </div>
</template>

<style scoped></style>
