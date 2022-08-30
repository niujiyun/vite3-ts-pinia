<template>
  <div class="screenFull" @click="toggleFullscreen()">
    <el-icon><i-ep-FullScreen /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';
const { toggle } = useFullscreen();

const toggleFullscreen = () => {
  toggle();
};
</script>

<style scoped lang="scss">
.screenFull {
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
