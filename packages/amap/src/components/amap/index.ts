import _ElAmap from './amap'
import { withInstall } from '@/utils'

export const ElAmap = withInstall(_ElAmap, 'el-amap')
export type { ElAmapExpose } from './types'
declare module 'vue' {
  export interface GlobalComponents {
    ElAmap: typeof ElAmap
  }
}
