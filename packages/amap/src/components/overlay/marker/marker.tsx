import type { ExtractPropTypes } from 'vue'
import { defineComponent } from 'vue'
import props from './props'
import type { ElMarkerExpose } from './types'
import { useParent } from '@/hooks'
import { useExpose } from '@/hooks/useExpose'
export type ElMarkerProps = Partial<ExtractPropTypes<typeof props>> & Record<string, any>
export default defineComponent({
  name: 'ElMarker',
  props: { ...props },
  setup(props, { emit }) {
    const { parent } = useParent()
    if (!parent)
      return
    const map = parent.getInstance()
    const marker = new AMap.Marker({ ...props })
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && { ...props }[key]) {
        const newKey = key.replace(/^on/, '').replace(/([A-Z])/g, (match, p1) => `${p1.toLowerCase()}`)
        marker.on(newKey as AMap.EventType, (e: AMap.Marker) => {
          emit(newKey, e)
        })
      }
    })
    map?.add(marker)

    function getInstance() {
      return marker
    }

    useExpose<ElMarkerExpose>({
      getInstance,
    })
    return () => ''
  },
})
