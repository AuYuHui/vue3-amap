<script lang="ts">
import { defineComponent } from 'vue'

import { useParent } from '@dabu/vue3-amap'
export default defineComponent({
  name: 'CustomAmap',
  setup() {
    const { parent } = useParent()
    if (!parent)
      return
    const map = parent.getInstance()
    const marker = new AMap.Marker({
      position: map?.getCenter(),
    })
    map?.add(marker)
    return {}
  },
})
</script>

<template>
  <div />
</template>

<style scoped>

</style>
