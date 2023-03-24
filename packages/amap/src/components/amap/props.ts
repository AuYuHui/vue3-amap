import type { PropType } from 'vue'
import type { cursorType } from '@/components/overlay/marker/types'
import { makeStringProp } from '@/utils/props'

export default {
  /** 初始中心经纬度 */
  center: {
    type: Array as unknown as PropType<[number, number]>,
    default: () => [116.397428, 39.90923],
  },
  /** 地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。 */
  zoom: {
    type: Number,
    default: 11,
  },
  /** 地图顺时针旋转角度，取值范围 [0-360] ，默认值：0。 */
  rotation: {
    type: Number,
    default: 0,
  },
  /** 俯仰角度，默认 0，最大值根据地图当前 zoom 级别不断增大，2D地图下无效 。 */
  pitch: {
    type: Number,
    default: 0,
  },
  /** 地图视图模式，默认为‘2D’，可选’3D’，选择‘3D’会显示 3D 地图效果。 */
  viewMode: {
    type: String as unknown as PropType<'2D' | '3D'>,
    default: '2D',
  },
  /** 地图是否展示地形，此属性适用于 3D 地图。默认为值 false 不展示地形，可选 true ，选择 true 会展示地形效果。(注意：此属性适用于 JSAPI v2.1Beta 及以上版本)。 */
  terrain: {
    type: Boolean,
    default: false,
  },
  /** 设置地图上显示的元素种类, 支持'bg'（地图背景）、'point'（POI点）、'road'（道路）、'building'（建筑物） */
  features: {
    type: Array as unknown as PropType<string[]>,
    default: () => ['bg', 'point', 'road', 'building'],
  },
  /** 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图。 当叠加多个 图层 时，普通二维地图需通过实例化一个TileLayer类实现。 如果你希望创建一个默认底图图层，使用 AMap.createDefaultLayer() */
  layers: {
    type: Array as unknown as PropType<any[]>,
  },
  /** 地图显示的缩放级别范围, 默认为 [2, 20] ，取值范围 [2 ~ 30] */
  zooms: {
    type: Array as unknown as PropType<[number, number]>,
    default: () => [2, 20],
  },
  /** 地图是否可通过鼠标拖拽平移, 默认为 true。此属性可被 setStatus/getStatus 方法控制。 */
  dragEnable: {
    type: Boolean,
    default: true,
  },
  /** 地图是否可缩放，默认值为 true。此属性可被 setStatus/getStatus 方法控制 */
  zoomEnable: {
    type: Boolean,
    default: true,
  },
  /** 地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制 */
  jogEnable: {
    type: Boolean,
    default: true,
  },
  /** 是否允许设置俯仰角度, 3D 视图下为 true, 2D 视图下无效。 */
  pitchEnable: {
    type: Boolean,
    default: true,
  },
  /** 地图是否可旋转, 图默认为true */
  rotateEnable: {
    type: Boolean,
    default: true,
  },
  /** 地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数, 将对地图产生平移操作, 是否使用动画平移的效果）, 默认为true, 即使用动画 */
  animateEnable: {
    type: Boolean,
    default: true,
  },
  /** 地图是否可通过键盘控制, 默认为true, 方向键控制地图平移，"+"和"-"可以控制地图的缩放, Ctrl+“→”顺时针旋转，Ctrl+“←”逆时针旋转。此属性可被setStatus/getStatus 方法控制 */
  keyboardEnable: {
    type: Boolean,
    default: true,
  },
  /** 地图是否可通过双击鼠标放大地图, 默认为true。此属性可被setStatus/getStatus 方法控制 */
  doubleClickZoom: {
    type: Boolean,
    default: true,
  },
  /** 地图是否可通过鼠标滚轮缩放浏览，默认为true。此属性可被setStatus/getStatus 方法控制 */
  scrollWheel: {
    type: Boolean,
    default: true,
  },
  /** 地图在移动终端上是否可通过多点触控缩放浏览地图，默认为true。关闭手势缩放地图，请设置为false。 */
  touchZoom: {
    type: Boolean,
    default: true,
  },
  /** 可缺省，当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心。 */
  touchZoomCenter: {
    type: Number,
    default: 1,
  },
  /** 是否展示地图文字和 POI 信息。 */
  showLabel: {
    type: Boolean,
    default: true,
  },
  /**  地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。 */
  defaultCursor: makeStringProp<cursorType>('default'),
  /** 是否开启地图热点和标注的 hover 效果。PC端默认是true, 移动端默认是 false。 */
  isHotspot: {
    type: Boolean,
    default: true,
  },
  /** 设置地图的显示样式，目前支持两种地图样式： 第一种：自定义地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86" 可前往地图自定义平台定制自己的个性地图样式； 第二种：官方样式模版,如"amap://styles/grey"。 其他模版样式及自定义地图的使用说明见开发指南 */
  mapStyle: {
    type: String,
    default: '',
  },
  /** 地图楼块的侧面颜色 */
  wallColor: {
    type: [String, Number] as unknown as PropType<string | number[]>,
  },
  /** 地图楼块的侧面颜色 */
  roofColor: {
    type: [String, Number] as unknown as PropType<string | number[]>,
  },
  /** 是否展示地图 3D 楼块，默认 true */
  showBuildingBlock: {
    type: Boolean,
    default: true,
  },
  /** 是否自动展示室内地图，默认是 false */
  showIndoorMap: {
    type: Boolean,
    default: false,
  },
  /** 天空颜色，3D 模式下带有俯仰角时会显示 */
  skyColor: {
    type: [String, Number] as unknown as PropType<string | number[]>,
  },
  /** 文字是否拒绝掩模图层进行掩模 */
  labelRejectMask: {
    type: Boolean,
    default: false,
  },
  /** 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像，3D视图下有效。 格式为一个经纬度的一维、二维或三维数组。 */
  mask: {
    type: Array as unknown as PropType<any[]>,
  },
  /** 额外配置的WebGL参数 eg: preserveDrawingBuffer */
  WebGLParams: {
    type: Object as unknown as PropType<any>,
  },
  /** 地图容器尺寸改变事件 */
  onResize: Function,
  /** 地图资源加载完成后触发事件 */
  onComplete: Function,
  /** 鼠标左键单击事件 */
  onClick: Function,
  /** 鼠标左键双击事件 */
  onDblclick: Function,
  /** 地图平移时触发事件 */
  onMapmove: Function,
  /** 鼠标点击热点时触发 */
  onHotspotclick: Function,
  /** 鼠标滑过热点时触发 */
  onHotspotover: Function,
  /** 鼠标移出热点时触发 */
  onHotspotout: Function,
  /** 地图缩放级别更改后触发 */
  onZoomchange: Function,
  /** 缩放开始时触发 */
  onZoomstart: Function,
  /** 缩放结束时触发 */
  onZoomend: Function,
  /** 地图旋转 rotation 更改后触发 */
  onRotatechange: Function,
  /** 地图旋转 rotation 开始时触发 */
  onRotatestart: Function,
  /** 地图旋转 rotation 结束时触发 */
  onRotateend: Function,
  /** 鼠标在地图上移动时触发 */
  onMousemove: Function,
  /** 鼠标滚轮开始缩放地图时触发 */
  onMousewheel: Function,
  /** 鼠标移入地图容器内时触发 */
  onMouseover: Function,
  /** 鼠标移出地图容器时触发 */
  onMouseout: Function,
  /** 鼠标在地图上单击按下时触发 */
  onMousedown: Function,
  /** 鼠标在地图上单击抬起时触发 */
  onMouseup: Function,
  /** 鼠标右键单击事件 */
  onRightclick: Function,
  /** 开始拖拽地图时触发 */
  onDragstart: Function,
  /** 拖拽地图过程中触发 */
  onDragging: Function,
  /** 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 */
  onDragend: Function,
  /** 地图平移开始时触发 */
  onMovestart: Function,
  /** 地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发 */
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
