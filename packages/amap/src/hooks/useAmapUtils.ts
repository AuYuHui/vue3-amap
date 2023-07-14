import { reactive, watch } from 'vue'

export function useAmapUtils() {
  function useSetStatus<T extends { getStatus: () => any; setStatus: (opt: any) => void }, F = {}>(
    instance: T,
    props = {} as F,
    propsName: string[] = [],
  ) {
    propsName.forEach((name) => {
      const eName = name as keyof F
      const state = reactive({
        [eName]: props[eName],
      })
      watch([instance, props[eName]], () => {
        if (instance && props[eName] !== undefined) {
          if (props[eName] !== state[eName as string]) {
            const status = instance.getStatus()
            instance.setStatus({ ...status, [eName]: props[eName] })
            // setState(props[eName])
            state[eName as string] = props[eName]
          }
        }
      })
    })
  }

  return {
    useSetStatus,
  }
}
