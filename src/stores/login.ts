import { defineStore } from 'pinia';
import { login, role } from '@/service/login/index';
import type { Account } from '@/views/login/type';
import { filterRouter } from '@/utils/map-menu';
import router from '@/router';
interface LoginConfig {
  token: string;
  useInfo: any;
  menu: any;
  collapse: boolean;
}

export const useLogin = defineStore({
  id: 'login',
  state: (): LoginConfig => ({
    token: '',
    useInfo: {},
    menu: [],
    collapse: false
  }),
  getters: {},
  actions: {
    async LoginInfo(account: Account) {
      const res = await login(account);
      console.log(res);
      const res2 = await role({ id: res.data.userInfo.userId });
      console.log(res2);

      this.setToken(res.data.token);
      this.setUserInfo(res.data.userInfo);
      this.setMenu(res2.data.list);
      router.push('/main');
    },
    filterRouters(list: any) {
      const routers = filterRouter(list);
      routers.forEach((item) => {
        router.addRoute('main', item);
      });
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    setUserInfo(val: any) {
      this.useInfo = val;
      localStorage.setItem('useInfo', JSON.stringify(val));
    },
    setMenu(list: any) {
      this.menu = list;
      localStorage.setItem('menu', JSON.stringify(list));
      this.filterRouters(list);
    },
    getDataAsync() {
      const token = localStorage.getItem('token');
      if (token) {
        this.setToken(token);
      }
      const localUseInfo = localStorage.getItem('useInfo');
      if (localUseInfo) {
        const useInfo = JSON.parse(localUseInfo);
        if (useInfo) {
          this.setUserInfo(useInfo);
        }
      }
      const localList = localStorage.getItem('menu');
      if (localList) {
        const list = JSON.parse(localList);
        if (list) {
          this.setMenu(list);
        }
      }
    }
  }
});
