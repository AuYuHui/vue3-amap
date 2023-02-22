import type { PropType } from 'vue'
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

import style from './amap.module.css'
import type { ElAmapProps } from './types'
import { initProps } from '@/utils'
export default defineComponent<ElAmapProps>({
  name: 'ElAmap',
  props: initProps<ElAmapProps>({
    center: {
      type: Array as unknown as PropType<[number, number]>,
      default: () => [114.05834626586915, 22.546789983033168],
    },
    zoom: {
      type: Number,
      default: 11,
    },
    viewMode: {
      type: String,
      default: '2D',
    },
  }),
  setup(props, { slots, expose }) {
    const domRef = ref<HTMLDivElement>()
    let _Map: AMap.Map | null = null
    function init() {
      if (!domRef.value)
        return
      _Map = new AMap.Map(domRef.value, {
        ...props,
      })
      _Map.getCenter()
    }
    // 方法销毁
    function destroy() {
      _Map?.destroy()
    }
    // 导出方法
    expose({
      _Map,
      destroy,
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
    return () => (
        <div class={style['el-amap-container']}>
            <div ref={domRef} class={style['el-amap']}></div>
            { slots.default?.()}
        </div>
    )
  },
})
