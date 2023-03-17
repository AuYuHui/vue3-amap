import { getCurrentInstance } from 'vue'

export const extend = Object.assign
// expose public api
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance)
    extend(instance.proxy as object, apis)
}
