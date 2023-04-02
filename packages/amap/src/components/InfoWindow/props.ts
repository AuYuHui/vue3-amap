import type { PropType } from 'vue'
import type { anchorType } from '../overlay/marker/types'
import { makeStringProp } from '@/utils/props'

export default {
  /** 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加（默认为false，即在系统默认的信息窗体外框中显示content内容） */
  isCustom: {
    type: Boolean,
    default: false,
  },
  /** 是否自动调整窗体到视野内 默认 false（当信息窗体超出视野范围时，通过该属性设置是否自动平移地图，使信息窗体完全显示） */
  autoMove: {
    type: Boolean,
    default: false,
  },
  /** 控制是否在鼠标点击地图后关闭信息窗体，默认false，鼠标点击地图后不关闭信息窗体 */
  closeWhenClickMap: {
    type: Boolean,
    default: false,
  },
  /** 显示内容，可以是HTML要素字符串或者HTMLElement对象 */
  content: {
    type: String as unknown as PropType<HTMLElement | string>,
  },
  /** 信息窗体尺寸（isCustom为true时，该属性无效） */
  size: {
    type: Array as unknown as PropType<AMap.Size | [number, number]>,
  },
  /** 信息窗体锚点。 */
  anchor: makeStringProp<anchorType>('bottom-center'),
  /** 信息窗体显示位置偏移量。默认基准点为信息窗体的底部中心（若设置了anchor，则以anchor值为基准点）。 */
  offset: {
    type: [Array, Object] as unknown as PropType<AMap.Vector2 | AMap.Pixel>,
  },
  /** 信息窗体显示基点位置 */
  position: {
    type: Array as unknown as PropType<AMap.Vector2>,
  },
  /** Boolean 控制是否显示信息窗体阴影，取值false时不显示窗体阴影，取值true时显示窗体阴影 默认值：false */
  showShadow: {
    type: Boolean,
    default: false,
  },
  /** 信息窗体关闭时，是否将其Dom元素从页面中移除，默认为false */
  retainWhenClose: {
    type: Boolean,
    default: false,
  },
  /** 信息窗体打开之后触发事件 */
  onOpen: Function,
  /** 信息窗体关闭之后触发事件 */
  onClose: Function,
}
