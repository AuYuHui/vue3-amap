import type { ExtractPropTypes, PropType } from 'vue'
import { defineComponent, nextTick } from 'vue'
import type { anchorType } from './types'
import { useParent } from '@/hooks'
import { makeStringProp } from '@/utils/props'

export const markerProps = {
  visible: Boolean,
  position: Array as unknown as PropType<AMap.Vector2 | AMap.LngLat>,
  anchor: makeStringProp<anchorType>('top-left'),
  onClick: Function,
  onDblclick: Function,
}
export type MarkerProps = ExtractPropTypes<typeof markerProps>
export default defineComponent({
  name: 'ElMarker',
  props: markerProps,

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
          marker.on(newKey as AMap.EventType, (e: any) => {
            emit(newKey as any, e)
          })
        }
      })
      map?.add(marker)
    })

    return () => (<div></div>)
  },
})
