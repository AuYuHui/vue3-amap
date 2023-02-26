<script lang="ts">
import { defineComponent, nextTick } from 'vue'

import { ElAmap_KEY, useParent } from '@dabu/vue3-amap'
export default defineComponent({
  name: 'CustomAmap',
  setup() {
    const { parent } = useParent(ElAmap_KEY)
    if (!parent)
      return
    nextTick(() => {
      const map = parent.getInstance()
      const marker = new AMap.Marker({
        position: map?.getCenter(),
      })
      map?.add(marker)
    })
    return {}
  },
})
</script>

<template>
  <div />
</template>

<style scoped>

</style>
