export let firstMenu: any = null;

export const filterRouter = (menu: any) => {
  const allRouter: any[] = [];
  const routers: any[] = [];
  const modules = import.meta.glob('@/router/main/**/**.ts', { eager: true });
  Object.values(modules).forEach((item: any) => {
    if (item.default) {
      allRouter.push(item.default);
    }
  });
  const handleMenu = (menu: any) => {
    for (const route of menu) {
      if (route.type === '1') {
        const item = allRouter.find((item) => item.path === route.url);
        if (item) {
          routers.push(item);
        }
        if (!firstMenu) {
          firstMenu = item;
          console.log(firstMenu, 'firstMenu');
        }
      } else if (route.type === '2') {
        handleMenu(route.children);
      }
    }
  };
  handleMenu(menu);
  return routers;
};
