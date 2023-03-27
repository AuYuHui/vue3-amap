import type { ExtractPropTypes } from 'vue'
import { defineComponent, watch } from 'vue'
import props from './props'
import { useParent } from '@/hooks'
import { useExpose } from '@/hooks/useExpose'
export type ElMarkerTextProps = Partial<ExtractPropTypes<typeof props>> & Record<string, any>
export default defineComponent({
  name: 'ElMarkerText',
  props: { ...props },

  setup(props, { emit }) {
    const { parent } = useParent()
    if (!parent)
      return
    const map = parent.getInstance()
    const text = new AMap.Text({ ...props })
    // 绑定事件
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && { ...props }[key]) {
        const newKey = key.replace(/^on/, '').replace(/([A-Z])/g, (match, p1) => `${p1.toLowerCase()}`)
        text.on(newKey as AMap.EventType, (e: AMap.Text) => {
          emit(newKey, e)
        })
      }
    })
    text.setMap(map)

    /**
     *
     * @returns 返回 ElMarkerText 实例
     */
    function getInstance() {
      return text
    }

    useExpose({
      getInstance,
    })
    /**
     * 监听 text文本，改变内容
     */
    watch(() => props.text, (val) => {
      text.setText(val)
    })

    return () => (<div></div>)
  },
})
