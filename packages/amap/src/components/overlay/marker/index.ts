import _ElMarker from './marker'
import { withInstall } from '@/utils'
export * from './types'
export type { MarkerProps } from './marker'
export const ElMarker = withInstall(_ElMarker, 'el-marker')
export default ElMarker
