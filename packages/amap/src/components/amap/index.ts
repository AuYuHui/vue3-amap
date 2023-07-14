import _ElAmap from './amap.vue'
import type { Props } from './types'
import { withInstall } from '@/utils'
export type { ElAmapExpose } from './types'

export type ElAmapProps = Partial<Props> & Record<string, any>
export const ElAmap = withInstall(_ElAmap, 'el-amap')

declare module 'vue' {
  export interface GlobalComponents {
    ElAmap: typeof ElAmap
  }
}
