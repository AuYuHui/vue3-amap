import type { ExtractPropTypes } from 'vue'
import { defineComponent, effectScope, onMounted, onScopeDispose, ref, watch, watchEffect } from 'vue'

import props from './props'
import { useParent } from '@/hooks'
import { useExpose } from '@/hooks/useExpose'

export type ElInfoWindowProps = Partial<ExtractPropTypes<typeof props>> & Record<string, any>
export default defineComponent({
  name: 'ElInfoWindow',
  props: { ...props },
  emits: ['update:center'],
  setup(props, { emit, slots }) {
    const slotRef = ref<HTMLElement>()
    const { parent } = useParent()
    if (!parent)
      return
    const map = parent.getInstance()
    if (!map)
      return
    const InfoWindow = new AMap.InfoWindow({
      ...props,
      content: props.isCustom ? undefined : props.content,
    })
    // 绑定事件
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && { ...props }[key]) {
        const newKey = key.replace(/^on/, '').replace(/([A-Z])/g, (match, p1) => `${p1.toLowerCase()}`)
        InfoWindow.on(newKey as AMap.EventType, (e: AMap.InfoWindow) => {
          emit(newKey as any, e)
        })
      }
    })
    if (props.position)
      InfoWindow.open(map, props.position)

    /**
     *
     * @returns 返回 ElInfoWindow 实例
     */
    function getInstance() {
      return InfoWindow
    }

    // 渲染插槽
    function renderSlots() {
      return <div ref={slotRef}>{ slots.default?.() }</div>
    }
    onMounted(() => {
      if (props.isCustom)
        InfoWindow.setContent(slotRef.value)
    })

    const scope = effectScope()

    scope.run(() => {
      watchEffect(() => {
        if (props.isCustom)
          renderSlots()
      })
      /**
       * 监听 position
       */
      watch(() => props.position, (val) => {
        if (val)
          InfoWindow.setPosition(val)
      })
    })

    onScopeDispose(() => {
      scope.stop()
    })

    useExpose({
      getInstance,
    })

    return () => renderSlots()
  },
})
