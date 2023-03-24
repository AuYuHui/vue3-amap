import _ElMarker from './marker'
import { withInstall } from '@/utils'
export * from './types'
export type { ElMarkerProps } from './marker'
export const ElMarker = withInstall(_ElMarker, 'el-marker')

declare module 'vue' {
  export interface GlobalComponents {
    ElMarker: typeof ElMarker
  }
}
