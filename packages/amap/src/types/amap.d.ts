/// <reference types="@amap/amap-jsapi-types" />
export interface LoaderOptions {
  key: string;
  version: string;
  plugins?: string[];
  AMapUI?: {
    version?: string;
    plugins?: string[];
  };
  Loca?: {
    version?: string;
  };
  serviceHost?: string,
  securityJsCode?: string
  [key: string]: any
}
declare namespace AMapLoader {
  /**
   * @param key '申请好的Web端开发者Key，首次调用 load 时必填'
   * @param version '指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15'
   * @param plugins '需要使用的的插件列表，如比例尺'AMap.Scale'等'
   * @param AMapUI '是否加载 AMapUI，缺省不加载'
   * @param Loca '是否加载 Loca， 缺省不加载'
   * @param serviceHost '您的代理服务器域名或地址/_AMapService'
   * @param securityJsCode '您申请的安全密钥'
   */
  function load(options: LoaderOptions): Promise<void>;
  
}