import { defineStore } from 'pinia';
export const useBreadcrumbStore = defineStore('breadcrumb', {
  state: (): Tag => ({
    breadcrumb: []
  }),
  actions: {
    handleBreadcrumb(menus: any, currentPath: string): any {
      for (const menu of menus) {
        if (menu.type === '1' && menu.url === currentPath) {
          return [menu];
        } else if (menu.type === '2') {
          const findMenu = this.handleBreadcrumb(menu.children ?? [], currentPath);
          if (findMenu) {
            return [menu, ...findMenu];
          }
        }
      }
    },
    setbreadcrumb(menus: any, currentPath: string) {
      console.log(this.breadcrumb, 'this.breadcrumb');
      this.breadcrumb = this.handleBreadcrumb(menus, currentPath);
      console.log(this.breadcrumb, 'this.breadcrumb2');
    }
  }
});

interface Tag {
  breadcrumb: any[];
}
