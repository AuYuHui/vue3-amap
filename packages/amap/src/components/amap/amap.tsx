import type { ExtractPropTypes } from 'vue'
import { defineComponent, effectScope, onBeforeUnmount, onMounted, onScopeDispose, ref, watch } from 'vue'
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
        emit('update:center', getCenter())
      })
      _Map?.on('dragging', () => {
        emit('update:center', getCenter())
      })

      _Map?.on('rotatechange', () => {
        emit('update:pitch', _Map?.getPitch())
        emit('update:rotation', _Map?.getRotation())
      })
      _Map?.on('touchmove', () => {
        emit('update:center', getCenter())
      })
    }
    const scope = effectScope()

    scope.run(() => {
      /**
       * 监听 zoom，改变地图缩放级别
       */
      watch(() => props.zoom, (val) => {
        _Map?.setZoom(val)
      })

      /**
       * 监听 pitch，设置地图俯仰角
       */
      watch(() => props.pitch, (val) => {
        _Map?.setPitch(val)
      })
      /**
       * 监听 rotation，设置地图顺时针旋转角度, 旋转原点为地图容器中心点, 取值范围: 任意数字
       */
      watch(() => props.rotation, (val) => {
        _Map?.setRotation(val)
      })
    })

    function getCenter() {
      const center = _Map?.getCenter()
      return [center?.lng, center?.lat]
    }
    // 渲染插槽
    function renderSlot() {
      return slots.default?.()
    }

    linkChildren({
      getInstance,
    })

    onScopeDispose(() => {
      scope.stop()
    })
    return () => (
      <div class={style['el-amap-container']} >
        <div ref={domRef} class={style['el-amap']}></div>
        { isComplete.value && renderSlot()}
      </div>
    )
  },
})
