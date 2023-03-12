import type {
  ComponentInternalInstance,
  ComponentPublicInstance,
  InjectionKey,

} from 'vue'
import {
  computed,
  getCurrentInstance,
  inject,
  onUnmounted,
  ref,
} from 'vue'

import type { AmapProvide } from '@/components/amap/types'
// Map_key
export const ElAmap_KEY: InjectionKey<AmapProvide> = Symbol('el-amap')

type ParentProvide = AmapProvide & {
  link(child: ComponentInternalInstance): void
  unlink(child: ComponentInternalInstance): void
  children: ComponentPublicInstance[]
  internalChildren: ComponentInternalInstance[]
}

export function useParent(key: InjectionKey<ParentProvide> = ElAmap_KEY) {
  const parent = inject(key, null)

  if (parent) {
    const instance = getCurrentInstance()!
    const { link, unlink, internalChildren } = parent

    link(instance)
    onUnmounted(() => unlink(instance))

    const index = computed(() => internalChildren.indexOf(instance))

    return {
      parent,
      index,
    }
  }

  return {
    parent: null,
    index: ref(-1),
  }
}
