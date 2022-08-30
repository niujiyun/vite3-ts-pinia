import { Request } from '@/service/index';
import type { Account } from '@/views/login/type';
import type { RoleItem } from './type';
export function login(data: Account) {
  return Request.post({
    url: '/login',
    data
  });
}
export function role(data: RoleItem) {
  return Request.post({
    url: '/role',
    data
  });
}
