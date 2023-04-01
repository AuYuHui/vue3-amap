import type { ExtractPropTypes } from 'vue'
import { defineComponent, watch } from 'vue'
import props from './props'
import { useParent } from '@/hooks'
import { useExpose } from '@/hooks/useExpose'
export type ElMarkerCircleProps = Partial<ExtractPropTypes<typeof props>> & Record<string, any>
export default defineComponent({
  name: 'ElMarkerCircle',
  props: { ...props },
  emits: ['update:center'],
  setup(props, { emit }) {
    const { parent } = useParent()
    if (!parent)
      return
    const map = parent.getInstance()
    const circleMarker = new AMap.CircleMarker({ ...props })
    // 绑定事件
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && { ...props }[key]) {
        const newKey = key.replace(/^on/, '').replace(/([A-Z])/g, (match, p1) => `${p1.toLowerCase()}`)
        circleMarker.on(newKey as AMap.EventType, (e: AMap.CircleMarker) => {
          emit(newKey as any, e)
        })
      }
    })
    circleMarker.setMap(map)

    /**
     *
     * @returns 返回 ElMarkerCircle 实例
     */
    function getInstance() {
      return circleMarker
    }
    function getCenter() {
      const center = circleMarker?.getCenter()
      return [center?.lng, center?.lat]
    }

    useExpose({
      getInstance,
    })
    /**
     * 监听
     */
    circleMarker.on('dragging', () => {
      emit('update:center', getCenter())
    })

    watch(() => props.radius, (newVal) => {
      if (newVal)
        circleMarker.setRadius(newVal)
    })

    return () => (<div></div>)
  },
})
