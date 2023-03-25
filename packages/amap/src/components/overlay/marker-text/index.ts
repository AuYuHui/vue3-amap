import _ElMarkerText from './text'
import { withInstall } from '@/utils'
export type { ElMarkerTextProps } from './text'
export const ElMarkerText = withInstall(_ElMarkerText, 'el-marker-text')

declare module 'vue' {
  export interface GlobalComponents {
    ElMarkerText: typeof ElMarkerText
  }
}
