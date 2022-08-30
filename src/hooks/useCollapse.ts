import { computed } from 'vue';
import { useLogin } from '@/stores/login';
export const useCollapse = () => {
  const login = useLogin();
  const isCollapse = computed(() => {
    return login.collapse;
  });
  const handleCollapse = () => {
    login.collapse = !login.collapse;
  };
  return { isCollapse, handleCollapse };
};
