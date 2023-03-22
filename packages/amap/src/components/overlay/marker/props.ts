import type { PropType } from 'vue'
import type { anchorType, cursorType } from './types'
import { makeStringProp } from '@/utils/props'
export interface LabelOptions {
  content: string
  offset: [number, number]
  direction: 'top' | 'right' | 'bottom' | 'left' | 'center'
}
export default {
  /** 点标记是否可见，默认值：true */
  visible: {
    type: Boolean,
    default: true,
  },
  /** 点标记在地图上显示的位置 */
  position: {
    type: Array as unknown as PropType<AMap.Vector2 | AMap.LngLat>,
  },
  /** 在点标记中显示的图标。可以传一个图标地址，也可以传Icon对象。有合法的content内容设置时，此属性无效。 */
  icon: {
    type: Object as unknown as PropType<AMap.Icon | string>,
  },
  /** 鼠标滑过点标记时的文字提示。不设置则鼠标滑过点标无文字提示。 */
  title: {
    type: String,
  },
  /** 添加文本标注 */
  label: {
    type: Object as unknown as PropType<LabelOptions>,
  },
  /** 点标记是否可点击，默认值: true */
  clickable: {
    type: Boolean,
    default: true,
  },
  /** 指定鼠标悬停时的值，默认值：'pointer' */
  cursor: makeStringProp<cursorType>('pointer'),
  /** 设置点标记是否可拖拽移动，默认值：false */
  draggable: {
    type: Boolean,
    default: false,
  },
  /** 鼠标点击时marker是否置顶，默认false ，不置顶 */
  topWhenClick: {
    type: Boolean,
    default: false,
  },
  /** 事件是否冒泡，默认为 false */
  bubble: {
    type: Boolean,
    default: false,
  },
  /** 点标记显示内容。可以是HTML要素字符串或者HTML DOM对象。content有效时，icon属性将被覆盖。 */
  content: {
    type: [String, HTMLElement] as unknown as PropType<HTMLElement | string>,
  },
  /** 点标记的叠加顺序。地图上存在多个点标记叠加时，通过该属性使级别较高的点标记在上层显示，默认zIndex：12 */
  zIndex: {
    type: Number,
    default: 12,
  },
  /** 点标记显示位置偏移量，默认值为 [0,0] 。Marker指定position后，默认以marker左上角位置为基准点（若设置了anchor，则以anchor设置位置为基准点），对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。 */
  offset: {
    type: [Array, Object] as unknown as PropType<AMap.Vector2 | AMap.Pixel>,
  },
  /**  点标记的旋转角度，，广泛用于改变车辆行驶方向。默认值：0 */
  angle: {
    type: Number,
    default: 0,
  },
  /** 点标记显示的层级范围，超过范围不显示。默认值：zooms: [2, 20] */
  zooms: {
    type: Array as unknown as PropType<AMap.Vector2>,
    default: [2, 20],
  },
  /** 设置Marker点是否离地绘制，默认值为0，等于0时贴地绘制。大于0时离地绘制，此时Marker点高度等于height值加Marker点高程值（JSAPI v2.1新增属性目前只适用于v2.1版本）。 */
  height: {
    type: Number,
    default: 0,
  },
  /** 用户自定义属性 ，支持JavaScript API任意数据类型，如 Marker的id等。可将自定义数据保存在该属性上，方便后续操作使用。 */
  extData: {
    type: Object as unknown as PropType<any>,
  },
  /** 设置点标记锚点，可选值：'top-left','top-center','top-right', 'middle-left', 'center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right' */
  anchor: makeStringProp<anchorType>('top-left'),
  /** 鼠标左键单击事件 */
  onClick: Function,
  /** 鼠标左键双击事件 */
  onDblclick: Function,
  /** 鼠标右键单击事件 */
  onRightclick: Function,
  /** 鼠标移动事件 */
  onMousemove: Function,
  /** 鼠标移近点标记时触发事件 */
  onMouseover: Function,
  /** 鼠标移出点标记时触发事件 */
  onMouseout: Function,
  /** 鼠标在点标记上按下时触发事件 */
  onMousedown: Function,
  /** 鼠标在点标记上按下后抬起时触发事件 */
  onMouseup: Function,
  /** 开始拖拽点标记时触发事件 */
  onDragstart: Function,
  /** 开始拖拽点标记时触发事件 */
  onDragging: Function,
  /** 点标记拖拽移动结束触发事件 */
  onDragend: Function,
  /** 点标记在执行moveTo，moveAlong动画时触发事件，Object对象的格式是{passedPath:Array.}。其中passedPath为对象在moveAlong或者moveTo过程中走过的路径。 */
  onMoving: Function,
  /** 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发 */
  onMoveend: Function,
  /** 点标记执行moveAlong动画一次后触发事件 */
  onMovealong: Function,
  /** 触摸开始时触发事件，仅适用移动设备 */
  onTouchstart: Function,
  /** 触摸移动进行中时触发事件，仅适用移动设备 */
  onTouchmove: Function,
  /** 触摸结束时触发事件，仅适用移动设备 */
  onTouchend: Function,
}
