import type { PropType } from 'vue'
import type { cursorType } from '../marker/types'
import { makeStringProp } from '@/utils/props'

export default {
  /** 圆心位置 */
  center: {
    type: Array as unknown as PropType<AMap.LngLat | [number, number]>,
  },
  /** 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示 默认zIndex:10 */
  zIndex: {
    type: Number,
    default: 10,
  },
  /** 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增） */
  bubble: {
    type: Boolean,
    default: false,
  },
  /** 指定鼠标悬停时的值，默认值：'pointer' */
  cursor: makeStringProp<cursorType>('pointer'),
  /** 圆半径，单位:px 最大值64 */
  radius: {
    type: Number,
  },
  /** 线条颜色，使用16进制颜色代码赋值。默认值为#006600 */
  strokeColor: {
    type: String,
    default: '#006600',
  },
  /** 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9 */
  strokeOpacity: {
    type: Number,
    default: 0.9,
  },
  /** 轮廓线宽度 */
  strokeWeight: {
    type: Number,
  },
  /** 圆形填充颜色,使用16进制颜色代码赋值。默认值为#006600 */
  fillColor: {
    type: String,
    default: '#006600',
  },
  /** 圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9  */
  fillOpacity: {
    type: Number,
    default: 0.9,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  /** 用户自定义属性，支持JavaScript API任意数据类型，如Circle的id等 */
  extData: {
    type: Object as unknown as PropType<any>,
  },
  /** 鼠标左键单击事件 */
  onClick: Function,
  /** 鼠标左键双击事件 */
  onDblclick: Function,
  /** 鼠标右键单击事件 */
  onRightclick: Function,
  /** 隐藏 */
  onHide: Function,
  /** 显示 */
  onShow: Function,
  /** 鼠标移近点标记时触发事件 */
  onMouseover: Function,
  /** 鼠标移出点标记时触发事件 */
  onMouseout: Function,
  /** 鼠标在点标记上按下时触发事件 */
  onMousedown: Function,
  /** 鼠标在点标记上按下后抬起时触发事件 */
  onMouseup: Function,
  /** 属性发生变化时 */
  onChange: Function,
  /** 触摸开始时触发事件，仅适用移动设备 */
  onTouchstart: Function,
  /** 触摸移动进行中时触发事件，仅适用移动设备 */
  onTouchmove: Function,
  /** 触摸结束时触发事件，仅适用移动设备 */
  onTouchend: Function,
}
