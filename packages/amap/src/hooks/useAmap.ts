import { load } from '@amap/amap-jsapi-loader'
import type { LoaderOptions } from '@/types/amap'
export function useAmap() {
  let initAmap: typeof AMap | null = null
  function initAMapApiLoader(config: LoaderOptions) {
    return new Promise<typeof AMap>((resolve, reject) => {
      if (initAmap)
        return resolve(initAmap)
      load(config).then((Amap) => {
        if (config.securityJsCode) {
          window._AMapSecurityConfig = {
            securityJsCode: config.securityJsCode,
          }
        }
        if (config.serviceHost) {
          window._AMapSecurityConfig = {
            serviceHost: config.serviceHost,
          }
        }
        initAmap = Amap
        resolve(Amap)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  return {
    initAMapApiLoader,
  }
}
