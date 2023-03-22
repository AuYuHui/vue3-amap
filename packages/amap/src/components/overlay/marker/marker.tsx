import type { ExtractPropTypes } from 'vue'
import { defineComponent, nextTick } from 'vue'
import props from './props'
import { useParent } from '@/hooks'

export type MarkerProps = Partial<ExtractPropTypes<typeof props>> & Record<string, any>
export default defineComponent({
  name: 'ElMarker',
  props: { ...props },

  setup(props, { emit }) {
    const { parent } = useParent()
    if (!parent)
      return
    nextTick(() => {
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
    })

    return () => (<div></div>)
  },
})
