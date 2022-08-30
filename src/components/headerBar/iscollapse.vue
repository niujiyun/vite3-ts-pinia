<template>
  <div class="icon">
    <el-icon v-if="!isCollapse" @click="handleCollapse"><i-ep-Fold /></el-icon>
    <el-icon v-else @click="handleCollapse"><i-ep-Expand /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { useCollapse } from '@/hooks/useCollapse';
const { isCollapse, handleCollapse } = useCollapse();
</script>

<style scoped lang="scss">
.icon {
  display: flex;
  align-items: center;
}
</style>
