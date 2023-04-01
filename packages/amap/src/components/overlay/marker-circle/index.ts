import _ElMarkerCircle from './circle'
import { withInstall } from '@/utils'
export type { ElMarkerCircleProps } from './circle'
export const ElMarkerCircle = withInstall(_ElMarkerCircle, 'el-marker-circle')

declare module 'vue' {
  export interface GlobalComponents {
    ElMarkerCircle: typeof ElMarkerCircle
  }
}
