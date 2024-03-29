import { load } from '@amap/amap-jsapi-loader'
import type { LoaderOptions } from '@/types/amap'
const inBrowser = typeof window !== 'undefined'
let initAmap: typeof AMap | null = null
export function useAmap() {
  /**
  *
  * @param config 配置项
  * @returns
  */
  async function initAMapApiLoader(config: LoaderOptions): Promise<typeof AMap | null> {
    if (initAmap)
      return initAmap
    try {
      const Amap = await load(config)
      if (inBrowser) {
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
      }
      initAmap = Amap
    }
    catch (error) {
      console.warn('地图初始化失败', error)
    }
    return initAmap
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
