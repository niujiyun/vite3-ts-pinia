import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HYrequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorError?: (config: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorError?: (config: any) => any;
}
export interface HYRequestConfig extends AxiosRequestConfig {
  HYinterceptors?: HYrequestInterceptors;
}
