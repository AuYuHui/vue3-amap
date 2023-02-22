import type { ComponentObjectPropsOptions } from 'vue'

/**
 * 初始化组件属性
 * @param props
 * @description 返回值为any是为了解决defineComponent传递范型参数有类型的问题
 */
export function initProps<Props>(props: ComponentObjectPropsOptions<Props>): any {
  return props
}
