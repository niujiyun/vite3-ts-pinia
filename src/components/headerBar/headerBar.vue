<template>
  <div class="headerBar">
    <div class="headerBar-left">
      <iscollapse />
      <breadcrumb />
    </div>
    <div class="headerBar-right">
      <theme />
      <screenFull />
      <userSet />
    </div>
  </div>
</template>

<script lang="ts" setup>
import screenFull from './screenFull.vue';
import userSet from './userSet.vue';
import theme from './theme.vue';
import iscollapse from './iscollapse.vue';
import breadcrumb from './breadcrumb.vue';
</script>

<style scoped lang="scss">
.headerBar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .headerBar-left {
    display: flex;
    align-items: center;
    line-height: 40px;
  }
  .headerBar-right {
    display: flex;
    align-items: center;
  }
}
</style>
