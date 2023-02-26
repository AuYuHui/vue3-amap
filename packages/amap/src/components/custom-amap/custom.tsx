import { defineComponent, nextTick } from 'vue'
import { ElAmap_KEY, useParent } from '@/hooks'

export default defineComponent<Partial<AMap.MapOptions>>({
  name: 'ElAmap',
  setup(props, { slots, expose }) {
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
    return () => (
        <div>
            <div></div>
        </div>
    )
  },
})
