import { load } from '@amap/amap-jsapi-loader'
import type { LoaderOptions } from '@/types/amap'
export function useAmap() {
  let initAmap: typeof AMap | null = null
  /**
  *
  * @param config 配置项
  * @returns
  */
  function initAMapApiLoader(config: LoaderOptions) {
    return new Promise<typeof AMap>((resolve, reject) => {
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
  /**
   *
   * @returns 实例对象
   */
  function getInstance() {
    return initAmap
  }

  return {
    initAMapApiLoader,
    getInstance,
  }
}
