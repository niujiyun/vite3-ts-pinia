<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in list" :key="item.path">{{ item.meta.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { computed } from 'vue';
const Breadcrumb = useBreadcrumbStore();
console.log(Breadcrumb.breadcrumb);
const list = computed(() => {
  return Breadcrumb.breadcrumb;
});
console.log(list, 'list');
</script>

<style scoped lang="scss">
.breadcrumb {
  margin-left: 10px;
  height: 100%;
}
</style>
