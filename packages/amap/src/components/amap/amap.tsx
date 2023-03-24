import type { ExtractPropTypes } from 'vue'
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import style from './amap.module.css'
import type { ElAmapExpose } from './types'
import props from './props'
import { useChildren } from '@/hooks'
import { useExpose } from '@/hooks/useExpose'

export type ElAmapProps = Partial<ExtractPropTypes<typeof props>> & Record<string, any>

export default defineComponent({
  name: 'ElAmap',
  props: { ...props },
  emits: ['update:zoom', 'update:center', 'update:pitch', 'update:rotation'],
  setup(props, { slots, emit }) {
    const { linkChildren } = useChildren()
    const domRef = ref<HTMLDivElement>()
    // 是否加载完成
    const isComplete = ref(false)
    let _Map: AMap.Map | null = null
    function init() {
      if (!domRef.value)
        return
      _Map = new AMap.Map(domRef.value, {
        ...props,
      })
      _Map.on('complete', () => {
        isComplete.value = true
      })
      // 绑定事件
      Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && { ...props }[key]) {
          const newKey = key.replace(/^on/, '').replace(/([A-Z])/g, (match, p1) => `${p1.toLowerCase()}`)
          _Map!.on(newKey as AMap.EventType, (e: AMap.Map) => {
            emit(newKey as any, e)
          })
        }
      })
      _Map.getCenter()
      bindModelEvents()
    }
    // 方法销毁
    function destroy() {
      _Map?.destroy()
    }

    function getInstance(): AMap.Map | null {
      return _Map
    }
    useExpose<ElAmapExpose>({
      destroy,
      getInstance,
    })
    //  挂载后
    onMounted(() => {
      init()
    })
    // 组件销毁前
    onBeforeUnmount(() => {
      destroy()
      _Map = null
    })
    /**
     * 绑定model事件
     */
    function bindModelEvents() {
      _Map?.on('zoomchange', () => {
        emit('update:zoom', _Map?.getZoom())
      })
      _Map?.on('dragging', () => {
        emit('update:center', getCenter())
        emit('update:pitch', _Map?.getPitch())
      })

      _Map?.on('rotatechange', () => {
        emit('update:center', _Map?.getRotation())
        emit('update:pitch', _Map?.getPitch())
      })
      _Map?.on('touchmove', () => {
        emit('update:center', getCenter())
      })
    }

    function getCenter() {
      const center = _Map?.getCenter()
      return [center?.lng, center?.lat]
    }
    function renderSlot() {
      return slots.default?.()
    }
    linkChildren({
      getInstance,
    })
    return () => (
      <div class={style['el-amap-container']}>
        <div ref={domRef} class={style['el-amap']}></div>
        { isComplete.value && renderSlot()}
      </div>
    )
  },
})
