<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'"><slideBar /></el-aside>
      <el-container>
        <el-header><headerBar /> </el-header>
        <tagList></tagList>
        <el-main> <RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import headerBar from '@/components/headerBar/headerBar.vue';
import slideBar from '@/components/slideBar/slideBar.vue';
import { RouterView } from 'vue-router';
import { useCollapse } from '@/hooks/useCollapse';
import tagList from '@/components/tagList/index.vue';
const { isCollapse } = useCollapse();
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
  .el-aside {
    // background-color: #f00;
    height: 100vh;
  }
  .el-header {
    // background: rgb(241, 242, 242);
    height: 40px;
    border-bottom: 1px solid #dcdfe6;
  }
}
</style>
