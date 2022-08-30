import axios from 'axios';
import type { HYRequestConfig, HYrequestInterceptors } from './type';
import type { AxiosInstance } from 'axios';

export class HYrequest {
  instance: AxiosInstance;
  HYinterceptors?: HYrequestInterceptors;
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.HYinterceptors = config.HYinterceptors;
    this.instance.interceptors.request.use(
      this.HYinterceptors?.requestInterceptor,
      this.HYinterceptors?.requestInterceptorError
    );
    this.instance.interceptors.response.use(
      this.HYinterceptors?.responseInterceptor,
      this.HYinterceptors?.responseInterceptorError
    );
    //默认拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  get<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  put<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' });
  }
}
