import _ElAmap from './amap'
import { withInstall } from '@/utils'
export type { ElAmapExpose } from './types'
export type { ElAmapProps } from './amap'

export const ElAmap = withInstall(_ElAmap, 'el-amap')
declare module 'vue' {
  export interface GlobalComponents {
    ElAmap: typeof ElAmap
  }
}
