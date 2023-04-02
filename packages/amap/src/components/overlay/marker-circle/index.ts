import _ElMarkerCircle from './circle'
import { withInstall } from '@/utils'
export type { ElMarkerCircleProps } from './circle'
export const ElMarkerCircle = withInstall(_ElMarkerCircle, 'el-marker-circle')
export interface ElMarkerCircleExpose {
  /** 获取 ElMarkerCircle实例 */
  getInstance: () => AMap.CircleMarker | null
}
declare module 'vue' {
  export interface GlobalComponents {
    ElMarkerCircle: typeof ElMarkerCircle
  }
}
