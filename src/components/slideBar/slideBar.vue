<template>
  <div>
    <el-menu
      :default-active="route.path"
      class="el-menu-vertical-demo"
      :collapse-transition="false"
      :collapse="isCollapse"
    >
      <div class="title">{{ isCollapse ? '' : 'XXX系统管理' }}</div>
      <template v-for="items in list" :key="items.url">
        <el-menu-item :index="items.url" v-if="items.type === '1'" @click="handlePath(items.url, items.meta.name)">
          <el-icon><i-ep-location /></el-icon>
          <template #title>
            <span>{{ items.meta.name }}</span>
          </template>
        </el-menu-item>
        <template v-if="items.type === '2'">
          <el-sub-menu :index="items.url">
            <template #title>
              <el-icon><i-ep-location /></el-icon>
              <span>{{ items.meta.name }}</span>
            </template>
            <template v-for="item in items.children" :key="item.url">
              <el-menu-item :index="item.url" @click="handlePath(item.url, item.meta.name)"
                ><el-icon><i-ep-location /></el-icon>
                <template #title>
                  <span>{{ item.meta.name }}</span>
                </template></el-menu-item
              >
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useLogin } from '@/stores/login';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCollapse } from '@/hooks/useCollapse';
import { useTag } from '@/hooks/useTag';
import { useBreadcrumbStore } from '@/stores/breadcrumb';
const router = useRouter();
const route = useRoute();
//展开缩放
const { isCollapse } = useCollapse();
const login = useLogin();
const list = computed(() => {
  return login.menu;
});
//tag部分
const tag = useTag();
const listTag = {
  path: route.path,
  name: route.meta.name as string
};
tag.addTag(listTag);
//面包屑
const breadcrumb = useBreadcrumbStore();
breadcrumb.setbreadcrumb(list.value, route.path);
//点击事件
const handlePath = (val: string, name: string) => {
  if (route.path !== val) {
    router.push(val);
    const listTags = {
      path: val,
      name: name
    };
    breadcrumb.setbreadcrumb(list.value, val);
    tag.addTag(listTags);
  }
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
}
.title {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
