import type { PropType } from 'vue'
import { defineComponent, nextTick } from 'vue'
import { useParent } from '@/hooks'
export default defineComponent({
  name: 'ElMarker',
  props: ({
    visible: {
      type: Boolean,
      default: true,
    },
    position: {
      type: Array as unknown as PropType<AMap.Vector2 | AMap.LngLat>,
    },
    onClick: {
      type: Function,
    },
    onDblclick: {
      type: Function,
    },
  }),
  emits: ['click', 'dblclick', 'dblclick', 'mousemove',
    'mouseover', 'mouseout', 'mousedown', 'mouseup', 'dragstart', 'dragstart', 'dragend', 'moving', 'moveend', 'movealong', 'touchstart', 'touchmove', 'touchend'],
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
