import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { computed } from 'vue';
export const useBreadcrumb = () => {
  const breadcrumbStore = useBreadcrumbStore();
  const breadcrumbList = computed(() => {
    return breadcrumbStore.breadcrumb;
  });
  const handleBreadcrumb = (menus: any, currentPath: string): any => {
    for (const menu of menus) {
      // console.log(menu, 'breadcrumb');
      if (menu.type === '1' && menu.url === currentPath) {
        breadcrumbStore.breadcrumb = [];
        breadcrumbStore.$patch((state) => {
          state.breadcrumb.push(menu);
        });
        console.log(breadcrumbStore.breadcrumb, 'breadcrumbStore.breadcrumb');
        return menu;
      } else if (menu.type === '2') {
        const findMenu = handleBreadcrumb(menu.children ?? [], currentPath);
        if (findMenu) {
          breadcrumbStore.breadcrumb = [];
          breadcrumbStore.breadcrumb.push(menu, findMenu);
          return findMenu;
        }
      }
    }
  };
  return { handleBreadcrumb, breadcrumbList };
};
