import type { ComponentPublicInstance } from 'vue'
import type { cursorType } from '@/components/overlay/marker/types'
export interface Props {
  /** 初始中心经纬度 */
  center: [number, number]
  /** 地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。 */
  zoom: number
  /** 地图顺时针旋转角度，取值范围 [0-360] ，默认值：0。 */
  rotation: number
  /** 俯仰角度，默认 0，最大值根据地图当前 zoom 级别不断增大，2D地图下无效 。 */
  pitch: number
  /** 地图视图模式，默认为‘2D’，可选’3D’，选择‘3D’会显示 3D 地图效果。 */
  viewMode: '2D' | '3D'
  /** 地图是否展示地形，此属性适用于 3D 地图。默认为值 false 不展示地形，可选 true ，选择 true 会展示地形效果。(注意：此属性适用于 JSAPI v2.1Beta 及以上版本)。 */
  terrain: boolean
  /** 设置地图上显示的元素种类, 支持'bg'（地图背景）、'point'（POI点）、'road'（道路）、'building'（建筑物） */
  features: string[]
  /** 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图。 当叠加多个 图层 时，普通二维地图需通过实例化一个TileLayer类实现。 如果你希望创建一个默认底图图层，使用 AMap.createDefaultLayer() */
  layers: any[]
  /** 地图显示的缩放级别范围, 默认为 [2, 20] ，取值范围 [2 ~ 30] */
  zooms: [number, number]
  /** 地图是否可通过鼠标拖拽平移, 默认为 true。此属性可被 setStatus/getStatus 方法控制。 */
  dragEnable: boolean
  /** 地图是否可缩放，默认值为 true。此属性可被 setStatus/getStatus 方法控制 */
  zoomEnable: boolean
  /** 地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制 */
  jogEnable: boolean
  /** 是否允许设置俯仰角度, 3D 视图下为 true, 2D 视图下无效。 */
  pitchEnable: boolean
  /** 地图是否可旋转, 图默认为true */
  rotateEnable: boolean
  /** 地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数, 将对地图产生平移操作, 是否使用动画平移的效果）, 默认为true, 即使用动画 */
  animateEnable: boolean
  /** 地图是否可通过键盘控制, 默认为true, 方向键控制地图平移，"+"和"-"可以控制地图的缩放, Ctrl+“→”顺时针旋转，Ctrl+“←”逆时针旋转。此属性可被setStatus/getStatus 方法控制 */
  keyboardEnable: boolean
  /** 地图是否可通过双击鼠标放大地图, 默认为true。此属性可被setStatus/getStatus 方法控制 */
  doubleClickZoom: boolean
  /** 地图是否可通过鼠标滚轮缩放浏览，默认为true。此属性可被setStatus/getStatus 方法控制 */
  scrollWheel: boolean
  /** 地图在移动终端上是否可通过多点触控缩放浏览地图，默认为true。关闭手势缩放地图，请设置为false。 */
  touchZoom: boolean
  /** 可缺省，当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心。 */
  touchZoomCenter: number
  /** 是否展示地图文字和 POI 信息。 */
  showLabel: boolean
  /**  地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。 */
  defaultCursor: cursorType
  /** 是否开启地图热点和标注的 hover 效果。PC端默认是true, 移动端默认是 false。 */
  isHotspot: boolean
  /** 设置地图的显示样式，目前支持两种地图样式： 第一种：自定义地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86" 可前往地图自定义平台定制自己的个性地图样式； 第二种：官方样式模版,如"amap://styles/grey"。 其他模版样式及自定义地图的使用说明见开发指南 */
  mapStyle: string
  /** 地图楼块的侧面颜色 */
  wallColor: string | number[]
  /** 地图楼块的顶面颜色 */
  roofColor: string | number[]
  /** 是否展示地图 3D 楼块，默认 true */
  showBuildingBlock: boolean
  /** 是否自动展示室内地图，默认是 false */
  showIndoorMap: boolean
  /** 天空颜色，3D 模式下带有俯仰角时会显示 */
  skyColor: string | number[]
  /** 文字是否拒绝掩模图层进行掩模 */
  labelRejectMask: boolean
  /** 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像，3D视图下有效。 格式为一个经纬度的一维、二维或三维数组。 */
  mask: any[]
  /** 额外配置的WebGL参数 eg: preserveDrawingBuffer */
  WebGLParams: any
}

export interface AmapProvide {
  getInstance: () => AMap.Map | null
}

export interface ElAmapExpose {
  destroy: () => void
  getInstance: () => AMap.Map | null
}

export type CheckboxInstance = ComponentPublicInstance<
  ElAmapExpose
>
