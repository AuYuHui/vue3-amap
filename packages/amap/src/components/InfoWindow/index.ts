import _ElInfoWindow from './InfoWindow'
import { withInstall } from '@/utils'
export type { ElInfoWindowProps } from './InfoWindow'
export interface ElInfoWindowExpose {
  /** 获取 ElInfoWindow 实例 */
  getInstance: () => AMap.InfoWindow | null
}
export const ElElInfoWindow = withInstall(_ElInfoWindow, 'el-info-window')
declare module 'vue' {
  export interface GlobalComponents {
    ElElInfoWindow: typeof ElElInfoWindow
  }
}
