import type { ComponentPublicInstance } from 'vue'

export interface AmapProvide {
  getInstance: () => AMap.Map | null
}

export interface ElAmapExpose {
  destroy: () => void
  getInstance: () => AMap.Map | null
}

export type CheckboxInstance = ComponentPublicInstance<
  ElAmapExpose
>
