<script setup lang="ts">
import { ref } from 'vue'
import { ElAmap } from '@dabu/vue3-amap'

const AmapRef = ref<InstanceType<typeof ElAmap> | null>(null)
</script>

<template>
  <div style="width: 700px; height: 300px;">
    <ElAmap ref="AmapRef" />
  </div>
</template>

<style scoped>

</style>
