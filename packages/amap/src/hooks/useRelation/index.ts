import type { InjectionKey } from 'vue'
import type { AmapProvide } from '@/components/amap/types'

export * from './useParent'
export * from './useChildren'
export const ElAmap_KEY: InjectionKey<AmapProvide> = Symbol('el-amap')
