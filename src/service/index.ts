import { HYrequest } from './request/index';
export const Request = new HYrequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  HYinterceptors: {
    requestInterceptor: (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    }
  }
});
