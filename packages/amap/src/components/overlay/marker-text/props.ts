import type { PropType } from 'vue'
import props from '@/components/overlay/marker/props'
export interface LabelOptions {
  content: string
  offset: [number, number]
  direction: 'top' | 'right' | 'bottom' | 'left' | 'center'
}
export default {
  ...props,
  /** 标记显示的文本内容 */
  text: {
    type: String,
    default: '',
  },
  /** 设置文本样式，Object同css样式表，如:{'background-color':'red'} */
  style: {
    type: Object as unknown as PropType<any>,
  },
}
