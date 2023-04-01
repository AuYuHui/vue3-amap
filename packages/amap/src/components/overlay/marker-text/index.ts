import _ElMarkerText from './text'
import { withInstall } from '@/utils'
export type { ElMarkerTextProps } from './text'
export interface ElMarkerTextExpose {
  /** 获取 MarkerText实例 */
  getInstance: () => AMap.Text | null
}
export const ElMarkerText = withInstall(_ElMarkerText, 'el-marker-text')

declare module 'vue' {
  export interface GlobalComponents {
    ElMarkerText: typeof ElMarkerText
  }
}
