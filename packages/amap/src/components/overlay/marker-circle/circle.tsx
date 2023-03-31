import type { ExtractPropTypes } from 'vue'
import { defineComponent } from 'vue'
import props from './props'
import { useParent } from '@/hooks'
import { useExpose } from '@/hooks/useExpose'
export type ElMarkerCircleProps = Partial<ExtractPropTypes<typeof props>> & Record<string, any>
export default defineComponent({
  name: 'ElMarkerCircle',
  props: { ...props },

  setup(props, { emit }) {
    const { parent } = useParent()
    if (!parent)
      return
    const map = parent.getInstance()
    const circle = new AMap.CircleMarker({ ...props })
    // 绑定事件
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && { ...props }[key]) {
        const newKey = key.replace(/^on/, '').replace(/([A-Z])/g, (match, p1) => `${p1.toLowerCase()}`)
        circle.on(newKey as AMap.EventType, (e: AMap.CircleMarker) => {
          emit(newKey, e)
        })
      }
    })
    circle.setMap(map)

    /**
     *
     * @returns 返回 ElMarkerCircle 实例
     */
    function getInstance() {
      return circle
    }

    useExpose({
      getInstance,
    })
    /**
     * 监听 text文本，改变内容
     */

    return () => (<div></div>)
  },
})
